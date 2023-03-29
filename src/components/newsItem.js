import React from 'react';
import '../assets/css/news.scss';
import formatDate from "../utils/formatDate";

const NewsItem = ({news}) => {

    const {title, description, urlToImage, url, publishedAt, source, author} = news;
    const handleNewsCardClick = () => window.open(url, '_blank');
    const defaultNewsImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlS2MyP82wFMKpr7e1CxfyAoqgDRx0Bg0seg&usqp=CAU";

    return (
        <div className="card news-card" onClick={handleNewsCardClick}>
            <img src={urlToImage ? urlToImage : defaultNewsImage} className="card-img-top"/>
            <div className='badge bg-danger text-white'>{source.name}</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='publishedAt'>{formatDate(publishedAt)}</p>
                <p className='author'>- {author}</p>
            </div>
        </div>
    );
};

export default NewsItem;
