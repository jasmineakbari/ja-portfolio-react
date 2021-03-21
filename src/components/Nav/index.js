import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        handlePageChange,
        currentPage,
        contactSelected,
        setContactSelected
    } = props;
    const page = ['About', 'Portfolio', 'Resume'];

    return(
        <header className="navbar navbar-expand-lg">
            <ul className="navbar-nav collapse navbar-collapse justify-content-center" id="navbarNav">
                <btn className="nav-item btn-lg">
                    <li>
                        <a className="nav-link" href="#aboutMe" onClick={() => 
                            setContactSelected(false) && 'navActive'}>
                            About Me
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                </btn>
                <btn className="nav-item btn-lg">
                    <li onClick={() => setContactSelected(false) && 'navActive'}>
                        <a className="nav-link" href="#works">
                            Portfolio
                        </a>
                    </li>
                </btn>
                <btn className="nav-item btn-lg">
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a className="nav-link" href="#contact">
                            <span onClick={() => setContactSelected(true)}>
                                Contact
                            </span>
                        </a>
                    </li>
                </btn>
                <btn className="nav-item btn-lg">
                    <li onClick={() => setContactSelected(false) && 'navActive'}>
                        <a className="nav-link" href="#resume">
                            Resume
                        </a>
                    </li>
                </btn>
            </ul>
        </header>
    );
}

export default Nav;