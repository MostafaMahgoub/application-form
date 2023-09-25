import { useState } from "react";
import AddQuestionButton from "../MainComponents/AddQuestionButton";
import FormComponent from "../MainComponents/Form-Component";
import Questions from "../MainComponents/Question";
interface Question {
  id: string;
}
function AdditionalQuestionSection() {
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
                  Section="customisedQuestions"
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
