import { HomePage } from "./pages/homePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/index.css";

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
      <HomePage />
    </>
  );
};

export default App;
