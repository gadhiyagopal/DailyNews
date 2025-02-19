import React, { Component } from 'react'
import Header from './Header'
import NewsItem from './NewsItem'


export default class News extends Component {

    constructor(){
        super();

        this.state = {
            AllNews : [],
            pageNo : 1
        }
    }

     async componentDidMount(){

        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=2151f2ef745e4d2d81478c369f7311da&page=${ this.state.pageNo}`
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            AllNews: parseData.articles
        });
    }

    handleNextClick = async () => {
        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=2151f2ef745e4d2d81478c369f7311da&page=${ this.state.pageNo+1}`
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            AllNews: parseData.articles,
            pageNo : this.state.pageNo+1
        });
    }

    handleprevClick = async () => {
        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=2151f2ef745e4d2d81478c369f7311da&page=${ this.state.pageNo-1}`
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            AllNews: parseData.articles,
            pageNo : this.state.pageNo-1
        });
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
                        <div className="row my-5">
                            <div className="col">
                                <button className="btn btn-primary float-start" onClick={this.handleprevClick}>Previous</button>
                                <button className="btn btn-primary float-end" onClick={this.handleNextClick }>Next</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
