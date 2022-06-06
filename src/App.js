import './App.css';
import { v4 as uuidv4 } from 'uuid';
import FormComponent from './Component/FormComponent';
// import Item_d from './Component/item';
import { useState } from 'react';
import ReportComponent from './Component/ReportComponent';
import DataTable from 'react-data-table-component';
import {createSelector} from 'reselect'
import customStyles from './Component/TablecustomStyles';




const columns = [
  {
      name: 'คำนำหน้า',
      selector: row => row.sex,
      width:'100px'
  },
  {
      name: 'ชื่อจริง',
      selector: row => row.firstName,
  },  
  {
      name: 'นามสกุล',
      selector: row => row.lastName,
  },
  {
      name: 'หมายเลขบัตรประชาชน',
      selector: row => row.numberId,
      width:'150px'
  },
  {
      name: 'เบอร์โทรศัพท์',
      selector: row => row.phone,
      width:'150px'
  },
  {
      name: 'ที่อยู่',
      selector: row => row.address,
      width:'200px'
  },
  {
      name: 'หมายเหตุ',
      selector: row => row.note,
  }
];


function App() {

 const Data = [
  {id:uuidv4(),sex:"เด็กชาย",firstName:"จักรภัทร",lastName:"เต็มวงษ์",numberId:"1234567890123",phone:"0987768875",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
  {id:uuidv4(),sex:"เด็กหญิง",firstName:"สุดารัตน์",lastName:"น้อยอุ่นแสน",numberId:"4626426615576",phone:"0873346532",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
  {id:uuidv4(),sex:"เด็กชาย",firstName:"พัชร",lastName:"ชินจอหอ",numberId:"1201839472240",phone:"0627659987",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
  {id:uuidv4(),sex:"เด็กชาย",firstName:"พชร",lastName:"แสงอุ่น",numberId:"6389493525984",phone:"0974537531",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
  {id:uuidv4(),sex:"เด็กหญิง",firstName:"สุนารี",lastName:"มณีแก้ว",numberId:"1234567890123",phone:"0987768875",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
  {id:uuidv4(),sex:"เด็กชาย",firstName:"จารุวงศ์",lastName:"ศรีเสมา",numberId:"1234567890123",phone:"0987768875",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"}
]
  
const [data,setData] = useState(Data);

const selectSex = data => data.sex
const selectFirstname = data => data.firstName
const selectLastname = data => data.lastName

const selectFullname = createSelector([selectSex,selectFirstname,selectLastname],(sex,firstName,lastName)=>{
  return `${sex}${firstName} ${lastName}`
})

const onAddNewItems_d = (newData) => {
  setData((prevData)=>{
    return [newData,...prevData]
  })
}
 
  return(
    <div className='container'>
      {/* <FormComponent onAddItems_d = {onAddNewItems_d}/> */}
      <div>
      <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
        />
      </div>
      {/* <ReportComponent data ={data}/> */}
    </div>
  )
}

export default App;
