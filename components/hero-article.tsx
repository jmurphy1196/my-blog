import { Article } from "../interfaces";
import Link from "next/link";
import dayjs from "dayjs";
import MarkdownIt from "markdown-it";
import { useEffect } from "react";

interface HeroArticleProps {
  article: Article;
}

const HeroArticle: React.FC<HeroArticleProps> = ({
  article: { author, content, category, created_at, tags, image, title, id },
}) => {
  const mdParser = new MarkdownIt();
  const displayDate = dayjs(created_at).format("MM/DD/YYYY");
  const MAX_CHARACTERS = 350;
  const displayContent =
    content.length <= MAX_CHARACTERS
      ? content
      : `${content.slice(0, MAX_CHARACTERS)}[...]`;

  return (
    <div className='hero-article'>
      <div className='hero-article__img'>
        <img src={image} alt='' />
      </div>
      <div className='hero-article__content'>
        <span className='hero-article__content--category capitalize'>
          {category}
        </span>
        <h1 className='hero-article__content--title '>{title}</h1>
        <span className='hero-article__content--sub-title'>
          By <span className='capitalize'>{author}</span> on {displayDate}{" "}
        </span>
        <span className='hero-article__content--article mt-2'>
          {displayContent}
        </span>
        <Link href={`/blog/${id}`}>
          <a href='' className='btn btn--black mt-2'>
            <span className=''>Read more</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeroArticle;
