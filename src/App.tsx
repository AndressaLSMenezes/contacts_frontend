import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/index.css";
import RoutesMain from "./routes";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RoutesMain />
    </>
  );
};

export default App;
