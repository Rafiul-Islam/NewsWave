import React, {useEffect, useState} from 'react';
import NewsItem from "./newsItem";
import db from '../db.json';

const News = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(db);
        console.log(db);
    }, [])
    return (
        <div className="row mx-0">
            {
                data && data.map(item =>
                    <div className='col-xl-3 col-lg-4 col-md-6'>
                        <NewsItem news={item}/>
                    </div>
                )
            }
        </div>
    );
};

export default News;
