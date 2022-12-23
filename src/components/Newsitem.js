import React, { Component } from 'react'

export class Newsitem extends Component {

   
  render() {

    let {title,description,imageurl,newsurl}=this.props;

    return (
      <div>
        <div className="card" style={{"width": "18rem"}}>
        <img src={!imageurl?"https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2022-12/187d6a94-ece0-4a80-b468-82a227393b01.jpg" : imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel='noreferrer' href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
// 4224e8d5302c46658e10656f3f61ac38
