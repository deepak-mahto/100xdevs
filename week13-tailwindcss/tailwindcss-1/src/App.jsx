const App = () => {
  return (
    <div className="h-screen bg-white dark:bg-blue-600">
      <button
        onClick={() => {
          document
            .querySelector("html")
            .classList.toggle(
              "dark",
              document.querySelector("html").classList[0] === "dark"
                ? false
                : true
            );
        }}
      >
        toggle theme
      </button>
    </div>
  );
};

export default App;
