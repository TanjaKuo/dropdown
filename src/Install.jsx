import React from "react";
import SelectSearch from "react-select-search";
import { useRef } from "react";

const Install = () => {
  const searchInput = useRef();

  const options = [
    {
      type: "group",
      name: "Atlanta",
      items: [
        { name: "Workshop One", value: "1" },
        { name: "Workshop Two", value: "2" },
      ],
    },
    {
      type: "group",
      name: "Charleston",
      items: [
        { name: "Workshop Three", value: "3" },
        { name: "Workshop Four", value: "4" },
        { name: "Workshop Five", value: "5" },
      ],
    },
    {
      type: "group",
      name: "Inactive",
      items: [{ name: "Inactive Workshop", value: "100" }],
    },
  ];

  const handleChange = (...args) => {
    // searchInput.current.querySelector("input").value = "";
    console.log("ARGS:", args);

    console.log("CHANGE:");
  };

  // const options = [
  //   { name: "Workshop Three", value: "1" },
  //   { name: "Workshop Two", value: "2" },
  //   { name: "Workshop Three", value: "3" },
  //   { name: "Workshop Four", value: "4" },
  //   { name: "Workshop Five", value: "5" }
  // ];

  const handleFilter = (items) => {
    return (searchValue) => {
      if (searchValue.length === 0) {
        return options;
      }
      const updatedItems = items.map((list) => {
        const newItems = list.items.filter((item) => {
          return item.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        return { ...list, items: newItems };
      });
      return updatedItems;
    };
  };

  return (
    <SelectSearch
      ref={searchInput}
      options={options}
      filterOptions={handleFilter}
      value=""
      name="Workshop"
      placeholder="Choose a workshop"
      search
      onChange={handleChange}
    />
  );
};

export default Install;
