import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";

import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <>
      <div className="h-full w-full relative flex flex-col items-center">
        <img src={bgDesktopLight} alt="" />
        <TodoContainer className="absolute"></TodoContainer>
      </div>
    </>
  );
}

export default App;
