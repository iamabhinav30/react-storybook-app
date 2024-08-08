import React from 'react';
import './Input.css';

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   size?: 'small' | 'medium' | 'large';
// }

const Input: React.FC<any> = ({ size = 'medium', ...rest }) => {
  return (
    <div className="input-wrapper">
      <input className={`input ${size}`} {...rest} />
    </div>
  );
}

export default Input;
