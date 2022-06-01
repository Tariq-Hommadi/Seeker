import './s.css';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";

import React, { Component } from 'react'

export default class ActualCourse extends Component {

    constructor() {
        super()
        this.state =
        {
            IsFavorite: false,
            IsMylist: false,
        };
        this.favoiteToggle = this.favoiteToggle.bind(this);
        this.listToggle = this.listToggle.bind(this);
    }

    favoiteToggle(e) {
        this.setState({ IsFavorite: !this.state.IsFavorite })
    }

    listToggle(e) {
        this.setState({ IsMylist: !this.state.IsMylist })
    }

    render() {
        return (
           
            <div
            key={`course-item-${this.props._id}`}
            className="col-lg-4 col-xl-4 col-md-6  col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate text-align-center"
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

                                    src={process.env.PUBLIC_URL + this.props.image_url}
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
                                <a href={this.props.courseSite} style={{textDecoration:"none"}}>{this.props.title}</a>
                            </div>
                            <div className="meta">


                                {/*====================favoraite ===================*/}

                                <div
                                    onClick={() => {
                                        // if (!this.props.isFavourite)
                                        //     addToFavourites(this.props._id);
                                        // else removeFromFavourites(this.props._id);
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
                                     
                                    }
                                </div>
                                {/*====================END favoraite ===================*/}
                                {/*====================bookmark ===================*/}
                                <div
                                    onClick={() => {
                                        // if (!this.props.isBookmarked)
                                        //     addToBookmarks(this.props._id);
                                        // else removeFromBookmarks(this.props._id);
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
                                     

                                    }
                                </div>


                                {/*====================END bookmark ===================*/}

                            </div>
                        </div>

                        <h4 className="title">
                            {/*below put course description*/}
                            <a href={this.props.courseSite} style={{textDecoration:"none"}}>
                                {this.props.subtitle}
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


              



          
        )
    }
}
