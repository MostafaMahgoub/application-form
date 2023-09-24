import { Card } from 'antd';

interface FormComponentProps {
  title: string;
  content: React.ReactNode;
}

function FormComponent({ title, content }: FormComponentProps) {
  return (
    <div className="flex justify-center">
      <Card
        className="shadow-md"
        title={<div className="text-black text-2xl font-poppins font-semibold leading-7 break-words">{title}</div>}
        bordered={false}
        style={{
          width: "400px",
          maxWidth: "lg",
          boxShadow: '3px 3px 14px rgba(190, 190, 190, 0.3)',
        }}
      >
        {content}
      </Card>
    </div>
  );
}

export default FormComponent;
