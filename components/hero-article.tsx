import { Article } from "../interfaces";
import { displayCategories } from "../utils/display";
import Link from "next/link";
import dayjs from "dayjs";
import MarkdownIt from "markdown-it";
import { useEffect } from "react";

interface HeroArticleProps {
  article: Article;
}

const HeroArticle: React.FC<HeroArticleProps> = ({
  article: { author, content, categories, created_at, image, title, id },
}) => {
  const mdParser = new MarkdownIt();
  const image_url = `http://${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;
  const displayDate = dayjs(created_at).format("MM/DD/YYYY");
  const MAX_CHARACTERS = 400;
  const displayContent =
    content.length <= MAX_CHARACTERS
      ? content
      : `${content.slice(0, MAX_CHARACTERS)}[...]`;

  useEffect(() => {
    const contentSpan = document.querySelector(
      ".hero-article__content--article"
    );
    if (contentSpan) {
      contentSpan.innerHTML = mdParser.render(displayContent);
    }
  }, []);

  return (
    <div className='hero-article'>
      <div className='hero-article__img'>
        <img src={image_url} alt='' />
      </div>
      <div className='hero-article__content'>
        <span className='hero-article__content--category capitalize'>
          {displayCategories(categories)}
        </span>
        <h1 className='hero-article__content--title '>{title}</h1>
        <span className='hero-article__content--sub-title'>
          By <span className='capitalize'>{author.name}</span> on {displayDate}{" "}
        </span>
        <span className='hero-article__content--article mt-2'></span>
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
