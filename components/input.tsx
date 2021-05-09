import { ChangeEvent } from "react";

interface InputProps {
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  rounded?: boolean;
  popup?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const Input: React.FC<InputProps> = ({
  disabled,
  className,
  placeholder,
  rounded,
  popup,
  type,
  value,
  onChange,
}) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
      }}
      type={type}
      className={`${className} ${rounded && "is-rounded"} ${popup && "pop-up"}`}
      placeholder={placeholder}
      disabled={disabled ? true : false}
    />
  );
};

export default Input;
