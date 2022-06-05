import Item_d from "./item"
import './ReportComponent.css';

const ReportComponent =(props)=>{
    
    const {data} = props
    return(
        <div className="container">
        <h3 className="p-3 text-center">React - Display a list of items</h3>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ชื่อ - นามสกุล</th>
                    <th>หมายเลขบัตรประชาชน</th>
                    <th>เบอร์โทร</th>
                    <th>ที่อยู่</th>
                    <th>หมายเหตุ</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(user =>
                    <tr key={user.id}>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.numberId}</td>
                        <td>{user.address}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>



        // <div>
        //     <ul className="item-list">
        //         {data.map((e)=>{
        //             return <Item_d {...e} key={e.id}/>
        //         })}
        //     </ul>
        // </div>
    )
}

export default ReportComponent;