import { gql } from "@apollo/client";

const GET_ALL_ARTICLES = gql`
  query Articles {
    articles {
      title
      content
      image {
        url
      }
      categories {
        type
      }
      created_at
      author {
        name
      }
      id
    }
  }
`;
const GET_ALL_ARTICLES_ID = gql`
  query ArticlesByID {
    articles {
      id
    }
  }
`;
const GET_ARTICLE = gql`
  query Article($slug: Int!) {
    articles(where: { id: $slug }) {
      title
      content
      image {
        url
      }
      categories {
        type
      }
      created_at
      author {
        name
        id
      }
      id
    }
  }
`;

export const GET_NEWEST_ARTICLES = gql`
  query Articles {
    articles(sort: "created_at:desc", limit: 4) {
      title
      content
      image {
        url
      }
      categories {
        type
      }
      created_at
      author {
        name
      }
      id
    }
  }
`;
export const GET_POPULAR_ARTICLES = gql`
  query Articles($start: Int!) {
    articles(sort: "views:desc", limit: 4, start: $start) {
      title
      content
      image {
        url
      }
      categories {
        type
      }
      created_at
      author {
        name
      }
      id
    }
  }
`;

export const GET_ARTICLE_BY_CATEGORIES = gql`
  query Articles($start: Int!, $categories: [String], $title: [String]) {
    articles(
      where: {
        categories: { type_contains: $categories }
        title_contains: $title
      }
      limit: 4
      start: $start
    ) {
      title
      content
      image {
        url
      }
      categories {
        type
      }
      created_at
      author {
        name
      }
      id
    }
  }
`;

export const GET_HERO_ARTICLE = gql`
  query Articles {
    heroArticle {
      article {
        title
        content
        image {
          url
        }
        categories {
          type
        }
        created_at
        author {
          name
        }
        id
      }
    }
  }
`;

export const GET_MORE_ARTICLES = gql`
  query Articles($start: Int!) {
    articles(sort: "created_at:desc", limit: 4, start: $start) {
      title
      content
      image {
        url
      }
      categories {
        type
      }
      created_at
      author {
        name
      }
      id
    }
  }
`;

export { GET_ALL_ARTICLES, GET_ALL_ARTICLES_ID, GET_ARTICLE };
