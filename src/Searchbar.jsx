import React from "react";

const Searchbar = ({ setOpen, onChange }) => {
  const handleClick = () => setOpen(true);

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Select"
        onClick={handleClick}
        onChange={onChange}
      /> */}
      <select
        name=""
        id=""
        onChange={onChange}
        onClick={handleClick}
        placeholder="Select"
      ></select>
    </div>
  );
};

export default Searchbar;
