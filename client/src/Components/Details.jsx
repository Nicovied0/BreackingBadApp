import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions";
import Loader from "./Loader";
// import Loader from "./Loader";

function Details(props) {
  const details = useSelector((i) => i.details);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(getDetails(id));
  }, [id, dispatch]);

if(!details){
  return(
    <h2>error</h2>
  )
}else if(details.length) {
  return(
    <Loader/>
  )
}else{
  return (
    <div className="detail">
      
        <div>
          <h2 className="nameC">{details.name}</h2>
          <div className="allDetails">
            <img
              className="imgDetails"
              src={details.image}
              alt="Not found"
            ></img>
            <h5>{details.nickName}</h5>
            <h3>status</h3>
            <h4>{details.status}</h4>
            <h4>{details.points}</h4>
            <h4>{details.birtday}</h4>
            <h4>Occupations</h4>
            {/* {
            details.occupation?.map((i) => (
              <h5>{i}</h5>
            ))} */}
          </div>
        </div>
     
      
    </div>
  );
} 
}

export default Details;
