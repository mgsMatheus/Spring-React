import NotificationButton from "./components/NotificationButton";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section>
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
