import './s.css';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";

import { Component } from 'react'

export default class Card extends Component {

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
            <div className="rn-section-gap border-top" id="portfolio">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center"><span className="subtitle"></span>
                                <h2 className="title mb-5">Cources</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                        <div className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                            <div className="rn-portfolio" role="button" tabIndex="-1">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a href='www.google.com' />
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                            data-gatsby-image-wrapper="">
                                            <div style={{ maxWidth: "800px", display: "block" }}>

                                                <img src={this.props.image}
                                                    style={{ maxWidth: "100%", display: "block", position: "static" }} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">

                                            <div className="category-list"><a href="https://www.art.com">Photoshop</a></div>
                                            <div className="meta">
                                                <i onClick={this.favoiteToggle} >
                                                    {this.state.IsFavorite ? <AiFillHeart style={{ width: "32px", height: "32px",color:"red" }} /> : <AiOutlineHeart style={{ width: "32px", height: "32px" , color:"red"}} />}
                                                </i>
                                                <i onClick={this.listToggle} >
                                                    {this.state.IsMylist ? <BsBookmarkPlusFill style={{ width: "30px", height: "30px", marginLeft: "4px",color: "mediumblue" }} /> : <BsBookmarkPlus style={{ width: "30px", height: "30px", marginLeft: "4px",color: "mediumblue" }} />}
                                                </i>
                                            </div>
                                        </div>
                                        {/*    here*/}


                                        <h4 className="title"><a href="https://www.apple.com">Logo design
                                            creativity &amp; Application
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="">
                                                <line x1="7" x2="17" y1="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
