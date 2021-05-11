import { Params } from "next/dist/next-server/server/router";
import { useEffect } from "react";
import { displayCategories } from "../../utils/display";
import Head from "next/head";
import Social from "../../components/social";
import MarkDownIt from "markdown-it";
import client from "../../graphql/apollo-client";
import { GET_ALL_ARTICLES_ID, GET_ARTICLE } from "../../graphql/query";
import hljs from "highlight.js";
import dayjs from "dayjs";
import Link from "next/link";
import ErrorPage from "next/error";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar";
import { Article } from "../../interfaces";

interface ArticlePageProps {
  article?: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  //@ts-ignore
  //  hljs.initLineNumbersOnLoad();

  const mdParser = new MarkDownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }

      return ""; // use external default escaping
    },
  });
  if (!article) {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {
    //increase article view count by 1
    const existingView = localStorage.getItem(`article-id-${article.id}`);
    if (!existingView) {
      //update the view

      //set item so the view will not get updated next time the user looks at the article
      localStorage.setItem(`article-id-${article.id}`, "true");
    } else {
      console.log("This user has already viewed the article");
    }
    const contentDiv = document.querySelector(".main-article__content");
    if (contentDiv) {
      contentDiv.innerHTML = mdParser.render(article.content);
      const imageTags: HTMLImageElement[] = Array.from(
        document.querySelectorAll("p img")
      );
      imageTags.forEach((image) => {
        const httpsImageSrc = image.src.replace(
          "http://144.126.216.200",
          "https://mystrapiblog.xyz"
        );
        image.src = httpsImageSrc;
        const figureElement = document.createElement("figure");
        const figureCaptionElement = document.createElement("figcaption");
        figureCaptionElement.innerHTML = image.alt;
        const parentElement = image.parentElement;
        parentElement?.removeChild(image);
        parentElement?.append(figureElement);
        figureElement.append(image);
        figureElement.append(figureCaptionElement);
      });
    }
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>Jason | {article.title}</title>
        </Head>
        <Navbar />
        <hr className='screen-sep mt-2' />
        <div className='article-container'>
          <article className='main-article'>
            <div className='main-article__header'>
              <span className='main-article__header--category capitalize'>
                {displayCategories(article.categories, " | ")}
              </span>
              <h1 className='main-article__header--title capitalize'>
                {article.title}
              </h1>
              <span className='main-article__header--footer'>
                Posted by{" "}
                <Link href=''>
                  <a href=''>{article.author.name}</a>
                </Link>
                ,{dayjs(article.created_at).format("MM/DD/YYYY")}
              </span>
            </div>
            <figure className='main-article__figure mt-2'>
              <img
                src={`https://${process.env.NEXT_PUBLIC_STRAPI_URL}${article.image.url}`}
                alt=''
                className='main-article__figure__image'
              />
            </figure>
            <div className='main-article__content mt-2'></div>
          </article>
          <div className='article-container__social social '>
            <Social />
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps({ params }: Params) {
  const { slug } = params;
  // const article: Article = dummyArticles[slug];
  const { data } = await client.query({
    query: GET_ARTICLE,
    variables: {
      slug: +slug,
    },
  });
  const article: Article = {
    ...data.articles[0],
  };
  return {
    props: {
      article,
    },
    revalidate: 2,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_ARTICLES_ID });
  return {
    paths: data.articles.map((article: any) => {
      return {
        params: {
          slug: article.id,
        },
      };
    }),
    fallback: false,
  };
}

export default ArticlePage;
