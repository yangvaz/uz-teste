import { RootStateOrAny, useSelector } from "react-redux";

import "./styles.css";

import recycleIconImg from "../images/recycle.png";
import { FiCheck } from "react-icons/fi";

export default function Card() {

  const { name, infoProduct, recycleIcon, priceProduct, info, urlLink, imgBeerUrl, classNameImg,
    btnRetirar, qtdLabelCount, btnAdicionar, btnUpdate } = useSelector((state: RootStateOrAny) => 
    state);

  return (
    <div className="App">
      <div className="container">
        {name.map((justGettingIndex: any, index: any) => {
          return (
            <div className="card" key={name[index]}>
              <img
                src={imgBeerUrl[index]}
                alt="imgBeer"
                className={classNameImg[index]}
              />
              <div className="description">
                <h4>{name[index]}</h4>
                <div className="infoProduct">
                  {infoProduct[index]}
                  <img
                    // alt="iconRecycle"
                    className="recycleIcon"
                    src={recycleIcon[index] === true ? recycleIconImg : ""}
                  />
                </div>
                <div className="priceProduct"> {priceProduct[index]} </div>
                <div className="info">
                  {info[index]}
                  <div className="detailsLink">
                    <a href={`${urlLink[index]}`}> View details </a>{" "}
                  </div>
                </div>
              </div>

              <div className="footer">
                <button className={btnRetirar[index]}> - </button>
                <input
                  className="labelCount"
                  type="text"
                  name="labelCount"
                  defaultValue={qtdLabelCount[index]}
                />
                <button className={btnAdicionar[index]}> + </button>

                <button className={btnUpdate[index]}>
                  {btnUpdate[index] === "btnUpdate BrahmaLight" ? (
                    <FiCheck />
                  ) : btnUpdate[index] === "btnUpdate Budweiser" ? (
                    "UPDATE"
                  ) : (
                    "ADD"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
