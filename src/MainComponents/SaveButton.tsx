import { Button } from 'antd';
import { MouseEventHandler } from "react";

interface AddQuestionButtonProps {
    onClick: MouseEventHandler<HTMLElement>;
  }

function SaveButton({ onClick }: AddQuestionButtonProps) {
    return (
      <Button
        type="primary"
        className='font-poppins text-xs break-words text-white bg-green-700 font-semibold w-fit hover:!bg-green-800'
        onClick={onClick}
      >
        Save
      </Button>
    );
  }
  export default SaveButton;