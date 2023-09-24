import AdditionalQuestionSection from './AdditionalQuestionSection/AdditionalQuestionSection';
import CoverImageSection from './CoverImageSection/CovertImageSection';
import PersonalInfoSection from './PersonalInfoSection/PersonalInformationSection';
import ProfileSection from './ProfileSection/ProfileSection';

function AppForm() {
  return (
    <div className="flex justify-center flex-col space-y-12 pt-20">
      <CoverImageSection />
      <PersonalInfoSection />
      <ProfileSection />
      <AdditionalQuestionSection />
    </div>
  );
}

export default AppForm;
