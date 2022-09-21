import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getOccupations, postCharacter} from '../redux/actions'

const AddCharacter = () => {
  const dispatch = useDispatch();
  const occupations = useSelector((e) => e.occupations);
  const histoy = useHistory();
  const [input, setInput] = useState({
    //declare the input in the objet and set it
    name: "",
    nickName: "",
    birthdat: "",
    status: "",
    occupation: [],
  });

  return <div>AddCharacter</div>;
};

export default AddCharacter;
