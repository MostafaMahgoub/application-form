import { Switch } from "antd";
import { useState } from "react";
import { jsonData } from '../Application-Form-Json';

interface SwitchTitleProps {
  Infotitle: string;
  Section: string;
}

function SwitchTitle({ Infotitle, Section }: SwitchTitleProps) {
  const [title, setTitle] = useState<boolean>(false);

  const onChange = (title: boolean) => {
    setTitle(title);
    let SectionJson = jsonData.data.attributes[Section as keyof typeof jsonData.data.attributes];
    let infoTitleJson : { show: boolean } = SectionJson[Infotitle as keyof typeof SectionJson];
    infoTitleJson.show = title;
  };

  return (
    <div className="flex items-center">
      <Switch size="small" onChange={onChange} checked={title} />
      <span className={`ml-2 text-gray-600 text-sm font-sans font-normal leading-6 break-words`} style={{ fontFamily: "Noto Sans" }}>
        {title ? "Show" : "Hide"}
      </span>
    </div>
  );
}

export default SwitchTitle;
