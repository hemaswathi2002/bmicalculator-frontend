import BmiItem from './BmiItem'
export default function BmiList(props){
    return(
        <div>
            <table border = '1'>
                <thead>
                  <tr>
                  <th>Date</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>bmi</th>
                  <th>actions</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((ele)=>{
                    return <BmiItem
                            key = {ele._id}
                            data = {ele}
                            id = {ele._id}
                            removeData = {props.removeData}
                           />
                  })}
                </tbody>
              </table>
            </div>
    )
}