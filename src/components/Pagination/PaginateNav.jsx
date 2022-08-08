import React from 'react';
import './pagination.css';
import {useDispatch} from 'react-redux';
function PaginateNav({data}) {
  const dispatch = useDispatch();
function paginate(idx){
  dispatch({type: 'changePage',position:{start:idx,end:idx+10}})
  console.log(idx);
}
  return (
    <div className="pagination-Sec">
      <div  className="pageBtn">prev</div>
        {data && data.map((item,index)=>{
          return (
            <div onClick={()=>{paginate(index+1)}} key={index} className="pageBtn">{index+1}</div>
          )
        })}
        <div  className="pageBtn">next</div>
    </div>
  )
}

export default PaginateNav;