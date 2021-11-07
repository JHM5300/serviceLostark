import "./App.css";
import Items from "../object/engrainjg";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Characteristic from "./Characteristic";
import CharacteristicDiv from "../component/CharacteristicDiv";
import Result from "../component/Result";
import NumberFormat from "react-number-format";
import {
  selectLabelStyle,
  numberFormatStyle,
  selectNumberStyle,
} from "../component/Styles";

const onChange = (optElem, optNum, setOpt) => {
  setTimeout(() => {
    option1 = [];
    const opt = document.getElementsByName(optElem);
    const num = document.getElementsByName(optNum);
    for (let i = 0; i < opt.length; i++) {
      if (opt[i].value === "") continue;
      const obj = {
        name: opt[i].value,
        value: Number(num[i].value),
      };
      let flag = false;
      for (let j = 0; j < option1.length; j++) {
        const data = option1[j];
        if (data.name === obj.name) {
          flag = true;
          option1[j] = {
            name: data.name,
            value: Number(data.value) + Number(obj.value),
          };
          break;
        }
      }
      if (!flag) {
        option1.push(obj);
      }
    }
    setOpt(option1);
  }, 100);
};

/**
 *
 * @todo  악세이름추가, 프리셋 저장불러오기
 *
 */
let option1 = [];

function LostArk() {
  const [option, setOpt] = useState([]);
  const [minus, setMinus] = useState([]);
  const [value, setValue] = useState([]);
  const [gold, setGold] = useState(0);

  useEffect(() => {
    console.log(minus);
  }, [minus]);
  const onChangeGold = () => {
    let result = 0;
    document.getElementsByName("gold").forEach((data) => {
      result += Number(data.value.replaceAll(",", ""));
    });
    setGold(result);
  };
  return (
    <div className="App">
      <div className="body">
        <div className="sector ">
          <div className="lineBlock divTop">
            <CharacteristicDiv value={value} />
            <div style={{ textAlign: "start", paddingInlineStart: "30px" }}>
              골드 합계
              <NumberFormat
                readOnly
                value={gold}
                thousandSeparator={true}
                style={{
                  ...numberFormatStyle(),
                  width: "150px",
                }}
              />
            </div>
          </div>
          <div className="lineBlock divTop">
            {option.map((data, key1) => {
              return <Result data={data} key={key1} />;
            })}
            {minus.map((data, index) => {
              return <Result data={data} key={index} minus />;
            })}
          </div>
        </div>

        <div className="sector">
          {Items.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div id={item.name}>
                  <span>{item.name}</span>
                </div>
                <div style={{ display: "flex" }}>
                  <Select
                    options={item.engrainjg}
                    styles={selectLabelStyle()}
                    placeholder="각인"
                    name="option1"
                    className="select"
                    onChange={() => {
                      onChange("option1", "option1-num", setOpt);
                    }}
                  />
                  <Select
                    options={item.selectItem}
                    styles={selectNumberStyle()}
                    placeholder=""
                    name="option1-num"
                    className="select"
                    onChange={() => {
                      onChange("option1", "option1-num", setOpt);
                    }}
                  />
                </div>
                {item.name !== "각인" ? (
                  <>
                    <div style={{ display: "flex" }}>
                      <Select
                        options={item.engrainjg}
                        placeholder="각인"
                        styles={selectLabelStyle()}
                        name="option1"
                        className="select"
                        onChange={() => {
                          onChange("option1", "option1-num", setOpt);
                        }}
                      />
                      <Select
                        options={item.selectItem}
                        styles={selectNumberStyle()}
                        placeholder=""
                        name="option1-num"
                        className="select"
                        onChange={() => {
                          onChange("option1", "option1-num", setOpt);
                        }}
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <Select
                        options={item.maItem}
                        placeholder="감소"
                        styles={selectLabelStyle()}
                        name="minus"
                        className="select"
                        onChange={() => {
                          onChange("minus", "minus-num", setMinus);
                        }}
                      />
                      <Select
                        options={item.ItemCount2}
                        styles={selectNumberStyle()}
                        placeholder=""
                        name="minus-num"
                        className="select"
                        onChange={() => {
                          onChange("minus", "minus-num", setMinus);
                        }}
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}
                {item.name !== "돌" && item.name !== "각인" ? (
                  <Characteristic
                    onChange={() => onChange("char", "char-num", setValue)}
                  />
                ) : (
                  ""
                )}
                {item.name !== "목걸이" || (
                  <Characteristic
                    onChange={() => onChange("char", "char-num", setValue)}
                  />
                )}
                {item.name === "돌" || item.name === "각인" || (
                  <>
                    <div className="gold">
                      <span style={{ width: "100%" }}>구매 금액</span>
                      <NumberFormat
                        style={numberFormatStyle()}
                        placeholder="골드"
                        name="gold"
                        onChange={onChangeGold}
                        thousandSeparator={true}
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="btn-sector">
          <span className="preset-span">프리셋 저장 </span>
          {Array(5)
            .fill("btn")
            .map((data, key) => {
              return (
                <div className="preset" key={key}>
                  <button className="btn">{key + 1}</button>
                </div>
              );
            })}
          <div className="preset">
            <button className="btn" style={{ margin: "0 10px" }}>
              저장
            </button>
            <button className="btn" style={{ margin: "0 5px" }}>
              불러오기
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>제작자: (루페온) 미트소시지소스스테이크</div>
      </div>
    </div>
  );
}

export default LostArk;
