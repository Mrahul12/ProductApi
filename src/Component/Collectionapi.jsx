import { useState, useEffect } from "react";
import Collectioncloth from "./Collectioncloth";

// =====Api of cloth collection========
const API='https://fakestoreapi.com/products';
function Collectionapi() {
  const [cloth, setCloth] = useState([]);

  // ===useEffect hook used for manage with server
  //! here call api and send to the function and its accept by url
  useEffect(()=>{
collectionCloth(API)
  },[])

  // !Api return promise --> it handle by using async & await
    //todo fetch is a method and it returns promise
  const collectionCloth=async(url)=>{
 try{
  const response = await fetch(url); // return url and crucial data and server status but response is an object
  // console.log(response);
  const result = await response.json(); // response.json()--> convert JSON response into javascript object
  
  if(result.length>0){
   setCloth(result);
  }
 }catch(e){
  console.error('Go and re-check api'+e.message)
 }
  }
  return (
    <>
      <section className="flex flex-wrap justify-center items-center gap-8 " key={Math.random()}>
        <Collectioncloth value={cloth} />
      </section>
   
    </>
  );
}

export default Collectionapi;
