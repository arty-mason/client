import { useState, useEffect } from "react";

const PREFIX = "whatsapp-clone-";
/// Creating a prefix to make it easier to find and debug the files in local storage

const useLocalStorage = (key, initialValue) => {
  /// Creating a function to store the generated id in local storage
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);
  /// Re-recording the file every time the value (id) changes

  return [value, setValue];
};

export default useLocalStorage;
