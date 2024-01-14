import { ChangeEvent, FC } from "react";

export interface InputProps {
  handleChange: (key: string) => (ev: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required: boolean;
  field: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  handleChange,
  value,
  required,
  field,
  placeholder,
}) => {
  return (
    <div>
      <input
        required={required}
        onChange={handleChange(field)}
        className="form_input"
        value={value}
        placeholder={placeholder}
        type="number"
      />
    </div>
  );
};
export default Input;
