import { RootStateOrAny, useSelector } from "react-redux";

import "./styles.css";

import recycleIconImg from "../images/recycle.png";
import { FiCheck } from "react-icons/fi";

export default function Card() {
  // const beers = useSelector((state: RootStateOrAny) => state.data);
  const name = useSelector((state: RootStateOrAny) => state.name);
  const infoProduct = useSelector((state: RootStateOrAny) => state.infoProduct);
  const recycleIcon = useSelector((state: RootStateOrAny) => state.recycleIcon);
  const priceProduct = useSelector(
    (state: RootStateOrAny) => state.priceProduct
  );
  const info = useSelector((state: RootStateOrAny) => state.info);
  const urlLink = useSelector((state: RootStateOrAny) => state.urlLink);
  const imgBeerUrl = useSelector((state: RootStateOrAny) => state.imgBeerUrl);

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <img src={imgBeerUrl[0]} alt="imgBeer" className="imgBeerModelo"/>
          <div className="description">
            <h4>
              {name[0]}
            </h4>
            <div className="infoProduct">
              {infoProduct[0]}
              <img
                // alt="iconRecycle"
                className="recycleIcon"
                src={recycleIcon[0] === true ? recycleIconImg : ""}
              />
            </div>
            <div className="priceProduct"> {priceProduct[0]} </div>
            <div className="info">
              {info[0]}
              <div className="detailsLink">
                <a href={`${urlLink[0]}`}> View details </a>{" "}
              </div>
            </div>
          </div>

          <div className="footer">
            <button className="btnRetirar btnInative"> - </button>
            <input className="labelCount" type="text" name="labelCount" defaultValue="0" />
            <button className="btnAdicionar"> + </button>

            <button className="btnUpdate Modelo"> ADD </button>
          </div>
        </div>

        <div className="card">
          <img src={imgBeerUrl[1]} alt="imgBeer"  className="imgBeerPresident"/>
          <div className="description">
            <h4>
              <strong> {name[1]} </strong>
            </h4>
            <div className="infoProduct">
              {infoProduct[1]}
              <img
                alt="iconRecycle" 
                className="recycleIcon"
                src={recycleIcon[1] === true ? recycleIconImg : ""}
              />
            </div>
            <div className="priceProduct"> {priceProduct[1]} </div>
            <div className="info">
              {info[1]}
              <div className="detailsLink">
                <a href={`${urlLink[1]}`}> View details </a>{" "}
              </div>
            </div>
          </div>

          <div className="footer">
            <button className="btnRetirar"> - </button>
            <input className="labelCount" type="text" name="labelCount" defaultValue="4" />
            <button className="btnAdicionar"> + </button>

            <button className="btnUpdate"> ADD </button>
          </div>
        </div>

        <div className="card">
          <img src={imgBeerUrl[2]} alt="imgBeer"  className="imgBeerBrahmaLight"/>
          <div className="description">
            <h4>
              <strong> {name[2]} </strong>
            </h4>
            <div className="infoProduct">
              {infoProduct[2]}
              <img
                alt="iconRecycle"
                className="recycleIcon"
                src={recycleIcon[2] === true ? recycleIconImg : ""}
              />
            </div>
            <div className="priceProduct"> {priceProduct[2]} </div>
            <div className="info">
              {info[2]}
              <div className="detailsLink">
                <a href={`${urlLink[2]}`}> View details </a>{" "}
              </div>
            </div>
          </div>

          <div className="footer">
            <button className="btnRetirar"> - </button>
            <input className="labelCount" type="text" name="labelCount" defaultValue="2" />
            <button className="btnAdicionar"> + </button>

            <button className="btnUpdate BrahmaLight"> <FiCheck /> </button>
          </div>
        </div>

        <div className="card">
          <img src={imgBeerUrl[3]} alt="imgBeer"  className="imgBeerBudweiser"/>
          <div className="description">
            <h4>
              <strong> {name[3]} </strong>
            </h4>
            <div className="infoProduct">
              {infoProduct[3]}
              <img
                alt="iconRecycle"
                className="recycleIcon"
                src={recycleIcon[3] === true ? recycleIconImg : ""}
              />
            </div>
            <div className="priceProduct"> {priceProduct[3]} </div>
            <div className="info">
              {info[3]}
              <div className="detailsLink">
                <a href={`${urlLink[3]}`}> View details </a>{" "}
              </div>
            </div>
          </div>

          <div className="footer">
            <button className="btnRetirar"> - </button>
            <input className="labelCount" type="text" name="labelCount" defaultValue="2" />
            <button className="btnAdicionar"> + </button>

            <button className="btnUpdate"> UPDATE </button>
          </div>
        </div>
      </div>
    </div>
  );
}
