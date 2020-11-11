import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading'
import Tours from './Tours'

const url = "https://course-api.com/react-tours-project"
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (id)=>{
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async ()=> {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTours();
  }, [])
  if(loading){
    return(
    <div className="App">
      <Loading />
    </div>
    )
  }
  if(tours.length === 0){
    return (
    <div className="App">
      <h2>No Tours Left </h2>
      <button onClick={fetchTours} className="refresh-button">Refresh Page</button>
    </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
