import {
  Collaboration,
  Collection,
  Community,
  Featured,
  Footer,
  Home,
  Newsletter,
} from "./containers";
import { Header, Hero, Sale } from "./components";
function App() {
  return (
    <div className="App box-border p-0 m-0 scroll-smooth text-white min-h-screen overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Sale></Sale>
    </div>
  );
}

export default App;
