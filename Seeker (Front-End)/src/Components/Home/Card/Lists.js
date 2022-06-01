import './s.css';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";

import { Component } from 'react'

export default class Lists extends Component {

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
                            <div className="section-title text-center"><span className="subtitle">{this.props.desc}</span>
                                <h2 className="title mb-5">{this.props.headline}</h2>
                            </div>
                        </div>
                    </div>

                  

                </div>
            </div>
        )
    }
}
