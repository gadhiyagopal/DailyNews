import React, { Component } from 'react'
import Blankimg from './../Blankimg.jpg'

export default class NewsItem extends Component {
    render() {
        
        const { titel , description , img , url ,  } = this.props

        return (
            <>
                <div className="col-4 my-3">
                    <div className="card">
                        <img src={img ? img : Blankimg} className="card-img-top" alt="News" style={{height:"200px"}} />
                        <div className="card-body">
                            <h5 className="card-title">{titel ? titel.slice(0,70)+"..." : "No Titels" }</h5>
                            <p className="card-text" style={{height:"120px"}}>{description ? description.slice(0,200)+"..." : "No Description"}</p>
                            <a href={url} target='_blank' className="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
            </> 
        )
    }
}
