import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PosItem from "./PosItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((el) => (
          <CSSTransition key={el.id} timeout={500} classNames="post">
            <PosItem remove={remove} post={el} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
