import { useDispatch } from "react-redux/es/exports";

import axios from "axios";
async function FetchData() {
    let dispatch = useDispatch();
    const res = await axios.get(
      "https://supermind-staging.vercel.app/api/test/graph"
    );
    dispatch({type:'graphData',value:res.data})
  }

export default FetchData;