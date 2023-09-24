import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { useState } from "react";

interface CheckBoxTitleProps {
  title: string;
}

function CheckboxTitle(props: CheckBoxTitleProps) {
  const [called, setCalled] = useState<boolean>(false);

  const onChange = (e: CheckboxChangeEvent) => {
    setCalled(e.target.checked);
  };

  return (
    <div className="flex items-center">
      <Checkbox onChange={onChange} />
      <span
        className="ml-2 text-black text-sm font-sans font-normal leading-6 break-words"
        style={{ fontFamily: "Poppins" }}
      >
        {props.title}
      </span>
    </div>
  );
}

export default CheckboxTitle;
