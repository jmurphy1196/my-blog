import dayjs from "dayjs";
import Link from "next/link";
import { Article } from "../interfaces";

interface ArticleBrowseProps {
  article: Article;
}

const ArticleBrowse: React.FC<ArticleBrowseProps> = ({
  article: { author, content, tags, title, created_at, image, category },
}) => {
  const MAX_CHARACTERS = 500;
  const displayContent =
    content.length <= MAX_CHARACTERS
      ? content
      : `${content.slice(0, MAX_CHARACTERS)}[...]`;
  return (
    <article className='list-article__article'>
      <div className='list-article__article__header capitalize'>
        <div className='list-article__article__header__meta'>
          <h4 className='list-article__article__header--category capitalize'>
            {category}
          </h4>
          <h3 className='list-article__article__header--post-title'>{title}</h3>
          <span>
            by <Link href=''>{author}</Link> on{" "}
            {dayjs(created_at).format("MM/DD/YYYY")}
          </span>
        </div>
        <img
          src={image}
          alt=''
          className='list-article__article__header--post-image'
        />
      </div>
      <div className='list-article__article__content mt-2'>
        <span>{displayContent}</span>
      </div>
      <hr className='mt-4' />
    </article>
  );
};

export default ArticleBrowse;
