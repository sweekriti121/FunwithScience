import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Card.css";
import { data } from "./data";
// import React, { useContext } from "react";
// import { Context } from "../../App";

const Singlecard = (props) => {
  // const { state } = useContext(Context);
  // const user = localStorage.getItem("user");

  // To give the cards unique url as per its mcq or numerical
  const uniqueIdCheck = (type, num) => {
    var mcq = data.filter((value) => value.type === type);
    var real = 0;
    for (var i = 0; i < mcq.length; i++) {
      // console.log(mcq[i].id + " => " + i);
      if (mcq[i].id === num) {
        real = i;
        break;
      }
    }
    return real;
  };

  return (
    <Card className="singlecard">
      <Card.Header>
        <span
          className={
            "tag " +
            (props.difficulty === "Easy"
              ? "tag-easy"
              : props.difficulty === "Medium"
              ? "tag-med"
              : props.difficulty === "Hard"
              ? "tag-hard"
              : "")
          }
        >
          {props.difficulty}
        </span>
        {props.type === "mcq" ? "Multiple Correct" : props.type}
      </Card.Header>

      <Card.Body className="card-body">
        <div className="flex-column">
          <Card.Title className="card-title">{props.question}</Card.Title>
          <Card.Text className="card-text">{props.topic}</Card.Text>
        </div>
        {/*{state.user || user !== "null" ? (*/}
        <Link
          to={{
            pathname: `/MathQuestion/${props.type}/${uniqueIdCheck(
              props.type,
              props.id
            )}`,
            state: {
              type: props.type,
              ques: props.question,
              img: props.image,
              ans: props.answer,
            },
          }}
        >
          <Button variant="primary" className="solve-question-btn">
            Solve Question
          </Button>
        </Link>
        {/*}) : (
          <Link to="/Login">
            <Button
              variant="primary"
              className="solve-question-btn"
              onClick={() => {
                alert("You need to login first!!");
              }}
            >
              Solve Question
            </Button>
          </Link>
            )}*/}
      </Card.Body>
    </Card>
  );
};

export default Singlecard;
