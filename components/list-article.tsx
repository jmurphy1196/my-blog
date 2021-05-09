import { Article } from "../interfaces";
import Social from "./social";
import ArticleBrowse from "./article-browse";
import "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import LoadingArticleBrowse from "./loading-article-browse";

interface ListArticleProps {
  articles?: Array<Article>;
  loading: boolean;
  onClick?: () => void;
}

const ListArticle: React.FC<ListArticleProps> = ({
  articles,
  loading,
  onClick,
}) => {
  if (articles) {
    return (
      <div className='list-article-container'>
        <div className='list-article'>
          {articles.map((article) => {
            return <ArticleBrowse article={article} key={article.id} />;
          })}
          <button
            className={`btn btn--${loading ? "loading" : "black"}`}
            disabled={loading}
            onClick={() => {
              if (onClick) {
                onClick();
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
            {loading ? (
              <FontAwesomeIcon className='loading-icon' icon={faCircleNotch} />
            ) : (
              <span>load more stories</span>
            )}
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </button>
          {/* social  */}
        </div>
        <div className='list-article-container__social social mt-2'>
          <Social />
        </div>
      </div>
    );
  } else {
    return (
      <div className='list-article-container'>
        <div className='list-article'>
          <LoadingArticleBrowse />
          <LoadingArticleBrowse />
          <LoadingArticleBrowse />
          <LoadingArticleBrowse />
          <button
            className={`btn btn--${loading ? "loading" : "black"}`}
            disabled={loading}
            onClick={() => {
              if (onClick) {
                onClick();
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
            {loading ? (
              <FontAwesomeIcon className='loading-icon' icon={faCircleNotch} />
            ) : (
              <span>load more stories</span>
            )}
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </button>
          {/* social  */}
        </div>
        <div className='list-article-container__social social mt-2'>
          <Social />
        </div>
      </div>
    );
  }
};

export default ListArticle;
