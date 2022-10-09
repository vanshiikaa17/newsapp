import React, {useEffect, useState} from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import logo from './logo.png'

const News=(props)=>{
  

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const updateNews= async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();

    setarticles(parsedData.articles);
    setloading(false);
    settotalResults(parsedData.totalResults);
   
  }
  useEffect(() => {
      document.title = `News Daily - ${capitalizeFirstLetter(
      props.category
    )} `;
  
    updateNews();
    //eslint-disable-next-line
  }, [])
  
  
 

  const fetchMoreData = async () => {
    setpage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);

    let data = await fetch(url);
    let parsedData = await data.json();
  
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
    return (
      <>
      <div className=" text-center">
      <img src={logo} alt="logo" height={"112rem"} width={"112rem"} style={{marginTop:"4rem", marginBottom:"1rem"}}></img>

      </div>

        <h1 className=" heading text-center text-uppercase" >

          {props.category} - Top Stories

        </h1>
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader= {loading && <Spinner />}
        >
          <div className="container">
            <div className="row my-4">
              {articles.map((e, i) => {
                return (
                  <div className="col-md-4 my-4" key={i}>
                    <NewsItems
                      title={e.title}
                      description={
                        e.description ? e.description.slice(0, 88) : ""
                      }
                      imgURL={
                        e.urlToImage
                          ? e.urlToImage
                          : "https://images.indianexpress.com/2022/06/Enchanted-lake-perseverance-rover-Mars.jpg"
                      }
                      newsURL={e.url}
                      author={!e.author ? "Unknown " : e.author}
                      date={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }


News.defaultProps = {
  country: "in",
  pageSize: "12",
  catgory: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
