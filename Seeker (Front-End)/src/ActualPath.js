

import React, { Component } from 'react'
import './Components/Home/Card/s.css'
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";

export default class
   ActualPath extends Component {
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
       
               
                   
                   
                        <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={100} data-aos-once="true" style={{margin:'20px'}} className="col-lg-5 col-md-5 col-sm-12  mt-5 mt-md-3 mt-sm-3 aos-init aos-animate">
                            <div className="rn-service">
                                <div className="inner">
                                    <div className="icon" style={{display:'inline'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
                                            <line x1={3} y1={12} x2={21} y2={12} />
                                            <line x1={3} y1={6} x2={21} y2={6} />
                                            <line x1={3} y1={18} x2={21} y2={18} />
                                        </svg>
                                    </div>
                                    <div className="meta  " style={{display:'inline',marginLeft:'60%'}}>
                                                <i onClick={this.favoiteToggle} >
                                                    {this.state.IsFavorite ? <AiFillHeart style={{ width: "32px", height: "32px",color:"red" }} /> : <AiOutlineHeart style={{ width: "32px", height: "32px" , color:"red"}} />}
                                                </i>
                                                <i onClick={this.listToggle} >
                                                    {this.state.IsMylist ? <BsBookmarkPlusFill style={{ width: "30px", height: "30px", marginLeft: "4px",color: "mediumblue" }} /> : <BsBookmarkPlus style={{ width: "30px", height: "30px", marginLeft: "4px",color: "mediumblue" }} />}
                                                </i>
                                            </div>
                                            
                                    <div className="content"><h4 className="title"><a href="#!">{this.props.title}</a></h4>
                                        <p className="description">{this.props.desc}</p><a className="read-more-button" href="#1st-slider">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                <line x1={5} y1={12} x2={19} y2={12} />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                              </div>


                                






















                        </div>

                  
               
          
        )
    }
}
