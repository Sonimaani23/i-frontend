import React from "react";
import "./card.css";

function Card({ post }) {
  return (
    <div className="card-container">
      <section className="card-header">
        <div className="name">
          <b>{post.name}</b>
        </div>
        <div className="place">
          {post.location}
          <span className="menu">
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </span>
        </div>
      </section>

      <section className="card-image">
        <img src={post.PostImage} alt="img"></img>
      </section>
      <section className="card-btns">
        <span className="heart">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </span>
        <span className="send">
          <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
        </span>
        <span className="date">{post.date}</span>
      </section>
      <section>
        <span className="likes">{post.likes} likes</span>
      </section>
      <section className="desc">
        <b>{post.description} </b>
      </section>
    </div>
  );
}

export default Card;


