import { FC, FormEvent } from "react";

interface ButtonProps {
  title: string;
  type: "submit" | "button";
  onAdd: (event: FormEvent) => void;
}

const Button: FC<ButtonProps> = ({ title, type, onAdd }) => {
  return (
    <button type={type} className='button' onClick={onAdd}>
      {title}
    </button>
  );
};
export default Button;
