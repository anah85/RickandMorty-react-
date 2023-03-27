import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

export default function RequiredComponent({children, authenticat}) {
  let location = useLocation();
  if(!authenticat){
    return <Navigate to ="/login" state={{form:location}} replace />;
  } 
  return children
}
