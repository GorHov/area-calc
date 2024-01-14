import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { boardSlice } from "../store/BoardSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

function getRandomRGBColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

interface FormData {
  width: string;
  height: string;
  quantity: string;
}

const Form: FC = () => {
  const { addToList } = boardSlice.actions;
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    width: "",
    height: "",
    quantity: "",
  });

  const handleAddItem = useCallback(
    (event: FormEvent): void => {
      event.preventDefault();
      let color = getRandomRGBColor();

      if (
        formData.width !== "" &&
        formData.height !== "" &&
        formData.quantity !== ""
      ) {
        dispatch(
          addToList({
            width: +formData.width,
            quantity: +formData.quantity,
            height: +formData.height,
            id: crypto.randomUUID(),
            changed: false,
            color: color,
          })
        );
        setFormData({ width: "", height: "", quantity: "" });
      }
    },
    [formData, dispatch]
  );

  const handleChange = useCallback(
    (key: string) =>
      (event: ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [key]: event.target.value });
      },
    [formData]
  );

  return (
    <div className="form-container">
      <form className="form">
        <Input
          placeholder="Width"
          field="width"
          required={true}
          value={formData.width}
          handleChange={handleChange}
        />
        <Input
          placeholder="Height"
          field="height"
          required={true}
          value={formData.height}
          handleChange={handleChange}
        />
        <Input
          placeholder="Quantity"
          field="quantity"
          required={true}
          value={formData.quantity}
          handleChange={handleChange}
        />
        <Button
          onAdd={handleAddItem}
          title={"add"}
          type="submit"
        />
      </form>
    </div>
  );
};
export default Form;
