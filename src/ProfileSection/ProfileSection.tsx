import AddQuestionButton from "../MainComponents/AddQuestionButton";
import CheckboxTitle from "../MainComponents/Checkbox";
import DeleteQuestionButton from "../MainComponents/DeleteQuestionButton";
import FormComponent from "../MainComponents/Form-Component";
import SaveButton from "../MainComponents/SaveButton";
import SwitchTitle from "../MainComponents/Switch";
import CustomTitle from "../MainComponents/InfoTitle";
import { Divider } from "antd";
function ProfileSection() {
  const handleDeleteQuestion = () => {
    // Temporary onClick event handler that does nothing
  };
  const renderField = (title: string) => {
    return (
      <div className="flex items-center gap-8">
        <CustomTitle title={title} />
        <div className="flex-grow"></div>
        <CheckboxTitle title="Mandatory" />
        <SwitchTitle />
      </div>
    );
  };
  return (
    <div>
      <FormComponent
        title="Profile"
        content={
          <>
            {renderField("Education")}
            <Divider />
            {renderField("Experience")}
            <Divider />
            {renderField("Resume")}
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
export default ProfileSection;
