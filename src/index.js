import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sur"
        timeAgo="Today at 445"
        userComment="hey"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2am"
        userComment="Go"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Mer"
        timeAgo="Yesterday at 2pm"
        userComment="Crazy"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
