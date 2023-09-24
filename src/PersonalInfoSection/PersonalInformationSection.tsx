import AddQuestionButton from "../MainComponents/AddQuestionButton";
import CheckboxTitle from "../MainComponents/Checkbox";
import DeleteQuestionButton from "../MainComponents/DeleteQuestionButton";
import FormComponent from "../MainComponents/Form-Component";
import SaveButton from "../MainComponents/SaveButton";
import SwitchTitle from "../MainComponents/Switch";
import CustomTitle from "../MainComponents/InfoTitle";
import { Divider } from "antd";
function PersonalInfoSection() {
  const handleDeleteQuestion = () => {
    // Temporary onClick event handler that does nothing
  };
  const renderField = (title: string, internal: boolean) => {
    return (
      <div className="flex items-center gap-8">
        <CustomTitle title={title} />
        <div className="flex-grow"></div>
        <CheckboxTitle title="internal" />
        <SwitchTitle />
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
            {renderField("Email", false)}
            <Divider />
            {renderField("Phone", true)}
            <Divider />
            {renderField("Nationality", true)}
            <Divider />
            {renderField("Current Residence", true)}
            <Divider />
            {renderField("ID Number", true)}
            <Divider />
            {renderField("Date of Birth", true)}
            <Divider />
            {renderField("Gender", true)}
            <Divider className="invisible" />
            <AddQuestionButton
              onClick={handleDeleteQuestion}
              title={"Add a question"}
            />
          </>
        }
      />
    </div>
  );
}
export default PersonalInfoSection;
