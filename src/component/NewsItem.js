import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description,imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imageUrl?"https://images.hindustantimes.com/tech/img/2022/09/18/1600x900/mars-2051747_1280_1633226355891_1663493000825_1663493000825.png":imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute',right:'0'}}>
          <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className=" text-danger">By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank " className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
