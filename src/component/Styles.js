export const numberFormatStyle = (style = {}) => {
  return {
    color: "black",
    width: "100px",
    height: "38px",
    fontSize: "15px",
    textAlign: "center",
    ...style,
  };
};
export const selectNumberStyle = (style = {}) => {
  return {
    option: (provided) => ({
      ...provided,
      color: "black",
      fontSize: "15px",
    }),
    control: (provided) => ({
      ...provided,
      color: "black",
      width: "100px",
      fontSize: "15px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: "15px",
    }),
    ...style,
  };
};

export const selectLabelStyle = (style = {}) => {
  return {
    option: (provided) => ({
      ...provided,
      color: "black",
      fontSize: "15px",
    }),
    control: (provided) => ({
      ...provided,
      color: "black",
      fontSize: "15px",
      width: "200px",
    }),
    ...style,
  };
};
