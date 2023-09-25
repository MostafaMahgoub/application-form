import AddQuestionButton from "../MainComponents/AddQuestionButton";
import CheckboxTitle from "../MainComponents/Checkbox";
import { useState } from "react";
import FormComponent from "../MainComponents/Form-Component";
import SwitchTitle from "../MainComponents/Switch";
import CustomTitle from "../MainComponents/InfoTitle";
import Questions from "../MainComponents/Question";
import { Divider } from "antd";

interface Question {
  id: string;
}

function ProfileSection() {

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
  
  const renderField = (title: string , infoTitle : string) => {
    return (
      <div className="flex items-center gap-8">
        <CustomTitle title={title} />
        <div className="flex-grow"></div>
        <CheckboxTitle Infotitle={infoTitle} Section="profile" title="Mandatory" />
        <SwitchTitle Infotitle={infoTitle} Section="profile" />
      </div>
    );
  };
  return (
    <div>
      <FormComponent
        title="Profile"
        content={
          <>
            {renderField("Education" , "education")}
            <Divider />
            {renderField("Experience" , "experience")}
            <Divider />
            {renderField("Resume" , "resume")}
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
              title="Add a question"
            />
          </>
        }
      />
    </div>
  );
}
export default ProfileSection;
