import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import FormComponent from './Component/FormComponent';
import {  ApolloClient,  InMemoryCache,  ApolloProvider,  useQuery,  gql, HttpLink ,from } from "@apollo/client";
import {onError} from '@apollo/client/link/error';
import GetUsers from './Component/GetUsers';
import { Affix, Button, Col, Dropdown, Layout, Menu,Row, Space } from 'antd';
import {Route,Routes,BrowserRouter, Link} from 'react-router-dom';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { DownOutlined, WindowsFilled } from '@ant-design/icons';
import LoginCom from './Component/LoginCom';
import  Register  from './Component/Register';
import { useState } from 'react';
import useToken from './Component/useToken';
import { getKeyThenIncreaseKey } from 'antd/lib/message';
import { AUTH_TOKEN } from './Component/constants';
import { setContext } from '@apollo/client/link/context';


const errorLink = onError(({ graphqlError, networkError})=>{
  if (graphqlError){
    graphqlError.map(({message, location,path})=>{
      alert(`Graphql error ${message} , location error at ${location},  path error at ${path} `);
    });
  }
});
const authLink = setContext((_,{login})=>{
  const token = sessionStorage.getItem(AUTH_TOKEN);
  return{
    login:{
      ...login,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const link = from([
  errorLink,
  new HttpLink({uri:"http://localhost:6969/graphql"}),
])
const client = new ApolloClient({
  link: authLink.concat(HttpLink),
  link:link,
  cache: new InMemoryCache()
});


function App() {
  const {token,setToken} = useToken();
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
      if(!token){
        return <LoginCom setToken={setToken} />
      }
      const handlelogout =()=>{
        sessionStorage.removeItem('token');
        window.location.href = "/"
      }

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
              <Link to='/Login' style={{color:'while'}}>Login</Link>
              </Menu.Item>
              <Menu.Item>
              <Button type='link' onClick={handlelogout}>Log out</Button>
              </Menu.Item>
              <Menu.Item>
                <Link to='/Register' style={{color:'while'}}>Sign up</Link>
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
            <Route path='/' element={<LoginCom/>}></Route>
            <Route path='/insert' element={<FormComponent/>}></Route>
            <Route path='/Data' element={<GetUsers/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
            <Route path='/Login' element={<LoginCom/>}></Route>
          </Routes>
          </div>
        </Content>
        <div id='footer'>
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
        </Footer></div>
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
