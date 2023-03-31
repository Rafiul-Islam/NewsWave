import React from 'react';
import '../assets/css/navbar.scss';

const Navbar = ({categories, selectedCategory, onCategoryChange, onSearchKeyChange, onSearch, searchKey}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-success py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsWave</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {
                            categories && categories.map(category =>
                                <li key={category} onClick={() => onCategoryChange(category)} className="nav-item">
                                    <a className={`nav-link text-capitalize clickable ${category === selectedCategory && 'active'}`}>
                                        {category}
                                    </a>
                                </li>
                            )
                        }

                    </ul>
                    <div className="d-flex">
                        <input
                            onChange={onSearchKeyChange}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search" aria-label="Search"
                            value={searchKey}
                        />
                        <button onClick={onSearch} className="btn btn-outline-light" type="button">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
