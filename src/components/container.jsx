import React, { Component } from "react";
import Article from "./article";
import Header from "./header";
import Pagination from "./common/pagination";
import http from "../sevices/httpService";
import { paginate } from "../utils/paginate";

class Container extends Component {
  state = {
    data: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data } = await http.get("articles");
    const newState = { ...this.state };
    newState.data = data;
    this.setState({ ...newState });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  showData = () => {
    const { data, pageSize, currentPage } = this.state;
    const showData = paginate(data, currentPage, pageSize);
    const itemsCount = data.length;
    return { currentPage, pageSize, data: showData, itemsCount };
  };

  render() {
    const { data, currentPage, pageSize, itemsCount } = this.showData();
    return (
      <div className="container col-md-7">
        <Header />
        <div className="list-group">
          {data.map(item => (
            <Article
              key={item._id}
              id={item.id}
              link={item.link}
              title={item.title}
              summary={item.contentSnippet}
              date={item.date}
              type={item.type}
              creator={item.creator}
            />
          ))}
          <Pagination
            itemsCount={itemsCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Container;
