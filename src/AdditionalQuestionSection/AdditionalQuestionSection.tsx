import { Divider } from 'antd';
import AddQuestionButton from '../MainComponents/AddQuestionButton';
import FormComponent from '../MainComponents/Form-Component';

function AdditionalQuestionSection() {
  const handleDeleteQuestion = () => {
    // Temporary onClick event handler that does nothing
  };

  return (
    <div>
      <FormComponent title={"Additional questions"} content={<>
            <AddQuestionButton
              onClick={handleDeleteQuestion}
              title={"Add a question"}
            /></>} />
    </div>
  );
}

export default AdditionalQuestionSection;
