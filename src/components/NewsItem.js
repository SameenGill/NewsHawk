import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
        <div className="card" >
            <img src={!imageUrl?"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5> <span className="badge text-bg-success my-1">{source}</span>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
    )
  }

export default NewsItem
