import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
//import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import SelectAndSearch from "./components/SelectAndSearch";

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [values, setValues] = useState([]);
  //console.log("app values", values);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      console.log("res", res.data);
      const data = res.data;
      const options = data.map((f) => ({
        value: f.name.official,
        label: f.name.official,
        flag: f.flag,
      }));
      //console.log("options", options);
      setValues(options);
    };
    getData();
  }, []);

  const filterColors = (inputValue) => {
    return values?.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  return (
    <FormContainer>
      <SelectAndSearch promiseOptions={promiseOptions} values={values} />
    </FormContainer>
  );
}

export default App;
