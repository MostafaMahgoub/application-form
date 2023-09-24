import { Card } from 'antd';

interface FormComponentProps {
  title: string;
  content: React.ReactNode;
}

function FormComponent({ title, content }: FormComponentProps) {
  return (
    <div>
      <Card
        className=""
        title={<div className="text-black text-2xl font-poppins font-semibold leading-7 break-words">{title}</div>}
        bordered={false}
        style={{
          width: "30vw",
        }}
      >
        {content}
      </Card>
    </div>
  );
}

export default FormComponent;
