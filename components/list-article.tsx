import { Article } from "../interfaces";
import ArticleBrowse from "./article-browse";

interface ListArticleProps {
  articles: Array<Article>;
}

const ListArticle: React.FC<ListArticleProps> = ({ articles }) => {
  return (
    <div className='list-article-container'>
      <div className='list-article'>
        {articles.map((article) => {
          return <ArticleBrowse article={article} />;
        })}
        <span className='btn btn--black'>Load more stories</span>
        {/* social  */}
      </div>
      <div className='list-article-container__social mt-2'>
        <span>Signup for my newsletter</span>
        <span className='btn btn--black mt-1'>signup</span>
      </div>
    </div>
  );
};

export default ListArticle;
