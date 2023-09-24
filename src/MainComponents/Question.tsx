import React, { useState } from 'react';
import { Divider } from 'antd';
import { EditOutlined, DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Input } from 'antd';
import CustomTitle from './InfoTitle';
import DeleteQuestionButton from './DeleteQuestionButton';
import SaveButton from './SaveButton';
import CheckboxTitle from './Checkbox';

const { TextArea } = Input;

const questionOptions: string[] = [
  'Paragraph',
  'ShortAnswer',
  'Yes/No',
  'Dropdown',
  'MultipleChoice',
  'Date',
  'Number',
  'FileUpload',
  'Video'
];

interface Question {
  id: string;
  // Define other properties of a question
}

interface QuestionsProps {
  question: Question;
  onDelete: (question: Question) => void;
}

function Questions(props: QuestionsProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const handleQuestionSelect = (question: string) => {
    setSelectedQuestion(question);
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleDeleteQuestion = () => {
    props.onDelete(props.question);
  };

  const handleSave = () => {
    // Logic to save the question and answer
    // You can use the 'selectedQuestion' and 'answer' state variables here
    };

  const questionMenu = (
    <Menu>
      {questionOptions.map((question) => (
        <Menu.Item key={question} onClick={() => handleQuestionSelect(question)}>
          {question}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <div className='flex flex-col gap-3'>
      <Dropdown overlay={questionMenu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Select Question <DownOutlined />
        </a>
      </Dropdown>
      {selectedQuestion && (
        <div>
          <CustomTitle title={selectedQuestion} />
          {selectedQuestion === 'Paragraph' || selectedQuestion === 'ShortAnswer' || selectedQuestion === 'FileUpload' || selectedQuestion === 'Date' || selectedQuestion === 'Number' ? (
            <Input value={answer} onChange={handleAnswerChange} />
          ) :  selectedQuestion === 'Yes/No' ? (
            <div className='flex flex-col gap-3'>
            <Input value={answer} onChange={handleAnswerChange} />
            <CheckboxTitle title='Disqualify candidate if the answer is no' />
            </div>
          ) : (
            <TextArea rows={4} value={answer} onChange={handleAnswerChange} />
          )}
        </div>
      )}
      <div className='flex flex-row justify-between'>
      <DeleteQuestionButton title="Delete question" onClick={handleDeleteQuestion} />
      <SaveButton onClick={handleSave} />
      </div>
      </div>
      <Divider />
    </div>
  );
}

export default Questions;
