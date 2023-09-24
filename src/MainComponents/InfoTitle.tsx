import React from 'react';

interface CustomTitleProps {
  title: string;
}

function CustomTitle({ title }: CustomTitleProps) {
  return (
    <h1 className="text-black text-base font-semibold font-poppins leading-6 break-words">
      {title}
    </h1>
  );
}

export default CustomTitle;
