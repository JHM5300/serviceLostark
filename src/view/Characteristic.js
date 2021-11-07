import Select from "react-select";
import NumberFormat from "react-number-format";
const inputSty = {
  color: "black",
  width: "100px",
  height: "38px",
  fontSize: "15px",
  textAlign: "center",
};
const labelStyle = {
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
};
const characteristic = [
  { value: "치명", label: "치명" },
  { value: "특화", label: "특화" },
  { value: "제압", label: "제압" },
  { value: "신속", label: "신속" },
  { value: "인내", label: "인내" },
  { value: "숙련", label: "숙련" },
];
function Characteristic(props) {
  return (
    <div style={{ display: "flex" }}>
      <Select
        styles={labelStyle}
        placeholder="특성"
        options={characteristic}
        name="char"
        onChange={props.onChange}
      />
      <NumberFormat
        type="tel"
        style={inputSty}
        name="char-num"
        onChange={props.onChange}
      />
    </div>
  );
}
export default Characteristic;
