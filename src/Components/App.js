import {useState,useEffect} from 'react'
import axios from 'axios'
import LoginForm from './LoginForm'
import BmiContainers from './BmiContainers'
export default function App(){
  const [data,setData] = useState([])
  const [loggedIn,setLoggedIn] = useState(false)
  useEffect(()=>{
    if(loggedIn){
      (async()=>{
        try{
          const response = await axios.get('http://localhost:3086/api/users',{
            headers:{
              Authorization:localStorage.getItem('token')
            }})
          const result = response.data
          console.log(result)
          setData(result)
        }catch(err){
          console.log(err)
        }
      })();
    }else{
      setData([])
    }
    
  },[loggedIn])

  const addData = (userdata)=>{
    console.log(userdata)
    setData(prevData=>[...prevData,userdata])
  }


  const removeData = (obj)=>{
    const newArr = data.filter((ele)=>{
      return ele._id!=obj._id
    })
    setData(newArr)
  }

  const loginSuccess = ()=>{
    setLoggedIn(true)
  }

  const logoutUser = ()=>{
    setLoggedIn(false)
    localStorage.removeItem('token')
  }
  return(
    <div>
      {loggedIn?
      <div>
      <button onClick={logoutUser}>logout</button>
      <BmiContainers data = {data}
      addData = {addData}
      removeData = {removeData}
      />
      </div>
      :
      <div>
      <LoginForm loginSuccess= {loginSuccess}/>
      </div>
      }
      <div>

      </div>

      
    </div>
  )
    
}