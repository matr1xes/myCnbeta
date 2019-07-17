import React from "react";
import Title from "./title";
import Summary from "./summary";
import Meta from "./meta";

const Article = ({ link, title, summary, ...rest }) => {
  return (
    <a
      href={link}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <Title title={title} />
      <Summary summary={summary} />
      <Meta {...rest} />
    </a>
  );
};

export default Article;
