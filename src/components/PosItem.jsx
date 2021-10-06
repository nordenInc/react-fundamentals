import React from "react";
import MyButton from "./UI/button/MyButton";
import { useHistory } from "react-router";

const PosItem = (props) => {
  const router = useHistory();
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id}. {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton
            onClick={() => {
              router.push(`/post/${props.post.id}`);
            }}
          >
            Open
          </MyButton>
          <MyButton
            onClick={() => {
              props.remove(props.post);
            }}
          >
            Delete
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default PosItem;