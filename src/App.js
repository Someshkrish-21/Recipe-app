import React,{useState} from 'react'
import Products from './Products';

const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "d6fd1b2c";
  const YOUR_APP_KEY ="8b66d12a1f4bb771de71b938bbedd0cc";
  const submitHandler = e =>{
    e.preventDefault();
    try{ fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )}catch(error){
      console.log(error)
    }
   
  }
  return (
    <div className=''>
      <center>
        <h1 className=''>Food Recipe App</h1>
        <form onSubmit={submitHandler} className=''>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        {data.length>=1 ? <Products  data={data}/>:null}
      </center>
    </div>
  )
}

export default App
