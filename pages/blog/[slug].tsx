import { Params } from "next/dist/next-server/server/router";
import dayjs from "dayjs";
import Link from "next/link";
import ErrorPage from "next/error";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import { Article } from "../../interfaces";
import { dummyArticles } from "../../mock_data/posts";

interface ArticlePageProps {
  article?: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const router = useRouter();
  if (!article) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Navbar />
      <hr className='screen-sep mt-2' />
      <div className='article-container'>
        <article className='main-article'>
          <div className='main-article__header'>
            <span className='main-article__header--category capitalize'>
              {article.category}
            </span>
            <h1 className='main-article__header--title capitalize'>
              {article.title}
            </h1>
            <span className='main-article__header--footer'>
              Posted by <Link href=''>{article.author}</Link>,{" "}
              {dayjs(article.created_at).format("MM/DD/YYYY")}
            </span>
          </div>
          <figure className='main-article__figure mt-2'>
            <img
              src={article.image}
              alt=''
              className='main-article__figure__image'
            />
          </figure>
          <div className='main-article__content mt-2'>{article.content}</div>
        </article>
        <div className='article-container__social '>
          <span>Signup for my newsletter</span>
          <span className='btn btn--black mt-1'>signup</span>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }: Params) {
  const { slug } = params;
  const article: Article = dummyArticles[slug];
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const articles: string[] = [];
  for (let key in dummyArticles) {
    articles.push(key);
  }
  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article,
        },
      };
    }),
    fallback: false,
  };
}

export default ArticlePage;
