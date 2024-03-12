import BmiList from './BmiList'
import BmiForm from "./BmiForm"
export default function BmiContainers(props){
    return(
        <div>
            
            
           <BmiForm
           addData = {props.addData}
           /><br/>
           <BmiList 
           data = {props.data}
           removeData = {props.removeData}
           />
        </div>
    )
}