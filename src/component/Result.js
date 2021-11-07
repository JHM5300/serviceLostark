import minusimg from "../img/minus.png";
import plus from "../img/plus.png";
import notimg from "../img/not.png";
function Result({ data, minus }) {
  return (
    <div>
      <div className="itemList">
        {
          <>
            <div className="wrap">
              <div className="item-name">
                {data.name}
                {data.value - 15 <= 0 ? "" : `+${data.value - 15}`}
              </div>
              <div className="item-value">
                {Array(data.value)
                  .fill("plus")
                  .map((item, key) => {
                    return (
                      <>
                        {key < 15 ? (
                          <div key={key}>
                            <img src={minus ? minusimg : plus} alt={item} />
                            {key === 4 || key === 9 ? "|" : ""}
                          </div>
                        ) : (
                          ""
                        )}
                        {data.value === key + 1 && 15 - data.value > 0
                          ? Array(15 - data.value)
                              .fill("not")
                              .map((not, index) => {
                                return (
                                  <div key={index}>
                                    <img key={key} src={notimg} alt={not} />
                                    {data.value + index === 4 ||
                                    data.value + index === 9
                                      ? "|"
                                      : ""}
                                  </div>
                                );
                              })
                          : ""}
                      </>
                    );
                  })}
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
}
export default Result;
