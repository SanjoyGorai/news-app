import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

const App = () => {
  const noImg = 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ='

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=microsoft&apiKey=e270308ecdb947dea9d8c183ef972a7e')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        console.log(data.articles);
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <>
      <div className='continer flex flex-wrap'>
        <h1>News App</h1>
        {
          articles.map((article) => {
            return (
              <div className='w-52'>
                {
                  article.urlToImage != null ?
                    <img className='rounded w-36' src={article.urlToImage} alt="" />
                    :
                    <img className='rounded w-36' src={noImg} alt="" />
                }
                <h2>{article.title}</h2>
                <h3 className='text-blue-500 font-semibold'>{'Auther : ' + article.author}</h3>
                {/* <p>{article.description}</p> */}
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App