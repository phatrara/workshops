import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import FormComponent from './Component/FormComponent';
// import Item_d from './Component/item';
// import { useState } from 'react';
// import ReportComponent from './Component/ReportComponent';
// import DataTable from 'react-data-table-component';
// import {createSelector} from 'reselect'
// import customStyles from './Component/TablecustomStyles';
import {  ApolloClient,  InMemoryCache,  ApolloProvider,  useQuery,  gql, HttpLink ,from } from "@apollo/client";
import {onError} from '@apollo/client/link/error';
// import CreatePost from './Component/createPosts';
import GetUsers from './Component/GetUsers';
import { Affix, Button, Col, Dropdown, Layout, Menu,Row, Space } from 'antd';
import {Route,Routes,BrowserRouter, Link} from 'react-router-dom';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { DownOutlined } from '@ant-design/icons';
import MainCom from './Component/MainCom';


const errorLink = onError(({ graphqlError, networkError})=>{
  if (graphqlError){
    graphqlError.map(({message, location,path})=>{
      alert(`Graphql error ${message} , location error at ${location},  path error at ${path} `);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({uri:"http://localhost:6969/graphql"}),
])
const client = new ApolloClient({
  link:link,
  cache: new InMemoryCache()
});



// function POST_QUERY() {
  
// const QUERY = gql`
//       {
//         posts{
//           id
//           title
//           body
//         }
//       }
// `;


//   const { loading, error, data } = useQuery(QUERY);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :</p>;

//   return data.posts.map(({ Gender,first_name,last_name,Address,ID_Card_Number,Phone_Number,Note,id }) => (
//     <div key={id}>
//       <DataTable
//             columns={columns}
//             data={data}
//             customStyles={customStyles}
//         />
//     </div>
//   ));
// }
// client
//   .query({
//     query: testQuery
//   })  .then(result => console.log(result));

// const columns = [
//   {
//       name: 'คำนำหน้า',
//       selector: row => row.Gender,
//       width:'100px'
//   },
//   {
//       name: 'ชื่อจริง',
//       selector: row => row.first_name,
//   },  
//   {
//       name: 'นามสกุล',
//       selector: row => row.last_name,
//   },
//   {
//       name: 'หมายเลขบัตรประชาชน',
//       selector: row => row.ID_Card_Number,
//       width:'150px'
//   },
//   {
//       name: 'เบอร์โทรศัพท์',
//       selector: row => row.Phone_Number,
//       width:'150px'
//   },
//   {
//       name: 'ที่อยู่',
//       selector: row => row.Address,
//       width:'200px'
//   },
//   {
//       name: 'หมายเหตุ',
//       selector: row => row.Note,
//   }
// ];


function App() {

//  const Data = [
//   {id:uuidv4(),sex:"เด็กชาย",firstName:"จักรภัทร",lastName:"เต็มวงษ์",numberId:"1234567890123",phone:"0987768875",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
//   {id:uuidv4(),sex:"เด็กหญิง",firstName:"สุดารัตน์",lastName:"น้อยอุ่นแสน",numberId:"4626426615576",phone:"0873346532",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
//   {id:uuidv4(),sex:"เด็กชาย",firstName:"พัชร",lastName:"ชินจอหอ",numberId:"1201839472240",phone:"0627659987",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
//   {id:uuidv4(),sex:"เด็กชาย",firstName:"พชร",lastName:"แสงอุ่น",numberId:"6389493525984",phone:"0974537531",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
//   {id:uuidv4(),sex:"เด็กหญิง",firstName:"สุนารี",lastName:"มณีแก้ว",numberId:"1234567890123",phone:"0987768875",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"},
//   {id:uuidv4(),sex:"เด็กชาย",firstName:"จารุวงศ์",lastName:"ศรีเสมา",numberId:"1234567890123",phone:"0987768875",address:"28 ซอยจันทร์ 40 ",note:"ไม่มี"}
// ]
  
// const [data,setData] = useState(Data);

// const selectSex = data => data.sex
// const selectFirstname = data => data.firstName
// const selectLastname = data => data.lastName

// const selectFullname = createSelector([selectSex,selectFirstname,selectLastname],(sex,firstName,lastName)=>{
//   return `${sex}${firstName} ${lastName}`
// })

// const onAddNewItems_d = (newData) => {
//   setData((prevData)=>{
//     return [...prevData,newData]
//   })
// }
      const menunav = (
        <Menu>
          <Link to='/insert'>
          <Menu.Item>
            ลงทะเบียนนักเรียน
          </Menu.Item>
          </Link>
          <Link to='/Data'>
          <Menu.Item>
            ข้อมูลนักเรียน
          </Menu.Item>
          </Link>
        </Menu>
        
      )
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Layout>
        <Affix offsetTop={0}>
        <Header style={{width:'100%',padding:'0'}}>
          <Row align='middle'>
          <Col span={4}>
          <Menu mode='horizontal' style={{backgroundColor:'#2f2f2f',borderWidth:'0'}}>
            <Menu.Item>
              <Link to='/' style={{color:'white'}}>Home</Link>
            </Menu.Item>
            </Menu>
          </Col>
          <Col span={20}>
            <Menu mode='horizontal' style={{justifyContent:'right',backgroundColor:'#2f2f2f',borderWidth:'0',color:'white'}}>
              <Dropdown overlay={menunav} >
                <a onClick={(e)=>e.preventDefault()}>
                    ข้อมูลนักเรียน
                    <DownOutlined/>
                </a>
              </Dropdown>
              <Menu.Item>
                ติดต่อเรา
              </Menu.Item>
              <Menu.Item>
                Login
              </Menu.Item>
              <Menu.Item>
                Sign Up
              </Menu.Item>
          </Menu>
          </Col>
          </Row>
          {/* <div className='btn-test'>
            <Button  className='btn-main' type='submit' href='/insert'>ลงทะเบียน</Button>
            <Button  className='btn-sec' type='submit' href='/Data'>ข้อมูลนักเรียน</Button>
          </div> */}
        </Header>
        </Affix>
        <Content>
          <div className='container'>
          <Routes>  
            {/* <Route path='/' element={App}></Route> */}
            <Route path='/' element={<MainCom/>}></Route>
            <Route path='/insert' element={<FormComponent/>}></Route>
            <Route path='/Data' element={<GetUsers/>}></Route>
          </Routes>
          </div>
        </Content>
        <Footer style={{background:'#4f4f4f',color:'white',padding:'20px'}}>
          <Row>
            <Col span={12}>
              <p style={{display:'flex',alignItems:'center'}}>ติดต่อ : 28 ซอยจันทร์ 32 แยก 2 แขวงทุ่งวัดดอน เขตสาทร กรุงเทพมหานคร 10120 </p>
              <p style={{display:'flex',alignItems:'center'}}>โทร : 080 - 4696207</p>
            </Col>
            <Col span={12} style={{justifyContent:'end',display:'flex'}}>
                <p style={{display:'flex',alignItems:'center'}}>Power by MoMarD</p>
            </Col>
          </Row>
        </Footer>
      </Layout>
      
    
      {/* <FormComponent 
      // onAddItems_d = {onAddNewItems_d}
      /> */}
     
      {/* <DataTable
            columns={columns}
            // data={data}
            customStyles={customStyles}
        /> */}
      
      {/* <ReportComponent data ={data}/> */}
    
    {/* <POST_QUERY/> */}

    {/* <GetUsers/> */}
    </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
