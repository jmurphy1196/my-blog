const LoadingArticleBrowse: React.FC = () => {
  return (
    <article className='list-article__article--loading'>
      <div className='list-article__article__header--loading capitalize'>
        <div className='list-article__article__header__meta--loading'>
          <h4 className='list-article__article__header--category--loading capitalize'></h4>
          <h3 className='list-article__article__header--post-title--loading'></h3>
          <span></span>
        </div>
        <a href='#'>
          <div className='list-article__article__header--post-image--loading is-rounded' />
        </a>
      </div>
      <div className='list-article__article__content--loading mt-2'>
        <span></span>
      </div>
      <hr className='mt-4' />
    </article>
  );
};

export default LoadingArticleBrowse;
