import { useState } from 'react';
import { message, Upload } from 'antd';
import FormComponent from '../MainComponents/Form-Component';
import { UploadOutlined } from '@ant-design/icons';
import DeleteQuestionButton from '../MainComponents/DeleteQuestionButton';

const { Dragger } = Upload;

function CoverImageSection() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    beforeUpload: (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      return false; // Prevent default upload behavior
    },
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  function handlePhotoDeletion(): void {
    setPreviewImage(null);
  }

  return (
    <div>
      <FormComponent
        title="Upload cover image"
        content={
          <>
            {previewImage ? (
              <>
                <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' , marginBottom: '8px' }} />
                <DeleteQuestionButton title="Delete & re-upload" onClick={handlePhotoDeletion} />
              </>
            ) : (
              <Dragger {...props}>
                <p className="text-3xl">
                  <UploadOutlined />
                </p>
                <p className="ant-upload-text">Upload cover image</p>
                <p className="ant-upload-hint">16:9 ratio is recommended. Max image size 1mb</p>
              </Dragger>
            )}
          </>
        }
      />
    </div>
  );
}

export default CoverImageSection;
