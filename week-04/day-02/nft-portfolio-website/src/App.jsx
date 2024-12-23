import { Header, Hero, Sale, Highlight, Collections } from "./components";
function App() {
  return (
    <div className="App box-border p-0 m-0 scroll-smooth text-white min-h-screen overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Sale></Sale>
      <Highlight></Highlight>
      <Collections></Collections>
    </div>
  );
}

export default App;
