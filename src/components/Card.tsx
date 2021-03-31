import { RootStateOrAny, useSelector } from "react-redux";

import "./styles.css";

import recycleIconImg from "../images/recycle.png";
import { FiCheck } from "react-icons/fi";

export default function Card() {
  const name = useSelector((state: RootStateOrAny) => state.name);
  const infoProduct = useSelector((state: RootStateOrAny) => state.infoProduct);
  const recycleIcon = useSelector((state: RootStateOrAny) => state.recycleIcon);
  const priceProduct = useSelector((state: RootStateOrAny) => state.priceProduct);
  const info = useSelector((state: RootStateOrAny) => state.info);
  const urlLink = useSelector((state: RootStateOrAny) => state.urlLink);
  const imgBeerUrl = useSelector((state: RootStateOrAny) => state.imgBeerUrl);

  const classNameImg = useSelector((state: RootStateOrAny) => state.classNameImg);
  const btnRetirar = useSelector((state: RootStateOrAny) => state.btnRetirar);
  const qtdLabelCount = useSelector((state: RootStateOrAny) => state.qtdLabelCount);
  const btnAdicionar = useSelector((state: RootStateOrAny) => state.btnAdicionar);
  const btnUpdate = useSelector((state: RootStateOrAny) => state.btnUpdate);

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
