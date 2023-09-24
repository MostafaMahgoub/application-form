import { Switch } from "antd";
import { useState } from "react";

interface SwitchTitleProps {
  // Add any props if needed
}

function SwitchTitle(props: SwitchTitleProps) {
  const [title, setTitle] = useState<boolean>(false);

  const onChange = (checked: boolean) => {
    setTitle(checked);
  };

  return (
    <div className="flex items-center">
      <Switch size="small" onChange={onChange} />
      <span
        className={`ml-2 text-gray-600 text-sm font-sans font-normal leading-6 break-words`}
        style={{ fontFamily: "Noto Sans" }}
      >
        {title ? "Show" : "Hide"}
      </span>
    </div>
  );
}

export default SwitchTitle;
