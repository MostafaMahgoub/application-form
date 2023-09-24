import AddQuestionButton from '../MainComponents/AddQuestionButton';
import CheckboxTitle from '../MainComponents/Checkbox';
import DeleteQuestionButton from '../MainComponents/DeleteQuestionButton';
import FormComponent from '../MainComponents/Form-Component';
import SaveButton from '../MainComponents/SaveButton';
import SwitchTitle from '../MainComponents/Switch';

function PersonalInfoSection() {
  const handleDeleteQuestion = () => {
    // Temporary onClick event handler that does nothing
  };

  return (
    <div>
      <FormComponent
        title="Personal Information"
        content={
          <>
            <SwitchTitle />
            <CheckboxTitle title="Internal" />
            <DeleteQuestionButton onClick={handleDeleteQuestion}  title={'Delete question'} />
            <AddQuestionButton onClick={handleDeleteQuestion} title={'Add a question'} />
            <SaveButton onClick={handleDeleteQuestion} />
          </>
        }
      />
    </div>
  );
}

export default PersonalInfoSection;
