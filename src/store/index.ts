import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
    'Heineken',
    'Budweiser',
  ],
  name: [
    'Modelo Negra',
    'Presidente Light',
    'Brahma Light very very light 33 Onz - Caja [12 Botellas]',
    'Budweiser',
  ],
  infoProduct: [
    '12 Unit - 33oz Bottle',
    '16 Unit - 330ml Bottle',
    '16 Unit - 330ml Bottle',
    '16 Unit - 330ml Bottle and extra long summary on multiple lines',
  ],
  recycleIcon: [
    false,
    true,
    true,
    true,
  ],
  priceProduct: [
    'RD$32.00/Unit',
    'RD$43.00/Unit',
    'RD$43.00/Unit',
    'RD$26.00/Unit',
  ],
  info: [
    'Buy 3, get 1 free.',
    'Buy 3, get 1 free Red Bull or Pepsi Black.',
    'For every 5 you buy, get up to 2 free.',
    'For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Black.',
  ],
  urlLink: [
    'www.modelousa.com/en-US/product/negra',
    'www.beeradvocate.com/beer/profile/912/25694/',
    'www.ratebeer.com/Ratings/Beer/Beer-Ratings.asp?BeerID=4110',
    'www.budweiser.com.br',
  ],
  imgBeerUrl: [
    'https://cdn.justwineapp.com/assets/beer/bottle/anheuserbusch-inbev-modelo-negra_1477953724.png',
    'http://dbertolineandsons.com/wp-content/uploads/2016/11/presidente-light.png',
    'http://4.bp.blogspot.com/-OKbXZIs67uE/TXg3aKGV8KI/AAAAAAAACeo/7QHLq2PAK2g/s1600/cerveza%2Bbrahma-light.jpg',
    'https://www.imigrantesbebidas.com.br/bebida/images/products/full/71062_Cerveja_Budweiser_Long_Neck_330ml.jpg',
  ],
};

function beers(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case 'ADD_BEER':
      return { ...state, data: [ ...state.data, action.title] };
    default:
      return state;
  }
}

const store = createStore(beers);

export default store;