import React from 'react';
import '../assets/css/news.scss';
import formatDate from "../utils/formatDate";
import newsImage from '../assets/images/news.jpg';

const NewsItem = ({news}) => {

    const {title, description, urlToImage, url, publishedAt, source, author} = news;
    const handleNewsCardClick = () => window.open(url, '_blank');

    return (
        <div className="card news-card" onClick={handleNewsCardClick}>
            <img src={urlToImage ? urlToImage : newsImage} className="card-img-top"/>
            <div className='badge bg-danger text-white'>{source.name}</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='publishedAt'>{formatDate(publishedAt)}</p>
                <p className='author'>- {author ? author : "Unknown"}</p>
            </div>
        </div>
    );
};

export default NewsItem;
