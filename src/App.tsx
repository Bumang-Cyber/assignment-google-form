import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store";
import Layout from "@/components/Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Outlet />
      </Layout>
    </Provider>
  );
}

export default App;
