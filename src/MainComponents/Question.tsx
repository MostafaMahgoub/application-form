import React, { useState } from "react";
import { Divider, Select , Typography } from "antd";
import {
  EditOutlined,
  DownOutlined,
  UnorderedListOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, Input } from "antd";
import { jsonData } from '../Application-Form-Json';
import CustomTitle from "./InfoTitle";
import DeleteQuestionButton from "./DeleteQuestionButton";
import SaveButton from "./SaveButton";
import CheckboxTitle from "./Checkbox";
const { Option } = Select;
const { Text } = Typography;
const questionOptions = [
  "Paragraph",
  "ShortAnswer",
  "Yes/No",
  "Dropdown",
  "MultipleChoice",
  "Date",
  "Number",
  "FileUpload",
  "Video",
];
interface Question {
  id: string;
}
interface QuestionsProps {
  question: Question;
  onDelete: (question: Question) => void;
  Section : string;
}
function Questions(props: QuestionsProps) {
  const [saved , setSaved] = useState<boolean>(false);
  const [disqualify , setDisqualify] = useState<boolean>(false);
  const [other , setOther] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [maxDuration, setMaxDuration] = useState("");
  const [durationUnit, setDurationUnit] = useState<string | undefined>(
    undefined
  );
  const [mainChoice, setMainChoice] = useState("");
  const [choices, setChoices] = useState<string[]>([]);
  const handleQuestionSelect = (question: string) => {
    setSelectedQuestion(question);
  };
  const handleEditClick = () => {
         setSaved(false);
  };
  const handleAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAnswer(e.target.value);
  };
  const handleAdditionalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAdditionalInfo(e.target.value);
  };
  const handleMainChoiceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMainChoice(e.target.value);
  };
  const handleMaxDurationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMaxDuration(e.target.value);
  };
  const handleDurationUnitChange = (value: string) => {
    setDurationUnit(value);
  };
  const handleDeleteQuestion = () => {
    if (props.Section === 'personalInformation') {
    let Questions : any[] = jsonData.data.attributes.personalInformation.personalQuestions;
    const existingQuestionIndex = Questions.findIndex((question) => question.QuestionID === props.question.id);
    if (existingQuestionIndex !== -1) {
      Questions.splice(existingQuestionIndex, 1);
    }
  } else if (props.Section === 'profile') {
    let Questions : any[] = jsonData.data.attributes.profile.profileQuestions;
    const existingQuestionIndex = Questions.findIndex((question) => question.QuestionID === props.question.id);
    if (existingQuestionIndex !== -1) {
      Questions.splice(existingQuestionIndex, 1);
    }
  } else {
    let Questions : any[] = jsonData.data.attributes.customisedQuestions;
    const existingQuestionIndex = Questions.findIndex((question) => question.QuestionID === props.question.id);
    if (existingQuestionIndex !== -1) {
      Questions.splice(existingQuestionIndex, 1);
    }
  }
    console.log(jsonData);
    props.onDelete(props.question);
  };
  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };
  const handleChoiceChange = (index: number, value: string) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };
  const handleSave = () => {
    const JsonQuestion: {
      id: string;
      QuestionID: string;
      type: string;
      question: string;
      additionalInfo?: string;
      maxDuration?: string;
      durationUnit?: string;
      disqualify?: boolean;
      other?: boolean;
      choices?: string[];
    } = {
      id:"497f6eca-6276-4993-bfeb-53cbbbba6f08",
      QuestionID : props.question.id,
      type: selectedQuestion,
      question: answer,
      ...(selectedQuestion === "Video" && {
        additionalInfo: additionalInfo,
        maxDuration: maxDuration,
        durationUnit: durationUnit,
      }),
      ...(selectedQuestion === "Yes/No" && {
        disqualify: disqualify,
      }),
      ...((selectedQuestion === "Dropdown" || selectedQuestion === "MultipleChoice") && {
        choices : [...choices, mainChoice] ,
        other: other,
      }),
    };
  
    if (props.Section === 'personalInformation') {
      let Questions: any[] = jsonData.data.attributes.personalInformation.personalQuestions;
      const existingQuestionIndex = Questions.findIndex((question) => question.QuestionID === JsonQuestion.QuestionID);
      if (existingQuestionIndex !== -1) {
        Questions[existingQuestionIndex] = JsonQuestion;
      } else {
        Questions.push(JsonQuestion);
      }
    } else if (props.Section === 'profile') {
      let Questions: any[] = jsonData.data.attributes.profile.profileQuestions;
      const existingQuestionIndex = Questions.findIndex((question) => question.QuestionID === JsonQuestion.QuestionID);
      if (existingQuestionIndex !== -1) {
        Questions[existingQuestionIndex] = JsonQuestion;
      } else {
        Questions.push(JsonQuestion);
      }
    } else {
      let Questions: any[] = jsonData.data.attributes.customisedQuestions;
      const existingQuestionIndex = Questions.findIndex((question) => question.QuestionID === JsonQuestion.QuestionID);
      if (existingQuestionIndex !== -1) {
        Questions[existingQuestionIndex] = JsonQuestion;
      } else {
        Questions.push(JsonQuestion);
      }
    }
  
    console.log(jsonData);
    setSaved(true);
  };
  
  
  const questionMenu = (
    <Menu>
      {questionOptions.map((question) => (
        <Menu.Item
          key={question}
          onClick={() => handleQuestionSelect(question)}
        >
          {question}
        </Menu.Item>
      ))}
    </Menu>
  );
  const renderQuestionInput = () => {
    if (
      selectedQuestion === "Paragraph" ||
      selectedQuestion === "ShortAnswer" ||
      selectedQuestion === "FileUpload" ||
      selectedQuestion === "Date" ||
      selectedQuestion === "Number"
    ) {
      return (
        <Input
          placeholder="Question"
          value={answer}
          onChange={handleAnswerChange}
        />
      );
    } else if (selectedQuestion === "Yes/No") {
      return (
        <div className="flex flex-col gap-3">
          <Input
            placeholder="Question"
            value={answer}
            onChange={handleAnswerChange}
          />
          <CheckboxTitle disqualify={disqualify} setDisqualify={setDisqualify} title="Disqualify candidate if the answer is no" />
        </div>
      );
    } else if (selectedQuestion === "Video") {
      return (
        <div className="flex flex-col gap-3">
          <Input
            placeholder="Question"
            value={answer}
            onChange={handleAnswerChange}
          />
          <Input
            placeholder="Additional information"
            value={additionalInfo}
            onChange={handleAdditionalInfoChange}
          />
          <div className="flex gap-1">
            <Input
              type="number"
              placeholder="Max duration of video"
              value={maxDuration}
              onChange={handleMaxDurationChange}
            />
            <Select
              placeholder="in (sec/min)"
              value={durationUnit}
              onChange={handleDurationUnitChange}
            >
              <Option value="Minutes">Minutes</Option>
              <Option value="Seconds">Seconds</Option>
            </Select>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Question"
            value={answer}
            onChange={handleAnswerChange}
          />
          {choices.map((choice, index) => (
            <div className="flex gap-4" key={index}>
              <UnorderedListOutlined />
              <Input
                placeholder="Choice"
                value={choice}
                onChange={(e) => handleChoiceChange(index, e.target.value)}
              />
            </div>
          ))}
          <div className="flex gap-4">
            <UnorderedListOutlined />
            <Input
              placeholder="Choice"
              value={mainChoice}
              onChange={handleMainChoiceChange}
            />
            <PlusOutlined onClick={handleAddChoice} />
          </div>
          <CheckboxTitle other={other} setOther={setOther} title="Enable “Other” option" />
        </div>
      );
    }
  };
  return (
    <div>
        {saved && (
            <div className="flex flex-row items-center">
                <div>
                <Text type="secondary">{selectedQuestion}</Text>
                <CustomTitle title={answer} />
                </div>
                <div className="flex-grow"></div>
                <div>
                <EditOutlined  onClick={handleEditClick} />
                </div>
            </div>
        )

        }
       {!saved && (<div className="flex flex-col gap-3">
        <Dropdown overlay={questionMenu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Select Question <DownOutlined />
          </a>
        </Dropdown>
        {selectedQuestion && (
          <div>
            <CustomTitle title={selectedQuestion} />
            {renderQuestionInput()}
          </div>
        )}
        <div className="flex flex-row justify-between">
          <DeleteQuestionButton
            title="Delete question"
            onClick={handleDeleteQuestion}
          />
          <SaveButton onClick={handleSave} />
        </div>
      </div>)}
      <Divider />
    </div>
  );
}
export default Questions;
