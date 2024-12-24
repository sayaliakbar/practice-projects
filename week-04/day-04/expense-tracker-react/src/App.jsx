import "./App.css";
import { Balance, Display, Header, History, Transaction } from "./components";
function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <Display />
    </div>
  );
}

export default App;
