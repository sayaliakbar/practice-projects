import {
  Header,
  Hero,
  Sale,
  Highlight,
  Collections,
  Partners,
} from "./components";
import { Community, Newsletter, Footer } from "./containers";
function App() {
  return (
    <div className="App box-border p-0 m-0 scroll-smooth text-white min-h-screen overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Sale></Sale>
      <Highlight></Highlight>
      <Collections></Collections>
      <Community></Community>
      <Sale></Sale>
      <Partners></Partners>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
