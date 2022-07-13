import RouterNavigation from "../src/Navigation/RouterNavigation";
import DogContextProvider from "./context/DogContextProvider";


function App() {
  return (
    <div className="App">
        <DogContextProvider>
          <RouterNavigation />
        </DogContextProvider>
    </div>
  );
}

export default App;
