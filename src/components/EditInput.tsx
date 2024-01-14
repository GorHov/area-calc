import { ChangeEvent, FC } from "react";

interface EditInputProps {
  onChange: (key: string) => (event: ChangeEvent<HTMLInputElement>) => void;
  field: string;
  disabled: boolean;
  value: number;
}

const EditInput: FC<EditInputProps> = ({
  disabled,
  value,
  onChange,
  field,
}) => {
  return (
    <input
      type="number"
      defaultValue={value}
      onChange={onChange(field)}
      disabled={disabled}
      className={`form_input ${disabled ? "disabled" : ""}`}
    />
  );
};

export default EditInput;
