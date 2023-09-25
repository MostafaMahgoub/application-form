import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { useState } from "react";
import { jsonData } from '../Application-Form-Json';

interface CheckBoxTitleProps {
  title: string;
  Infotitle : string;
  Section: string;
}

function CheckboxTitle({title,Infotitle , Section }: CheckBoxTitleProps) {
  const [called, setCalled] = useState<boolean>(false);

  const onChange = (e: CheckboxChangeEvent) => {
    setCalled(e.target.checked);
    let SectionJson = jsonData.data.attributes[Section as keyof typeof jsonData.data.attributes];
    if (Section === 'personalInformation')
    {
    let infoTitleJson : { internalUse: boolean } = SectionJson[Infotitle as keyof typeof SectionJson];
    infoTitleJson.internalUse = !called;
    }
    else if (Section === 'profile')
    {
    let infoTitleJson : { mandatory: boolean } = SectionJson[Infotitle as keyof typeof SectionJson];
    infoTitleJson.mandatory = !called;
    }
    console.log(jsonData);
  };

  return (
    <div className="flex items-center">
      <Checkbox onChange={onChange} />
      <span
        className="ml-2 text-black text-sm font-sans font-normal leading-6 break-words"
        style={{ fontFamily: "Poppins" }}
      >
        {title}
      </span>
    </div>
  );
}

export default CheckboxTitle;
