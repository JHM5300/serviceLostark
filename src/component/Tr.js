import NumberFormat from "react-number-format";
import { useCallback, useEffect, useState } from "react";
import { numberFormatStyle } from "../component/Styles";

// const pet = [
//   { value: 10, label: "10%" },
//   { value: 9, label: "9%" },
//   { value: 8, label: "8%" },
//   { value: 7, label: "7%" },
//   { value: 6, label: "6%" },
//   { value: 5, label: "5%" },
//   { value: 4, label: "4%" },
//   { value: 3, label: "3%" },
//   { value: 2, label: "2%" },
//   { value: 0, label: "선택없음" },
// ];ss
function TrComp(props) {
  const [, updateState] = useState();

  const forceUpdate = useCallback(() => updateState({}), []);

  const resultChara = (type) => {
    if (document.getElementById(`${type}펫`) === null) return 0;
    let result = 0;
    document.getElementsByName(type).forEach((data) => {
      result += Number(data.value);
    });
    result += Number(props.value);
    const a =
      document.getElementById(`${type}펫`).value.replaceAll("%", "") * 0.01;
    result = result + result * a;
    return result;
  };

  const onClick = (e) => {
    if (e.target.value === "0") e.target.value = "";
  };
  const onBlur = (e) => {
    if (e.target.value === "") e.target.value = 0;
    if (e.target.value === "0") e.target.value = 0;
  };
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        <NumberFormat
          style={numberFormatStyle()}
          defaultValue={0}
          name={props.name}
          onClick={onClick}
          onBlur={onBlur}
          onChange={forceUpdate}
        />
      </td>
      <td>
        {
          <NumberFormat
            style={numberFormatStyle()}
            readOnly
            value={props.value}
            onChange={forceUpdate}
          />
        }
      </td>
      <td>
        <NumberFormat
          style={numberFormatStyle()}
          defaultValue={0}
          id={`${props.name}펫`}
          format="##%"
          onChange={forceUpdate}
        />
      </td>
      <td>
        <NumberFormat
          style={numberFormatStyle()}
          readOnly
          id={props.name}
          thousandSeparator={true}
          value={resultChara(props.name)}
        />
      </td>
    </tr>
  );
}
export default TrComp;
