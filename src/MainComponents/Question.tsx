import React, { useState } from "react";
import { Divider, Select } from "antd";
import { EditOutlined, DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Input } from "antd";
import CustomTitle from "./InfoTitle";
import DeleteQuestionButton from "./DeleteQuestionButton";
import SaveButton from "./SaveButton";
import CheckboxTitle from "./Checkbox";

const { Option } = Select;

const { TextArea } = Input;

const questionOptions: string[] = [
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
  // Define other properties of a question
}

interface QuestionsProps {
  question: Question;
  onDelete: (question: Question) => void;
}

function Questions(props: QuestionsProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [maxDuration, setMaxDuration] = useState<string>("");
  const [durationUnit, setDurationUnit] = useState<string | undefined>(undefined);

  const handleQuestionSelect = (question: string) => {
    setSelectedQuestion(question);
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

  const handleMaxDurationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMaxDuration(e.target.value);
  };

  const handleDurationUnitChange = (value: string) => {
    setDurationUnit(value);
  };

  const handleDeleteQuestion = () => {
    props.onDelete(props.question);
  };

  const handleSave = () => {
    // Logic to save the question and answer
    // You can use the 'selectedQuestion', 'answer', 'additionalInfo', 'maxDuration', and 'durationUnit' state variables here
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

  return (
    <div>
      <div className="flex flex-col gap-3">
        <Dropdown overlay={questionMenu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Select Question <DownOutlined />
          </a>
        </Dropdown>
        {selectedQuestion && (
          <div>
            <CustomTitle title={selectedQuestion} />
            {selectedQuestion === "Paragraph" ||
            selectedQuestion === "ShortAnswer" ||
            selectedQuestion === "FileUpload" ||
            selectedQuestion === "Date" ||
            selectedQuestion === "Number" ? (
              <Input
                placeholder="Question"
                value={answer}
                onChange={handleAnswerChange}
              />
            ) : selectedQuestion === "Yes/No" ? (
              <div className="flex flex-col gap-3">
                <Input
                  placeholder="Question"
                  value={answer}
                  onChange={handleAnswerChange}
                />
                <CheckboxTitle title="Disqualify candidate if the answer is no" />
              </div>
            ) : selectedQuestion === "Video" ? (
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
            ) : (
              <TextArea rows={4} value={answer} onChange={handleAnswerChange} />
            )}
          </div>
        )}
        <div className="flex flex-row justify-between">
          <DeleteQuestionButton
            title="Delete question"
            onClick={handleDeleteQuestion}
          />
          <SaveButton onClick={handleSave} />
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Questions;