import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import { countries, colourOptions, colourOptions2 } from "./data";
import Ant from "./Ant";
import Searchbar from "./Searchbar";
import Install from "./Install";
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
  console.log("values", values);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      console.log("res", res);
      setValues(res.data);
    };
    getData();
  }, []);

  // const filterByName = () => {
  //   values.map((v) => console.log(" v.name", v.name));
  // };

  const filterColors = (inputValue) => {
    const filterC = colourOptions.map((c) => c.name);
    return filterC.filter((i) =>
      i.offcial.toLowerCase().includes(inputValue.toLowerCase())
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
      <Trail promiseOptions={promiseOptions} />
    </FormContainer>
  );
}

export default App;

//  <FormContainer>
//    <Searchbar setOpen={setOpen} onChange={handleChange} />
//    {open &&
//         countries?.map((c) => (
//           <div key={c.countryName}>
//             <Name>1. {c.countryName}</Name>
//           </div>
//         ))}
//    <input type="text" placeholder="select input" />
//    <select
//      name="select1"
//      id=""
//      value="select2"
//      onChange={handleChange}
//      onClick={() => setOpen(true)}
//      placeholder="Select"
//    >
//      {open &&
//        filterRobot?.map((c) => (
//          <option key={c.countryName} value={c.countryName}>
//            {c.countryName}
//          </option>
//        ))}
//    </select>
//    <Ant />
//    <Install />
//    <Trail />
//  </FormContainer>;
