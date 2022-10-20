import { useSelector } from "react-redux";
import Layout from "./Layout";

function App() {
  const test = useSelector((test) => test.props.children);

  return (
    <Layout>
      {test}
      <div>1</div>
    </Layout>
  );
}

export default App;
