import React from 'react';
import '../assets/css/news.scss';

const NewsItem = ({news}) => {
    const {title, description, urlToImage} = news;
    return (
        <div className="card news-card">
            <img src={urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default NewsItem;
