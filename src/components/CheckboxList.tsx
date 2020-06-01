import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { ICheckboxlistProps } from "../interfaces";
import "./../style/blocks/checkboxList.scss";
export const CheckboxList: React.FunctionComponent<ICheckboxlistProps> = (
  props
) => {
  const initialChecked = props.initialValue || "";
  const [checkboxList, setCheckboxList] = useState<string[]>([]);
  const checkedArray = initialChecked.split(",");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCheckbox = checkboxList;
    if (e.target.checked) {
      newCheckbox.push(e.target.id);
      setCheckboxList(newCheckbox);
    } else {
      newCheckbox = newCheckbox.filter((item) => item !== e.target.id);
      setCheckboxList(newCheckbox);
    }
    props.handlerChange({
      id: props.id,
      value: newCheckbox.join(",").trim(),
    });
  };
  useEffect(() => {
    if (props.initialValue) {
      setCheckboxList(props.initialValue.split(","));
    }
  }, []);

  return (
    <div className={`checkboxList ${props.class || ""}`}>
      {props.items.map((item, i) => {
        return (
          <div className="checkboxList__item" key={i}>
            <input
              checked={checkedArray.some((x: string) => x === item)}
              onChange={onChange}
              type="checkbox"
              id={item}
            />
            <label className="checkboxList__itemName" htmlFor={item}>
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
};
