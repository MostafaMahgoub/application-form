import AddQuestionButton from '../MainComponents/AddQuestionButton';
import CheckboxTitle from '../MainComponents/Checkbox';
import DeleteQuestionButton from '../MainComponents/DeleteQuestionButton';
import FormComponent from '../MainComponents/Form-Component';
import SaveButton from '../MainComponents/SaveButton';
import SwitchTitle from '../MainComponents/Switch';
import CustomTitle from '../MainComponents/InfoTitle';
import { Divider } from 'antd';

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
            <CustomTitle title={'First Name'} />
            <Divider />
            <SwitchTitle />
            <Divider />
            <CheckboxTitle title="Internal" />
            <Divider />
            <DeleteQuestionButton onClick={handleDeleteQuestion} title={'Delete question'} />
            <Divider />
            <AddQuestionButton onClick={handleDeleteQuestion} title={'Add a question'} />
            <Divider />
            <SaveButton onClick={handleDeleteQuestion} />
          </>
        }
      />
    </div>
  );
}

export default PersonalInfoSection;
