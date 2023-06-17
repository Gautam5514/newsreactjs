import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?"https://img.etimg.com/thumb/msid-101000807,width-210,height-158,imgsize-66440,,resizemode-75/fed-holds-rates-steady-sees-two-small-hikes-by-end-of-year.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
