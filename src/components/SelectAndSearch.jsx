import React from "react";
import AsyncSelect from "react-select/async";
import styled from "styled-components";

const SelectContainer = styled.div`
  width: 300px;
`;

const SelectAndSearch = ({ promiseOptions, values }) => {
  return (
    <SelectContainer>
      <AsyncSelect
        cacheOptions
        defaultOptions={values}
        loadOptions={promiseOptions}
        getOptionLabel={(e) => e.flag + e.label}
        // getOptionValue={(e) => e.official}
        //loadOptions={loadOptions}
      />
    </SelectContainer>
  );
};

export default SelectAndSearch;
