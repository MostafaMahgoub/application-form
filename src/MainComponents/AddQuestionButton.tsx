import React, { FC, MouseEventHandler } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
interface AddQuestionButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
  title: string;
}
function AddQuestionButton({ onClick, title }: AddQuestionButtonProps) {
  return (
    <Button
      type="link"
      className="text-black font-bold hover:!text-black"
      icon={<PlusOutlined />}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
export default AddQuestionButton;
