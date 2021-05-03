import { Article } from "../interfaces/index";

export const dummyArticle: Article = {
  image:
    "https://i2.wp.com/blog.ted.com/wp-content/uploads/sites/2/2021/04/TED@BCG_2021_JensBurchardt_0003_logo.jpg?resize=649%2C487&ssl=1",
  author: "jason murphy",
  category: "web dev",
  content: `"<p>this is an exmaple article, written by jason murphy on May/02/2021</p>
<p>the first step to creating a next.js project is to input the command npx create-next-app &lt;name of project&gt; .</p>
<p>this will create a new next.js app in a new directory. the directory will be named after the project.</p>
"`,
  created_at: new Date().toISOString(),
  title: "using express with node.js",
  tags: ["#webdev", "#node.js"],
  id: "abc",
};

export const dummyArticle1: Article = {
  image:
    "https://i1.wp.com/blog.ted.com/wp-content/uploads/sites/2/2021/03/WL_S4_blog-image_1200x627.png?resize=283%2C212&ssl=1",
  author: "jason murphy",
  category: "web dev",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,sed do eiusmodonsectetur adipiscing elit, sed do eiusmodonsectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  created_at: new Date().toISOString(),
  title: "using express with node.js",
  tags: ["#webdev", "#node.js"],
  id: "def",
};
export const dummyArticle3: Article = {
  image:
    "https://i1.wp.com/blog.ted.com/wp-content/uploads/sites/2/2021/03/ZigZag.png?resize=283%2C212&ssl=1",
  author: "jason murphy",
  category: "web dev",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,eiusmod tempor consectetur adipiscing elit,sed do eiusmodonsectetur adipiscing elit, sed do eiusmodonsectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  created_at: new Date().toISOString(),
  title: "using express with node.js",
  tags: ["#webdev", "#node.js"],
  id: "ghi",
};

interface DummyArticleState {
  [key: string]: Article;
}

export const dummyArticles: DummyArticleState = {
  [dummyArticle.id]: dummyArticle,
  [dummyArticle1.id]: dummyArticle1,
  [dummyArticle3.id]: dummyArticle3,
};
