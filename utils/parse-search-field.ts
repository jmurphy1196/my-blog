export const parseSearchField = (searchInput: string) => {
  const categories: string[] = [];
  const titles: string[] = [];
  const tempTitles: string[] = [];
  const searchInputArray = searchInput.split(" ");
  searchInputArray.forEach((str) => {
    if (str[0] === "#") {
      categories.push(str.slice(1));
    } else {
      //its a title string
      tempTitles.push(str);
    }
  });
  if (tempTitles.length > 1) {
    let tempStr = "";
    for (let i = 0; i < tempTitles.length; i++) {
      const strLength = tempTitles[i].length;
      if (tempTitles[i][strLength - 1] === ",") {
        titles.push(tempStr + " " + tempTitles[i].slice(0, strLength - 1));
        tempStr = "";
      } else {
        tempStr += tempTitles[i] + " ";
      }
      if (i === tempTitles.length - 1 && tempStr.length) {
        titles.push(tempStr);
      }
    }
  } else {
    //only one word was typed we can push the only word into titles
    titles.push(...tempTitles);
  }
  return { categories, titles };
};
