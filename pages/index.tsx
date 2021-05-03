import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import HeroArticle from "../components/hero-article";
import FilterArticle from "../components/filter-article";
import ListArticle from "../components/list-article";
import { Article } from "../interfaces";
import { dummyArticle, dummyArticle1, dummyArticle3 } from "../mock_data/posts";

const listOfArticles: Article[] = [
  dummyArticle,
  dummyArticle3,
  dummyArticle1,
  dummyArticle1,
];

const Index: React.FC = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <FilterArticle />
        <HeroArticle article={dummyArticle} />
        <ListArticle articles={listOfArticles} />
      </Layout>
    </>
  );
};
export default Index;
