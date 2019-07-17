import React from "react";
import Title from "./title";
import Summary from "./summary";
import Meta from "./meta";

const Article = ({ link, title, summary, ...rest }) => {
  return (
    <a
      className="list-group-item list-group-item-action flex-column align-items-start"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Title title={title} />
      <Summary summary={summary} />
      <Meta {...rest} />
    </a>
  );
};

export default Article;
