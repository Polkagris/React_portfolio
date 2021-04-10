import React from "react";
import "./Post.css";

export const Post = ({ postData }) => {
  return (
    <div className="fetchedDataWrapper">
      <div className="fetchedDataContainer">
        <h1>Post of the day - fetched from remote API</h1>
        <div>{postData.title}</div>
        <div>{postData.body}</div>
      </div>
    </div>
  );
};
