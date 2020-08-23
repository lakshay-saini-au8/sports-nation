import React, { Component } from "react";
import NewsHeader from "../../components/NewsHeader/NewsHeader";
import { connect } from "react-redux";
import { getNews } from "../../redux/actions/newsAction";
import "./News.css";
import NewsCategory from "../../components/NewsCategory/NewsCategory";
import NewsCard from "../../components/NewsCard/NewsCard";
import Loader from "../../components/Loader/Loader";
class News extends Component {
  componentDidMount() {
    this.props.getNews();
  }
  getData = (e) => {
    this.props.getNews(e.target.dataset.id);
  };
  render() {
    return (
      <>
        <NewsHeader />

        {this.props.news === "" ? (
          <Loader />
        ) : (
          <>
            <div className="NewsCategory" onClick={this.getData}>
              <NewsCategory />
            </div>
            <div className="NewsCard__Wrapper">
              {this.props.news.map((item, index) => (
                <NewsCard
                  key={index}
                  image={item.urlToImage}
                  tag={item.source.name}
                  title={item.title}
                  author={item.author}
                  date={item.publishedAt.split("T")[0]}
                  readMore={item.url}
                />
              ))}
            </div>
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.newsState.allNews,
  fetching: state.newsState.fetchingNews,
});

export default connect(mapStateToProps, { getNews })(News);
