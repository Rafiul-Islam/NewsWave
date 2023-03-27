import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar";
import News from "./components/news";
import categoriesList from './config/categoriesService';

const App = () => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        setCategories(categoriesList);
        setSelectedCategory(categoriesList[0]);
    }, []);

    const handleCategoryChange = (categoryName) => {
        setSelectedCategory(categoryName);
    }

    return (
        <>
            {
                categories &&
                <Navbar
                    categories={categoriesList}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
            }
            <div className='container mt-5'>
                <News/>
            </div>
        </>
    );
};

export default App;
