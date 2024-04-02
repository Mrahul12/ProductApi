import React from 'react'

// ! value--> comes from Collection api component
//todo now, Collectioncloth accept as an parameter of value in --> {value}
const Collectioncloth=({value})=>{
 // console.log(value); //! value--> is an object but retun in array format --> Array(178) [ {…}, {…}, {…}]
 return(
  <>
  {
   value.map((data,ind)=>{
    //! here, Data is an object format
    //todo now, destructuring of data object
    const{image,rating,title,price}=data;
    // const{image}=data.category;
    
    return(
    <>
    <article key={ind} className='flex flex-col gap-2 bg-white p-3 rounded-[10px] shadow-[5px_5px_15px] '>
     <img src={image} alt="Cloth collection"   loading='lazy' className='w-[280px] h-[300px] rounded '/>
     <h2 className='text-1xl font-semibold'>Title : {`${title.slice(0,20)}.....`}</h2>
     <div className='flex justify-between items-center p-[0px_20px]'>
      <p className='text-1xl font-semibold'>{`₹ ${price}`}</p>
      <b className='text-1xl font-semibold bg-slate-300 px-2 text-center py-1 rounded shadow-[0px_0px_3px]'>{`⭐ ${rating.rate}`}</b>
     </div>
     <button className='bg-green-600 p-2 rounded text-2xl font-semibold shadow-[2px_2px_10px]' >Add To Card</button>
    </article>

    </>
    )
   })
  }
  </>
 )
}
export default Collectioncloth;