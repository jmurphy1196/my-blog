import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import HeroArticle from "../components/hero-article";
import FilterArticle from "../components/filter-article";
import ListArticle from "../components/list-article";
import client from "../graphql/apollo-client";
import { useLazyQuery } from "@apollo/client";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { useActions } from "../hooks/use-actions";
import { Article } from "../interfaces";
import { useEffect } from "react";
import {
  GET_HERO_ARTICLE,
  GET_NEWEST_ARTICLES,
  GET_MORE_ARTICLES,
  GET_POPULAR_ARTICLES,
} from "../graphql/query";

interface IndexProps {
  articles: Article[];
  heroArticle: Article;
}

const Index: React.FC<IndexProps> = ({ articles, heroArticle }) => {
  const filter = useTypedSelector(({ data }) => data.filter);
  const page = useTypedSelector(({ data }) => data.page);
  const stateArticles = useTypedSelector(({ data }) => data.articles);
  const { setListArticles, addMoreArticles } = useActions();
  const [getArticles, { loading }] = useLazyQuery(
    filter === "newest" ? GET_MORE_ARTICLES : GET_POPULAR_ARTICLES,
    {
      variables: {
        start: page * 4,
      },
      onCompleted: (completedData) => {
        if (completedData.articles) {
          addMoreArticles(completedData.articles);
          const listArticleDiv: HTMLDivElement | null = document.querySelector(
            ".list-article-container"
          );
          if (listArticleDiv) {
            window.scrollTo(0, listArticleDiv!.scrollHeight);
          }
        }
      },
    }
  );

  useEffect(() => {
    if (!stateArticles.length) {
      setListArticles(articles);
    }
  }, []);

  return (
    <>
      <Layout>
        <Navbar />
        <FilterArticle />
        <HeroArticle article={heroArticle} />
        {stateArticles.length && (
          <ListArticle
            articles={stateArticles}
            loading={loading}
            onClick={() => getArticles()}
          />
        )}
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_NEWEST_ARTICLES,
  });
  const response = await client.query({ query: GET_HERO_ARTICLE });

  if (data.articles) {
    const articles = data.articles;
    return {
      props: {
        articles,
        heroArticle: response.data.heroArticle.article,
      },
      revalidate: 1,
    };
  }

  return {
    props: {
      articles: [],
    },
    revalidate: 1,
  };
};

export default Index;
