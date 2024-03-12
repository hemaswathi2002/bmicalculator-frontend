import {useState} from 'react'
import axios from 'axios'
import './LoginForm.css'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
export default function LoginForm(props){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const formData = {
            email:email,
            password:password
        }
        try{
            const response = await axios.post('http://localhost:3086/api/login',formData)
            const token = response.data.token
            localStorage.setItem('token',token)
            console.log(token)
            props.loginSuccess()
        }
        catch(err){}
    }
return(
    <div className='wrapper'>
        <form onSubmit = {handleSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
        <input type = 'email'
        placeholder='email'
        value = {email}
        onChange = {(e)=>{setEmail(e.target.value)}}
        id = 'email'
        name = 'email'
        />
        <MdEmail className = 'icon'/>
        </div>
        <div className='input-box'>
        <input type = 'text'
        placeholder='password'
        value = {password}
        onChange = {(e)=>{setPassword(e.target.value)}}
        id = 'password'
        name = 'password'
        />
        <RiLockPasswordFill className='icon' />
        <br/>
        </div>
        <div className='submit'>
        <input type = 'submit'/>
        </div>
        </form>
        
    </div>
)
}
