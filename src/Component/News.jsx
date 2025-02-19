import React, { Component } from 'react'
import Header from './Header'
import NewsItem from './NewsItem'
import Loader from './Loader';


export default class News extends Component {

    constructor(){
        super();

        this.state = {
            totalResults:0,
            AllNews : [],
            pageNo : 1,
            pageSize:9,
            loading:false
        }
    }

    fetchMoreNew = async ( no) => {

        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}&category=${this.props.category}&pagesize=${this.state.pageSize}&page=${ no }`
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            totalResults: parseData.totalResults,
            AllNews: parseData.articles,
            loader : false
        });
    }

     async componentDidMount(){

        this.setState({loader:true})
        this.fetchMoreNew(1);
        
    }

    handleNextClick = async () => {
        
        this.setState({loader:true})
        this.fetchMoreNew(this.state.pageNo+1);

        this.setState({
            pageNo : this.state.pageNo+1
        });
    }

    handleprevClick = async () => {
        
        this.setState({loader:true})
        this.fetchMoreNew(this.state.pageNo-1);

        this.setState({
            pageNo : this.state.pageNo-1
        });
    }

    render() {
        return (
            <>
                <Header titel="Top Headline" desc="Get Daily Nwes From DailyNews App."/>

                <div className="container my-5">
                    <div className="row">
                     {this.state.loader && <Loader/>}

                        { !this.state.loader && this.state.AllNews.map( (singal) => {
                            return <NewsItem key={singal.url} 
                            titel={singal.titel} 
                            description={singal.description} 
                            img={singal.urlToImage}
                            url={singal.url}/>
                        })}
                        <div className="row my-5">
                            <div className="col">
                                <button disabled={this.state.pageNo === 1} className="btn btn-primary float-start" onClick={this.handleprevClick}>Previous</button>
                                <button disabled={this.state.pageNo > (this.state.totalResults / this.state.pageSize)} className="btn btn-primary float-end" onClick={this.handleNextClick }>Next</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
