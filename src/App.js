import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar";
import News from "./components/news";
import categoriesList from './services/categoriesService';
import http from "./services/httpService";
import api from './services/apiEndPointService';
import {toast, ToastContainer} from "react-toastify";

const App = () => {

    const [categories, setCategories] = useState(categoriesList);
    const [selectedCategory, setSelectedCategory] = useState("business");
    const [news, setNews] = useState([]);
    const [totalNews, setTotalNews] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 10
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const {data} = await http.get(`${api.baseApiEndPoint}&category=${selectedCategory}&pageSize=${pageSize}&page=${page}`);
            if (data.articles.length === 0) setHasMore(false);
            else {
                setNews([...news, ...data.articles]);
                setTotalNews(data.totalResults);
                let newActivePage = page + 1;
                setPage(newActivePage);
            }
        } catch (e) {
            toast.error(e.response.data);
        }
    }

    const handleCategoryChange = (categoryName) => {
        setNews([]);
        setSelectedCategory(categoryName);
        setPage(1);
        setHasMore(true);
    }

    useEffect(() => {
        fetchData();
    }, [selectedCategory]);

    return (
        <>
            <ToastContainer theme="colored"/>
            {
                categories &&
                <Navbar
                    categories={categoriesList}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
            }
            <div className='container mt-4'>
                {
                    news &&
                    <News
                        news={news}
                        totalNews={totalNews}
                        hasMore={hasMore}
                        getData={fetchData}
                    />
                }
            </div>
        </>
    );
};

export default App;
