import { Balance, Display, Header, History, Transaction } from "./components";
import { GlobalProvider } from "./context/GlobalState.jsx";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="container flex flex-col justify-center gap-2">
        <Header />
        <Balance />
        <Display />
        <History />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
