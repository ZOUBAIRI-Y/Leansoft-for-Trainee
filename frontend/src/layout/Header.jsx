import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar_header navbar-expand-md navbar-light bg-light m-2 shadow-sm rounded-5">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand fw-bold text-primary">
                        Leansoft for trainee
                    </Link>
                    <button
                        className="navbar-toggler p-0 border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav navig_list mx-auto me-0">
                            <li className="nav-item text-center me-1">
                                <Link to={"guides"} className="nav-link">
                                    Guides
                                </Link>
                            </li>
                            <li className="nav-item text-center ms-1 me-1">
                                <Link to={"signup"} className="nav-link">
                                    signUp
                                </Link>
                            </li>
                            <li className="nav-item ms-1">
                                <Link to={"login"} className="nav-link p-0">
                                    <button className="btn btn-success login_btn rounded-5 p-2 fw-medium text-dark">
                                        login
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
