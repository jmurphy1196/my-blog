import dayjs from "dayjs";
import Link from "next/link";
import { Article } from "../interfaces";
import { displayCategories } from "../utils/display";

interface ArticleBrowseProps {
  article: Article;
}

const ArticleBrowse: React.FC<ArticleBrowseProps> = ({
  article: { author, content, title, created_at, image, categories, id },
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
            {displayCategories(categories)}
          </h4>
          <h3 className='list-article__article__header--post-title'>
            <Link href={`/blog/${id}`}>{title}</Link>
          </h3>
          <span>
            by <Link href='/blog/8'>{author.name}</Link> on{" "}
            {dayjs(created_at).format("MM/DD/YYYY")}
          </span>
        </div>
        <Link href={`/blog/${id}`}>
          <img
            src={`http://${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
            alt=''
            className='list-article__article__header--post-image is-rounded'
          />
        </Link>
      </div>
      <div className='list-article__article__content mt-2'>
        <span>{displayContent}</span>
      </div>
      <hr className='mt-4' />
    </article>
  );
};

export default ArticleBrowse;
