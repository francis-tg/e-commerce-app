import React from "react";

function Article({article}) {
  return (
    <div className='m-3 card bg-slate-100 shadow-xl '>
      <figure>
        <img src={article.image} className='h-48 w-48'></img>
      </figure>
      <div className='card-body'>
        <div className='card-title'>{article.title}</div>
        <h5 className='text-3xl text-bold'>{article.price}</h5>
      </div>
    </div>
  );
}

export default Article;
