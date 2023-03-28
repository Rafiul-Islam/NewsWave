import React from 'react';
import NewsItem from "./newsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./loader";

const News = ({news, totalNews, hasMore, getData}) => {
    return (
        <div className="row mx-0">
            <InfiniteScroll
                dataLength={news.length}
                next={getData}
                hasMore={hasMore}
                loader={<Loader/>}
            >
                <div className='row mx-0'>
                    {
                        news && news.map(item =>
                            <div key={item.url} className='col-xl-3 col-lg-4 col-md-6'>
                                <NewsItem news={item}/>
                            </div>)
                    }
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default News;
