import React, { FC, MouseEventHandler } from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
interface DeleteQuestionButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
  title: string;
}
function DeleteQuestionButton({ onClick, title }: DeleteQuestionButtonProps) {
  return (
    <Button
      type="link"
      className="text-red-600 font-bold flex items-center hover:!text-red-600"
      icon={<CloseOutlined />}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
export default DeleteQuestionButton;
