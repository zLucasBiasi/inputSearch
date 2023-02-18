import { useState } from "react";

import { data } from "../data";
import { eventType } from "../types";

export const useFilter = () => {
  const [item, setItem] = useState(data);

  const handleChange = (e: eventType) => {
    const newValue = e.target.value;
    const newArray = data.filter((item) =>
      item.toLowerCase().includes(newValue.toLowerCase())
    );
    setItem(newArray);
  };

  return { handleChange, item };
};
