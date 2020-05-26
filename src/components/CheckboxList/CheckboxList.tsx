import React, {useState } from "react";
import { ICheckboxlistProps } from "../../interfaces";

export const CheckboxList: React.FunctionComponent<ICheckboxlistProps> = (
  props
) => {
  const [checkboxList, setCheckboxList] = useState<string[]>([]);

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
      id: props.name,
      value: newCheckbox.join(",").trim(),
    });
  };

  return (
    <div>
      {props.items.map((item, i) => {
        return (
          <div key={i}>
            <input onChange={onChange} type="checkbox" id={item}  />
            <label htmlFor={item}>{item}</label>
          </div>
        );
      })}
    </div>
  );
};
