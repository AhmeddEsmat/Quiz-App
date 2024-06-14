import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="h-screen overflow-y-auto bg-[url(../src/assets/background.jpg)] bg-cover bg-no-repeat bg-center h-screen w-screen">
      <Header />
      <Quiz />
    </div>
  );
}

export default App;
