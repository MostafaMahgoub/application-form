import AdditionalQuestionSection from './AdditionalQuestionSection/AdditionalQuestionSection';
import CoverImageSection from './CoverImageSection/CovertImageSection';
import PersonalInfoSection from './PersonalInfoSection/PersonalInformationSection';
import ProfileSection from './ProfileSection/ProfileSection';
import { jsonData } from './Application-Form-Json';
import { Button } from 'antd';

const handleSendClick = async () => {
  const url = 'http://127.0.0.1:4010/api/1/programs/programId/application-form';
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonData)
  };

  try {
    const response = await fetch(url, options);
    if (response.status === 204) {
      console.log('Request successful. No content returned.');
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
  
};

function AppForm() {
  return (
    <div className="flex justify-center flex-col space-y-12 pt-20 pb-20">
      <CoverImageSection />
      <PersonalInfoSection />
      <ProfileSection />
      <AdditionalQuestionSection />
      <Button type="primary" onClick={handleSendClick} className='flex justify-center w-20 bg-teal-500 self-center'>Send</Button>
    </div>
  );
}

export default AppForm;
