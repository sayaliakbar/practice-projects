import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

// RootLayout component serves as the main layout for the application
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
        <div className="main">
          <div className="gradient">{/* Gradient background */}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
