import AddQuestionButton from "../MainComponents/AddQuestionButton";
import CheckboxTitle from "../MainComponents/Checkbox";
import { useState } from "react";
import FormComponent from "../MainComponents/Form-Component";
import SwitchTitle from "../MainComponents/Switch";
import CustomTitle from "../MainComponents/InfoTitle";
import Questions from "../MainComponents/Question";
import { jsonData } from '../Application-Form-Json';
import { Divider } from "antd";

interface Question {
  id: string;
}
function PersonalInfoSection() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const generateUniqueId = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = '';
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uniqueId += characters[randomIndex];
    }
  
    return uniqueId;
  };
  
  const handleAddQuestion = () => {
    setQuestions([...questions, { id: generateUniqueId() }]);
  };
  const handleDeleteQuestion = (question: Question) => {
    setQuestions(questions.filter((q) => q.id !== question.id));
  };
  const renderField = (title: string , infoTitle: string) => {
    return (
      <div className="flex items-center gap-8">
        <CustomTitle title={title} />
        <div className="flex-grow"></div>
        <CheckboxTitle title="internal" />
        <SwitchTitle Infotitle={infoTitle} Section="personalInformation" />
      </div>
    );
  };
  return (
    <div>
      <FormComponent
        title="Personal Information"
        content={
          <>
            <CustomTitle title={"First Name"} />
            <Divider />
            <CustomTitle title={"Last Name"} />
            <Divider />
            <CustomTitle title={"Email"} />
            <Divider />
            {renderField("Phone" , "phoneNumber")}
            <Divider />
            {renderField("Nationality" , "nationality")}
            <Divider />
            {renderField("Current Residence" , "currentResidence")}
            <Divider />
            {renderField("ID Number" , "idNumber")}
            <Divider />
            {renderField("Date of Birth" , "dateOfBirth")}
            <Divider />
            {renderField("Gender" , "gender")}
            <Divider />
            {questions.map((question) => (
              <div key={question.id}>
                <Questions
                  question={question}
                  onDelete={handleDeleteQuestion}
                />
              </div>
            ))}
            <AddQuestionButton
              onClick={handleAddQuestion}
              title={"Add a question"}
            />
          </>
        }
      />
    </div>
  );
}
export default PersonalInfoSection;
