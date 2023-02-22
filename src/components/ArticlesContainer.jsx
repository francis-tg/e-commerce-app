import React from "react";
import PropTypes from "prop-types";
import Article from "./Article";
function ArticlesContainer({articles, children}) {
  return (
    <div className='mx-20 mt-5'>
      {children}
      <div className='grid grid-rows-4 grid-flow-col gap-4'>
        {articles.map((article, i) => (
          <Article article={article} key={i}></Article>
        ))}
      </div>
    </div>
  );
}
ArticlesContainer.prototype = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default ArticlesContainer;
