const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[95vh]"></div>
      <div className="flex w-full bg-white">
        <input type="text" placeholder="Type message" className="flex-1 p-4" />
        <button className="bg-purple-600 text-white p-4">Submit</button>
      </div>
    </div>
  );
};

export default App;
