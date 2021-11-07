import TrComp from "./Tr";
const list = ["치명", "특화", "제압", "신속", "인내", "숙련"];

function CharacteristicDiv(props) {
  const inputChara = (type) => {
    const value = [...props.value];
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      if (item.name === type) {
        return item.value;
      }
    }
    return 0;
  };
  return (
    <div className="sector" style={{ display: "flex" }}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>기본값</th>
            <th>악세</th>
            <th>펫효과</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          {list.map((data, key) => {
            return <TrComp key={key} name={data} value={inputChara(data)} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default CharacteristicDiv;
