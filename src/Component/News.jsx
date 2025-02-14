import React, { Component } from 'react'
import Header from './Header'
import NewsItem from './NewsItem'
import allitem from './../Sempalnews.json'


export default class News extends Component {

    constructor(){
        super();

        this.state = {
            AllNews : allitem.articles
        }
    }

    render() {
        return (
            <>
                <Header titel="Top Headline" desc="Get Daily Nwes From DailyNews App."/>

                <div className="container my-5">
                    <div className="row">

                        { this.state.AllNews.map( (singal) => {
                            return <NewsItem key={singal.url} 
                            titel={singal.titel} 
                            description={singal.description} 
                            img={singal.urlToImage}
                            url={singal.url}/>
                        })}
                       
                    </div>
                </div>

            </>
        )
    }
}
