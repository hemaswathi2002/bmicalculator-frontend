import axios from "axios"

export default function BmiItem(props){
    const handleRemove = async()=>{
        const confirmation = window.confirm('Are you sure to delete the record?')
        if(confirmation){
            try{
                const response = await axios.delete(`http://localhost:3086/api/users/${props.id}`,{
                    headers: {
                        Authorization : localStorage.getItem('token')
                    }
                })
                const result = response.data
                console.log(result)
                props.removeData(result)
            }
            catch(err){
                console.log(err)
            }
        }
    }
    const handleButton = {
        background : 'white',
        borderRadius :'20px',
        padding : '2px',
        color:'black'
    }
    return(
            <tr key = {props.data._id}>
                <td>{props.data.date}</td>
                <td>{props.data.height}</td>
                <td>{props.data.weight}</td>
                <td>{props.data.bmi}</td>
                <td><button onClick = {handleRemove} style = {handleButton} >remove</button></td>
            </tr>
    )
}