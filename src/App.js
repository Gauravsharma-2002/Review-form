import "./styles/app.scss";
import Review from "./components/Review";
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
   <>
   <Review/>
   <Toaster/>
   </>
  );
}

export default App;
