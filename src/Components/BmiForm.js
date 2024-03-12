import {useState} from 'react'
import axios from 'axios'
export default function BmiForm(props){
    const [date,setDate] = useState('')
    const [height,setHeight] = useState('')
    const [weight,setWeight] = useState('')
    const [bmi,setBmi] = useState('')
    const [submitted,isSubmitted] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(weight.length && height.length == 0){
            alert('please enter height and weight')
        }
                const bmiValue = Math.round((weight /(height/100)**2))
                console.log(bmiValue)
                setBmi(bmiValue)
                isSubmitted(!submitted)
                
          const formData = {
            date:date,
            height:height,
            weight:weight,
            bmi:bmiValue
          }
          console.log(formData)
          setDate('')
          setHeight('')
          setWeight('')

        try{
            const response = await axios.post('http://localhost:3086/api/users',formData,{
                headers: {
                    Authorization : localStorage.getItem('token')
                }
            })
            const result = response.data
            result.bmi = bmiValue
            // console.log(result)
            props.addData(result)
        }
        catch(err){
            console.log(err)
        }
        
        
    }
    const reload = ()=>{
        window.location.reload()
    }
    return(
        <div>
            <h1>BMI Calculator</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                <label htmlFor='date'>Date</label>
                <input 
                type = 'date'
                value = {date}
                onChange = {(e)=>{setDate(e.target.value)}}
                id = 'date'/>
                <br/>
                </div>
                <div>
                <label htmlFor = 'height'>Height</label>
                <input 
                type = 'number'
                value = {height}
                onChange = {(e)=>{setHeight(e.target.value)}}
                id = 'height'
                min = '1'
                /><br/>
                </div>
               <div>
               <label htmlFor = 'weight'>Weight</label>
                <input 
                type = 'number'
                value = {weight}
                onChange = {(e)=>{setWeight(e.target.value)}}
                id = 'weight'
                min = '1'
                /><br/>
               </div>
               <div>
               <input type = 'submit'/>
                <button onClick = {reload}>reload</button>
               </div>
            </form>
            <div>
            <h3>Bmi value is : {bmi}</h3>
            {submitted  ? 
              bmi <= 18 ?(
                <h3>Underweight</h3>
                ):bmi >=19 && bmi <= 24? (
                <h3>normal weight</h3> 
                ):bmi >=25 && bmi <= 29 ? (
                <h3>Overweight</h3>
                ): <h3>Obese</h3>
                :
                <p></p>
            } 
            </div> 
        </div>
    )
}