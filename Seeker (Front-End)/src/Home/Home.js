import './Home.css'


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { Input } from '@nextui-org/react';
import NavBar from '../Components/NavBar/NavBar';
import NavBarSide from '../Components/SideNavBar/NavBarSide';

function Home() {

    //=====================courses=================

    const [courses, setCourses] = useState([]);
    const fetchCourses = () => {
        axios.get("http://localhost:80/courses").then((response) => {
            console.log(response.data.courses);
            setCourses(response.data.courses);
        });
    };

    const [serchCourse, setSerchCourse] = useState("");


    //==========================paths=================

    const [paths, setPaths] = useState([]);
    const fetchPaths = () => {
        axios.get("http://localhost:80/paths").then((response) => {
            console.log(response.data.paths);
            setPaths(response.data.paths);
        });
    };

    const [serchPath, setSerchPath] = useState("");

    useEffect(async () => {
        fetchPaths();
    }, []);


    useEffect(async () => {
        fetchCourses();
    }, []);




    //=======================================
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login", { replace: false });
            navigate(0);
        }
    });

    // ==========Logout================Logout================Logout==========

    const logOut = () => {
        localStorage.removeItem("token");
        navigate("/login");
        navigate(0);
    };




    //========== Favourite  courses=====================================
    const addToFavourites = async (id) => {
        axios
            .put(`http://localhost:80/courses/favourite/${id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchCourses();
            });
    };
    const removeFromFavourites = async (id) => {
        axios
            .put(`http://localhost:80/courses/favourite/remove/${id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchCourses();
            });
    };


    //========== Favourite  paths=====================================
    const addToFavouritesPaths = async (id) => {
        axios
            .put(`http://localhost:80/paths/favourite/${id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchPaths();
            });
    };
    const removeFromFavouritesPaths = async (id) => {
        axios
            .put(`http://localhost:80/paths/favourite/remove/${id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchPaths();
            });
    };


    //========== bookmark    courses =====================================
    const addToBookmarks = async (id) => {
        axios
            .put(`http://localhost:80/courses/bookmark/${id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchCourses();
            });
    };
    const removeFromBookmarks = async (id) => {
        axios
            .put(`http://localhost:80/courses/bookmark/remove/${id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchCourses();
            });
    };

    //========== bookmark   paths =====================================
    const addToBookmarksPaths = async (id) => {
        axios
            .put(`http://localhost:80/paths/bookmark/${id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchPaths();
            });
    };
    const removeFromBookmarksPaths = async (id) => {
        axios
            .put(`http://localhost:80/paths/bookmark/remove/${id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchPaths();
            });
    };





















    //=======================================
    return (
        <div>
            <NavBar />
            <NavBarSide />
        <div
            className="home rn-portfolio-area rn-section-gap section-separator"
            id="portfolio"
        >

            {/*  =========logout  ======== ======== ======== */}

         
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Here are the  paths </span>
                            <h2 className="title"> Paths</h2>
                        </div>
                    </div>
                    <div className="col-8" style={{ marginLeft: "4rem", marginTop: "2rem" }}>
                        <Input
                            label="Search for a path"
                            type="search"
                            placeholder="search..."
                            size="xl"
                            width="50%"
                            color="primary"
                            rounded
                            bordered
                            onChange={(e) => { setSerchPath(e.target.value); }}
                        />
                    </div>
                </div>
                <br />            <br />
                <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                    {paths.length ? (
                        paths.filter((path) => {
                            if (serchPath == "") {
                                return path;
                            } else if (path.pathTitle.toLowerCase().includes(serchPath.toLowerCase())) {
                                return path;
                            }
                        }).map((path) => (


                            <div key={`path-item-${path._id}`}
                                 data-aos="fade-up" data-aos-duration={500} data-aos-delay={100}
                                 data-aos-once="true" style={{ margin: '20px' }} className="col-lg-5 col-md-5 col-10 offset-1  mt-5 mt-md-3 mt-sm-3 aos-init aos-animate">
                                <div className="rn-service">
                                    <div className="inner">
                                       <div className="icon-meta">
                                        <div className="icon" style={{ display: 'inline' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24}
                                                 height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
                                                <line x1={3} y1={12} x2={21} y2={12} />
                                                <line x1={3} y1={6} x2={21} y2={6} />
                                                <line x1={3} y1={18} x2={21} y2={18} />
                                            </svg>
                                        </div>
                                        <div className="meta">






                                            {/*====================favoraite  path ===================*/}

                                            <div
                                                onClick={() => {
                                                    if (!path.isFavouritePath)
                                                        addToFavouritesPaths(path._id);
                                                    else removeFromFavouritesPaths(path._id);
                                                }}
                                                alt=""
                                                style={{
                                                    width: " 28px",
                                                    height: "auto",
                                                    marginLeft: "4px",
                                                    display: "inline",
                                                }}
                                            >
                                                {
                                                    (!path.isFavouritePath) ?
                                                        <AiOutlineHeart style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            color: "red"
                                                        }} />
                                                        :
                                                        //below true fill the heart
                                                        <AiFillHeart style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            color: "red"
                                                        }} />
                                                }
                                            </div>
                                            {/*====================END favoraite  path===================*/}
                                            {/*====================bookmark  path ===================*/}
                                            <div
                                                onClick={() => {
                                                    if (!path.isBookmarkedPath)
                                                        addToBookmarksPaths(path._id);
                                                    else removeFromBookmarksPaths(path._id);
                                                }}
                                                alt=""
                                                style={{
                                                    width: " 28px",
                                                    height: "auto",
                                                    marginLeft: "4px",
                                                    display: "inline",
                                                }}
                                            >
                                                {
                                                    (!path.isBookmarkedPath) ?
                                                        <BsBookmarkPlus style={{
                                                            width: "30px",
                                                            height: "30px",
                                                            marginLeft: "4px",
                                                            color: "mediumblue"
                                                        }} />
                                                        :
                                                        <BsBookmarkPlusFill style={{
                                                            width: "30px",
                                                            height: "30px",
                                                            marginLeft: "4px",
                                                            color: "mediumblue"
                                                        }} />

                                                }
                                            </div>


                                            {/*====================END bookmark ===================*/}

                                        </div>
                                        </div>









                                        <div className="content"><h4 className="title"><a >     {path.pathTitle}      </a></h4>
                                            <p className="description">
                                                {path.pathDescription}
                                            </p><a className="read-more-button" href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>





                            </div>
                        ))

                    ) : (


                        <h1 style={{
                            textAlign: "center"
                        }}> No paths found </h1>
                    )}

                </div>
                <br />            <br /> <br />     <br />


                {/* ===============================================Grey line ===================================================*/}
                {/* ===============================================Grey line ===================================================*/}
                {/* ===============================================Grey line ===================================================*/}
                <hr
                    style={{
                        width: "100%",
                        margin: "2rem auto",
                        marginTop: "7rem",
                        height: "2px",
                    }}
                    size="3"
                    color="black"
                ></hr>
                {/* ===============================================Grey line ===================================================*/}
                {/* ===============================================Grey line ===================================================*/}
                {/* ===============================================Grey line ===================================================*/}



                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Here are the  courses </span>
                            <h2 className="title"> Courses</h2>
                        </div>
                    </div>
                    <div className="col-8" style={{ marginLeft: "4rem", marginTop: "2rem" }}>
                        <Input
                            label="Search for a course"
                            type="search"
                            placeholder="search..."
                            size="xl"
                            width="50%"
                            color="primary"
                            rounded
                            bordered
                            onChange={(e) => { setSerchCourse(e.target.value); }}
                        />
                    </div>
                </div>

                <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                    {courses.length ? (
                        courses.filter((course) => {
                            if (serchCourse == "") {
                                return course;
                            } else if (course.subtitle.toLowerCase().includes(serchCourse.toLowerCase())) {
                                return course;
                            }
                        }).map((course) => (
                            <div
                                key={`course-item-${course._id}`}
                                className="course col-lg-4 col-xl-4 col-md-6  col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate text-align-center"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-once="true"
                            >
                                <div className="rn-portfolio" role="button" tabIndex="-1">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <a href="www.google.com" />
                                            <div
                                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                                data-gatsby-image-wrapper=""
                                            >
                                                <div style={{ maxWidth: "500px", display: "block" }}>
                                                    <img

                                                        src={process.env.PUBLIC_URL + course.image_url}
                                                        style={{
                                                            width: "100%",
                                                            display: "block",
                                                            position: "static",
                                                            maxHeight: "180px",
                                                            borderRadius: "8px"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="category-info">
                                                <div className="category-list">
                                                    <a href={course.courseSite} style={{textDecoration:"none"}}>{course.title}</a>
                                                </div>
                                                <div className="meta">


                                                    {/*====================favoraite ===================*/}

                                                    <div
                                                        onClick={() => {
                                                            if (!course.isFavourite)
                                                                addToFavourites(course._id);
                                                            else removeFromFavourites(course._id);
                                                        }}
                                                        alt=""
                                                        style={{
                                                            width: " 28px",
                                                            height: "auto",
                                                            marginLeft: "4px",
                                                            display: "inline",
                                                        }}
                                                    >
                                                        {
                                                            (!course.isFavourite) ?
                                                                <AiOutlineHeart style={{
                                                                    width: "32px",
                                                                    height: "32px",
                                                                    color: "red"
                                                                }} />
                                                                :
                                                                //below true fill the heart
                                                                <AiFillHeart style={{
                                                                    width: "32px",
                                                                    height: "32px",
                                                                    color: "red"
                                                                }} />
                                                        }
                                                    </div>
                                                    {/*====================END favoraite ===================*/}
                                                    {/*====================bookmark ===================*/}
                                                    <div
                                                        onClick={() => {
                                                            if (!course.isBookmarked)
                                                                addToBookmarks(course._id);
                                                            else removeFromBookmarks(course._id);
                                                        }}
                                                        alt=""
                                                        style={{
                                                            width: " 28px",
                                                            height: "auto",
                                                            marginLeft: "4px",
                                                            display: "inline",
                                                        }}
                                                    >
                                                        {
                                                            (!course.isBookmarked) ?
                                                                <BsBookmarkPlus style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    marginLeft: "4px",
                                                                    color: "mediumblue"
                                                                }} />
                                                                :
                                                                <BsBookmarkPlusFill style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                    marginLeft: "4px",
                                                                    color: "mediumblue"
                                                                }} />

                                                        }
                                                    </div>


                                                    {/*====================END bookmark ===================*/}

                                                </div>
                                            </div>

                                            <h4 className="title">
                                                {/*below put course description*/}
                                                <a href={course.courseSite} style={{textDecoration:"none"}}>
                                                    {course.subtitle}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className=""
                                                    >
                                                        <line x1="7" x2="17" y1="17" y2="7"></line>
                                                        <polyline points="7 7 17 7 17 17"></polyline>
                                                    </svg>
                                                </a>
                                            </h4>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))

                    ) : (


                        <h1 style={{
                            textAlign: "center"
                        }}> No courses found </h1>
                    )}
                </div>

                <br />            <br /> <br />     <br />




            </div>
        </div>
                
        </div>
    );
}

export default Home;
