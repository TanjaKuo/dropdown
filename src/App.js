import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import { countries, colourOptions, colourOptions2 } from "./data";
//import Ant from "./Ant";
//import Searchbar from "./Searchbar";
//import Install from "./Install";
import Trail from "./Trail";

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
`;

const Name = styled.p`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function App() {
  const [values, setValues] = useState([]);
  const [countriesName, setCountriesName] = useState("");

  console.log("values", values);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      console.log("res", res.data);
      // const nameOnly = res.data?.map((f) => f.name);
      // console.log("nameOnly", nameOnly);
      //setValues(res.data);
      const data = res.data;
      const options = data.map((f) => ({
        value: f.name.official,
        label: f.name.official,
        flag: f.flag,
      }));
      console.log("options", options);
      setValues(options);
    };
    getData();
  }, []);

  const filterColors = (inputValue) => {
    // const filterC = colourOptions.map((c) => c.name.offcial);
    // console.log("filterc", filterC);
    // const names = values?.map((f) => f.name);
    // console.log("names", names);
    // const abc = names.filter((i) => i.official);
    // console.log("abc", abc);
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
    // <FormContainer>
    <Trail promiseOptions={promiseOptions} values={values} />
    // </FormContainer>
  );
}

export default App;
