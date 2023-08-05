import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
const [isLoading,setLoading] = useState(true)
const [tours, setTours] = useState([])

const removeToours = (id) =>{
  const newTour = tours.filter((tour)=>tour.id !== id)
  setTours(newTour);

}
  const fetchTours = async ()=>{
   setLoading(true)
   try {
       const response =  await fetch(url)
       const tours =  await response.json()
       setTours(tours)
       console.log(tours )
   } catch (error) {
    
   }
   
   setLoading(false)
  }

  useEffect(()=>{
    fetchTours();
  },[])
  
  if(isLoading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }


   if (tours.length ===0){
    return (
      <main>
        <div className='title'>
         <h2>no tours left</h2>
         <button
         type='button'
         style={{marginTop : '2rem'}}
         className='btn'
         onClick={()=>fetchTours()}
         >
          refresh
         </button>
        </div>
      </main>
    )
   }





  return <main>
    <Tours tours={tours}  removeToours = {removeToours}  />
  </main>
}

export default App
