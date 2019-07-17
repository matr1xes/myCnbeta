import React, { Component } from "react";
import Article from "./article";
import http from "../sevices/httpService";

class Container extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const { data } = await http.get("articles");
    this.setState({ data });
  }
  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: "left", margin: "30px 0 30px 0" }}>
          <img
            src="https://www.cnbeta.com/images/logo_1.png"
            alt=""
            style={{
              width: "150px"
            }}
          />
          中文业界资讯站
        </h2>
        <div className="list-group">
          {this.state.data.map(item => (
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
        </div>
      </div>
    );
  }
}

export default Container;
