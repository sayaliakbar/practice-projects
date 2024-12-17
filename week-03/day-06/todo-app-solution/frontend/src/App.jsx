import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import bgMobileDark from "./assets/images/bg-mobile-dark.jpg";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <>
      <div className="w-full flex items-center justify-center relative ">
        {/* Desktop Light Mode */}
        <img
          className="hidden sm:block dark:hidden w-full"
          src={bgDesktopLight}
          alt="Desktop Light"
        />

        {/* Desktop Dark Mode */}
        <img
          className="hidden dark:block w-full"
          src={bgDesktopDark}
          alt="Desktop Dark"
        />

        {/* Mobile Light Mode */}
        <img
          className="sm:hidden w-full"
          src={bgMobileLight}
          alt="Mobile Light"
        />

        {/* Mobile Dark Mode */}
        {/* <img
          className="sm:hidden dark:block w-full"
          src={bgMobileDark}
          alt="Mobile Dark"
        /> */}

        {/* Todo Container */}
        <TodoContainer className="absolute top-0"></TodoContainer>
      </div>
    </>
  );
}

export default App;
