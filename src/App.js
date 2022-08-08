import "./App.css";
import Home from "./pages/Home";
import CoinInfoPage from "./pages/CoinInfoPage";
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import FetchData from './api/FetchData';
import axios from "axios";

function App() {
  const dataArray = useSelector(state=>state.dataArray);
  const dispatch = useDispatch();
  // const [dataArray, setDataArray] = useState(null);
  async function getData() {
    const res = await axios.get(
      "https://supermind-staging.vercel.app/api/test/listing"
    );
    dispatch({type:'change_array',value:res.data})
    // setDataArray(res.data);
  }
  useEffect(() => {
    getData();
  }, []);
  // console.log(dataArray);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/details" element={<CoinInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
