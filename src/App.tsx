import Card from "./components/Card";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Card />
      </div>
    </Provider>
  );
}

export default App;
