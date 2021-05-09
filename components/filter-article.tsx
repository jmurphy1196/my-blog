import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_POPULAR_ARTICLES, GET_MORE_ARTICLES } from "../graphql/query";
import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Filter } from "../interfaces";

const FilterArticle: React.FC = () => {
  const [initFetch, setInitFetch] = useState(false);
  const filterOptions: Array<Filter> = ["newest", "popular"];
  const filter = useTypedSelector(({ data }) => data.filter);
  const page = useTypedSelector(({ data }) => data.page);
  const { setListArticlesFilter, addMoreArticles } = useActions();
  const [fetchArticles, {}] = useLazyQuery(
    filter === "newest" ? GET_MORE_ARTICLES : GET_POPULAR_ARTICLES,
    {
      variables: {
        start: page * 4,
      },
      onCompleted: async (completedData) => {
        if (!initFetch) {
          setInitFetch(true);

          await addMoreArticles(completedData.articles, "filter");
          const listArticleDiv: HTMLDivElement | null = document.querySelector(
            ".list-article-container"
          );
          window.scrollTo(0, listArticleDiv!.scrollHeight);
        }
      },
    }
  );

  return (
    <div className='article-filters'>
      <span>Filter articles by: </span>
      {filterOptions.map((filter_value) => {
        return (
          <span
            key={filter_value}
            onClick={async () => {
              setInitFetch(false);
              await setListArticlesFilter(filter_value, fetchArticles);
            }}
            className={`article-filters__filter${
              filter_value === filter && "--active"
            } capitalize`}
          >
            {filter_value}
          </span>
        );
      })}
    </div>
  );
};

export default FilterArticle;
