import React, { useState } from "react";
import { Divider } from "antd";
import AddQuestionButton from "../MainComponents/AddQuestionButton";
import FormComponent from "../MainComponents/Form-Component";
import Questions from "../MainComponents/Question";
import DeleteQuestionButton from "../MainComponents/DeleteQuestionButton";
interface Question {
  id: string;
  // Define other properties of a question
}
function AdditionalQuestionSection() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const generateUniqueId = (): string => {
    // Implement your unique ID generation logic here
    // For example, you can use a library like uuid or generate a random string
    return "unique-id";
  };
  const handleAddQuestion = () => {
    setQuestions([...questions, { id: generateUniqueId() }]);
  };
  const handleDeleteQuestion = (question: Question) => {
    setQuestions(questions.filter((q) => q.id !== question.id));
  };
  return (
    <div>
      <FormComponent
        title="Additional questions"
        content={
          <>
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
export default AdditionalQuestionSection;
