import {useEffect, useState} from 'react'
import './App.css';
import Header from './component/Header'
import Mainboard from './component/Mainboard'
import unplash from './api/unplash'

function App() {


  const [pin, setnewPins] = useState([])

  const getImage=(term)=>{
  return   unplash.get("https://api.unsplash.com/search/photos/",{
       params: {
         query:term   }
     })
  }



  const onSearchSubmit=(term)=>{  
     getImage(term).then((res)=>{
       let result=res.data.results;

       let newPins=[
         ...result,
         ...pin
       ]

       newPins.sort(function (a,b) {
         return 0.5- Math.random();
       })

       setnewPins(newPins)

     })
  }


 const getNewpin=()=>{
    let promises=[];
    let pinData=[];

    let pins=['cat','dog','sex','girl'];

    pins.forEach((pinterm)=>{
      promises.push(
        getImage(pinterm).then((res)=>{
          let result=res.data.results;
       
          pinData=pinData.concat(result)

          pinData.sort(function (a,b) {
            return 0.5-Math.random();
          })

        })
      )
    })

    Promise.all(promises).then(()=>{
      setnewPins(pinData)
    })
  }

  useEffect(() => {
    
    getNewpin();
  }, [])

  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit}/>
      <Mainboard pins={pin}/>
    </div>
  );
}

export default App;
