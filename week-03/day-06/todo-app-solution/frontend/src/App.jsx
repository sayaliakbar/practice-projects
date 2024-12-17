import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";

import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <img className="hidden xs:block w-full" src={bgDesktopLight} alt="" />
        <img className="xs:hidden w-full" src={bgMobileLight} />
        <TodoContainer className="absolute"></TodoContainer>
      </div>
    </>
  );
}

export default App;
