import "./App.css";
import Button from "./components/Button/Button";
import { Layout } from "./components/Layout/Layout";

function App() {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log("click", event);
  };

  return (
    <Layout>
      <div>
        <h1>Hellow World</h1>
        <Button isDisabeled={true} onClick={handleButtonClick}>
          send
        </Button>
      </div>
    </Layout>
  );
}

export default App;
