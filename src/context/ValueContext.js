import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ValueContext = createContext({ values: [] });

export const ValueProvider = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      const data = res.data;
      const options = data.map((f) => ({
        value: f.name.official,
        label: f.name.official,
        flag: f.flag,
      }));
      setValues(options);
    };
    getData();
  }, []);

  return <ValueContext.Provider value={{ values }}></ValueContext.Provider>;
};
