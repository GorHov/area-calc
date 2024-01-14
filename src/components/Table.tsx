import { ChangeEvent, FC, useCallback, useState } from "react";
import Button from "./common/Button";
import EditInput from "./EditInput";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { boardSlice } from "../store/BoardSlice";

const Table: FC = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.BoardReducer);
  const { deleteFromList, changeListItem, saveItemChanges } =
    boardSlice.actions;
  const [formData, setFormData] = useState({
    width: 0,
    height: 0,
    quantity: 0,
    id: "",
  });

  const handleDeleteFromList = (id: string): void => {
    dispatch(deleteFromList({ id }));
  };

  const handleChangeListItem = useCallback(
    (id: string, width: number, height: number, quantity: number): void => {
      dispatch(changeListItem({ id }));
      setFormData({
        width,
        height,
        quantity,
        id,
      });
    },
    [formData]
  );

  const handleInputChange = useCallback(
    (key: string) =>
      (event: ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [key]: event.target.value });
      },
    [formData]
  );

  const handleSaveChanges = useCallback(
    (id: string) => {
      dispatch(changeListItem({ id }));
      dispatch(
        saveItemChanges({
          width: formData.width.toString(),
          height: formData.height.toString(),
          quantity: formData.quantity.toString(),
          id: formData.id,
        })
      );
    },
    [formData]
  );

  return (
    <>
      {list?.length > 0 && (
        <div>
          <table className="data-table">
            <thead>
              <tr>
                <th className="table-header">ID</th>
                <th className="table-header">Width</th>
                <th className="table-header">Height</th>
                <th className="table-header">Quantity</th>
                <th className="table-header">Color</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item, index) => (
                <tr key={item.id}>
                  <td className="table-data">{index + 1}</td>
                  <td className="table-data">
                    <EditInput
                      onChange={handleInputChange}
                      field="width"
                      disabled={!item.changed}
                      value={item.width}
                    />
                  </td>
                  <td className="table-data">
                    <EditInput
                      onChange={handleInputChange}
                      field="height"
                      disabled={!item.changed}
                      value={item.height}
                    />
                  </td>
                  <td className="table-data">
                    <EditInput
                      onChange={handleInputChange}
                      field="quantity"
                      disabled={!item.changed}
                      value={item.quantity}
                    />
                  </td>
                  <td
                    className="table-data"
                    style={{ background: item.color }}
                  ></td>
                  <td className="table-data">
                    <Button
                      title="delete"
                      type="button"
                      onAdd={(): void => {
                        handleDeleteFromList(item.id);
                      }}
                    />
                    <Button
                      title={item.changed ? "save" : "edit"}
                      type="button"
                      onAdd={(): void => {
                        if (!item.changed) {
                          handleChangeListItem(
                            item.id,
                            item.width,
                            item.height,
                            item.quantity
                          );
                        } else {
                          handleSaveChanges(item.id);
                        }
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
