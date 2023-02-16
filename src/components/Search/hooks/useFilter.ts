import { useState } from "react";
import { data } from "../data";

export const useFilter = () => {
  const [item, setItem] = useState(data);

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    const newArray = data.filter((item) =>
      item.toLowerCase().includes(newValue.toLowerCase())
    );
    setItem(newArray);
  };

  return { handleChange, item };
};
