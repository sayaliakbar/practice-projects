import {
  Collaboration,
  Collection,
  Community,
  Featured,
  Footer,
  Home,
  Newsletter,
  Sale,
} from "./containers";
import { Header, Hero } from "./components";
function App() {
  return (
    <div className="App box-border p-0 m-0 scroll-smooth text-white min-h-screen overflow-hidden">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}

export default App;
