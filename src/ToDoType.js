import React from "react";
import { Button, Tooltip, Col, Input } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import RichTextExample from "./Slate";
import "./style.css";

const ToDoType = (props) => {
  const markup = props.data.map((data) => (
    <div className="rich_text" key={data}>
      <Input
        className="input_field"
        placeholder="Enter your Title"
        value={data.title}
        key={data.id}
        onChange={(e) => props.changeTitle(e.target.value, data.id)}
      />
      <RichTextExample />
    </div>
  ));

  return (
    <Col span={props.column_size}>
      <h2 className="titles">{props.title}</h2>

      <Tooltip title={"Add " + props.title + " ToDo"}>
        <Button
          className="btn"
          type="primary"
          shape="square"
          icon={<PlusSquareOutlined />}
          onClick={() => props.addToDo(props.todo_type)}
        />
      </Tooltip>
      <div>{markup}</div>
    </Col>
  );
};

export default ToDoType;
