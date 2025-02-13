import React, { Component } from 'react'
import Header from './Header'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor(){
        super()
        this.state = {
            counter: 1
        }
    }

    chek = () => {
        this.setState({
            counter : this.state.counter+1
        })
    }

    render() {
        return (
            <>

                <Header titel="Top Headline" desc="Get Daily Nwes From DailyNews App."/>

                <div className="container my-5">
                    <div className="row">

                    <h2>{this.state.counter}</h2>

                    <button onClick={this.chek}>Click Hear</button>
                       <NewsItem/>
                       <NewsItem/>
                       <NewsItem/>
                       <NewsItem/>
                    </div>
                </div>

            </>
        )
    }
}
