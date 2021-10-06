import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const defaultPost = {
    title: "",
    body: "",
  };
  const [post, setPost] = useState(defaultPost);

  const addNewPost = (e) => {
    e.preventDefault();
    create({ ...post, id: Date.now() });
    setPost(defaultPost);
  };

  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Post name"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Post description"
        />
        <MyButton onClick={addNewPost} type="submit">
          Create post
        </MyButton>
      </form>
    </div>
  );
};

export default PostForm;
