import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    // console.log("Helo i am constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    // console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=4224e8d5302c46658e10656f3f61ac38&page=1&pageSize=10";
    this.state({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles , 
        totalArticles: parsedData.totalResults,
        loading:false })
  }

  handlePreviousClick = async () => {
    console.log("previous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4224e8d5302c46658e10656f3f61ac38= ${
      this.state.page - 1
    }&pageSize=10`;
    this.state({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.state({loading:false});

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    })
  }

  handleNextClick = async () => {
    console.log("next");

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/10)){

    }
    else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4224e8d5302c46658e10656f3f61ac38= ${
      this.state.page + 1
    } &pageSize=10`;
    this.state({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.state({loading:false});

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    })
    }

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4224e8d5302c46658e10656f3f61ac38= ${
      this.state.page + 1
    } &pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    })
  }

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
       <h1 className="text-center">
       News Monkey - top headlines
       </h1>
       {this.state.loading && <Spinner/>}

        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : " "}
                  description={element.description ? element.description : " "}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>

          <button
          disabled={this.state.page+1 > Math.ceil(this.state.totalResults/10 )}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
