import Layout from "../../components/Layout";
import Navbar from "../../components/navbar";
import ListArticle from "../../components/list-article";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ARTICLE_BY_CATEGORIES } from "../../graphql/query";
import { Article } from "../../interfaces";
import { ParsedUrlQuery } from "node:querystring";
import Input from "../../components/input";
import { parseSearchField } from "../../utils/parse-search-field";

interface SearchPageProps {
  searchQuery: ParsedUrlQuery;
}

const SearchPageWrapper: React.FC = () => {
  const router = useRouter();
  const searchQuery = router.query;

  useEffect(() => {}, []);

  if (Object.keys(searchQuery).length < 1) {
    return <></>;
  } else {
    return <SearchPage searchQuery={searchQuery} />;
  }
};

const SearchPage: React.FC<SearchPageProps> = ({ searchQuery }) => {
  const [categories, setCategories] = useState<Array<string>>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [skip, setSkip] = useState(true);

  //conditionally call query based off url queries
  let CURRENT_QUERY = GET_ARTICLE_BY_CATEGORIES;
  const { loading } = useQuery(CURRENT_QUERY, {
    variables: {
      start: articles.length || 0,
      categories: categories,
      title: titles,
    },
    onCompleted: (completedData) => {
      console.log(completedData);
      setArticles([...articles, ...completedData.articles]);
      setSkip(true);
    },
    skip: skip,
  });
  useEffect(() => {
    if (searchQuery.category) {
      if (typeof searchQuery.category === "object") {
        //array of categories
        setCategories([...searchQuery.category]);
      } else {
        //a single category
        setCategories([searchQuery.category]);
      }
      if (searchQuery.title) {
        if (typeof searchQuery.title === "object") {
          setTitles([...searchQuery.title]);
        } else {
          setTitles([searchQuery.title]);
        }
      }
    }
    setSkip(false);
  }, []);
  return (
    <Layout>
      <Navbar
        onSearchChange={(c, t) => {
          setArticles([]);
          setCategories(c);
          setTitles(t);
          setSkip(false);
        }}
      />
      {/* only shows on mobile devices */}
      <Input
        type='text'
        className='search-page__input'
        placeholder='search...'
        rounded
        onChange={(e) => {
          const { categories: c, titles: t } = parseSearchField(e.target.value);
          setArticles([]);
          setCategories(c);
          setTitles(t);
          setSkip(false);
        }}
      />
      {!articles.length ? (
        <ListArticle loading={loading} />
      ) : (
        <ListArticle
          articles={articles}
          loading={loading}
          onClick={() => {
            setSkip(false);
            setTimeout(() => {
              const listArticleDiv: HTMLDivElement | null = document.querySelector(
                ".list-article-container"
              );
              if (listArticleDiv) {
                setTimeout(() => {
                  window.scrollTo(0, listArticleDiv!.scrollHeight);
                }, 100);
              }
            }, 200);
          }}
        />
      )}
    </Layout>
  );
};

export default SearchPageWrapper;
