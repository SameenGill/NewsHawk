import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) =>{
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true) 
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
    // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsHawk`
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, [])

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }
  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }
   const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

    return (
      <>
          <h2 className="text-center my-3">NewsHawk - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
          {loading && <Spinner />}
          <InfiniteScroll
            style={{overflow: 'hidden'}}
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {articles.map((element, index) => {
                  return <div className='col-md-4 my-3' key={index}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
      </>
    )
  }
News.defaultProps = {
  country: 'us',
  pageSize: 9,
  category: 'business'
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News
