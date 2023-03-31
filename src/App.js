import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar";
import News from "./components/news";
import categoriesList from './services/categoriesService';
import http from "./services/httpService";
import api from './services/apiEndPointService';
import {toast, ToastContainer} from "react-toastify";

const App = () => {

    const categories = categoriesList;
    const [selectedCategory, setSelectedCategory] = useState("business");
    const [news, setNews] = useState([]);
    const [totalNews, setTotalNews] = useState();
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 10
    const [page, setPage] = useState(1);
    const [searchKey, setSearchKey] = useState("");
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);

    const fetchData = async () => {
        try {
            const {data} = await http.get(`${api.baseApiEndPoint}&category=${selectedCategory}&pageSize=${pageSize}&page=${page}&q=${searchKey}`);
            if (data.articles.length === 0) setHasMore(false);

            setNews([...news, ...data.articles]);
            setTotalNews(data.totalResults);
            let newActivePage = page + 1;
            setPage(newActivePage);

            data.articles.length < pageSize && setHasMore(false);
        } catch (e) {
            toast.error(e.response.data);
        }
    }

    const handleCategoryChange = (categoryName) => {
        setSearchKey("");
        setNews([]);
        setSelectedCategory(categoryName);
        setPage(1);
        setHasMore(true);
    }

    useEffect(() => {
        fetchData();
    }, [selectedCategory, searchButtonClicked]);

    const handleSearchKeyType = (e) => {
        setSearchKey(e.target.value);
    }

    const handleSearch = () => {
        setPage(1);
        setNews([]);
        setHasMore(true);
        setSelectedCategory("");
        setSearchButtonClicked(!searchButtonClicked);
    }

    return (
        <>
            <ToastContainer theme="colored"/>
            {
                categories &&
                <Navbar
                    categories={categoriesList}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                    onSearchKeyChange={handleSearchKeyType}
                    onSearch={handleSearch}
                />
            }
            <div className='container my-4'>
                {
                    news &&
                    <News
                        news={news}
                        totalNews={totalNews}
                        hasMore={hasMore}
                        getData={fetchData}
                    />
                }
                {totalNews === 0 && <h4>Sorry! No search result found!</h4>}
            </div>
        </>
    );
};

export default App;
