// import logo from './logo.svg';
import './App.css';


// import css part
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import navigation .
import Navigation from './routes/Navigation';

function App() {
  return (
    <div className="App">
      
        {/* <Header /> */}
        <Navigation />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        {/* <Footer /> */}
    </div>
  );
}

export default App;
