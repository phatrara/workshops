import './FormComponent.css';
import {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CREATE_USER_MUTATION } from '../GraphQL/Mutation';
import { useMutation } from '@apollo/client';
import { Button, Form, Input, InputNumber,Select} from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Option } = Select;
const FormComponent =(props)=>{
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [numberId,setNumberId] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [note,setNote] = useState('')
    const [sex,setSex] = useState('เด็กชาย');
    const [formValid,setFormValid] = useState(false);
    // const fullName = sex+firstName+lastName
    const [createUser,{error}] = useMutation(CREATE_USER_MUTATION);

    const handleNameChange = (event)=>{
        setFirstName(event.target.value);
    }
    const handleLNameChange =(event)=>{
        setLastName(event.target.value);
    }
    const handleNumberIdChange =(event)=>{
        setNumberId(event.target.value.replace(/\D/g, ''));
    }
    const handlePhoneChange =(event)=>{
        setPhone(event.target.value.replace(/\D/g, ''));
    }
    const handleNoteChange =(event)=>{
        setNote(event.target.value);
    }
    const handleAddressChange =(e)=>{
        setAddress(e.target.value);
    }
    const handlesexBoyChange =(e)=>{
        setSex(e.target.value);
    }
    const saveData = (event)=>{
        event.preventDefault();
            createUser({
                variables:{
                    Gender:sex,
                    first_name:firstName,
                    last_name:lastName,
                    Address:address,
                    ID_card_number:numberId,
                    Phone_Number:phone,
                    Note:note,
                    
                }
                
            })
            if (error){
                console.log(error);
            }
            console.log(sex);
            // props.onAddItems_d(Data)
            setFirstName('')
            setLastName('')
            setAddress('')
            setNumberId('')
            setNote('')
            setPhone('')
            setSex('เด็กชาย')
            setFormValid(false)

        // const Data = {
            
        //     // id:uuidv4(),
        //     // sex:sex,
        //     // firstName:firstName,
        //     // lastName:lastName,
        //     // numberId:numberId,
        //     // phone:phone,
        //     // address:address,
        //     // note:note,
        //     // fullName:fullName
        // }
        // props.onAddItems_d(Data)
        // setFirstName('')
        // setLastName('')
        // setAddress('')
        // setNumberId('')
        // setNote('')
        // setPhone('')
        // setSex('เด็กชาย')
        // setFormValid(false)
    }

    useEffect(()=>{
        const checkData = firstName.trim().length>0 &&
                            lastName.trim().length>0 &&
                            numberId.trim().length===13 &&
                            phone.trim().length===10 &&
                            address.trim().length>10 &&
                            note.trim().length>0
        if(checkData){
            setFormValid(true);
        }                    
    },[firstName,lastName,numberId,phone,address,note])
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 24,
        },
      };
      /* eslint-disable no-template-curly-in-string */
      
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} มี 10 หลัก',
        },
      };
      /* eslint-enable no-template-curly-in-string */
      
     
    const onFinish = (event)=>{
            // event.preventDefault();
            // console.log(firstName,lastName,sex);
                createUser({
                    variables:{
                        Gender:sex,
                        first_name:firstName,
                        last_name:lastName,
                        Address:address,
                        ID_card_number:numberId,
                        Phone_Number:phone,
                        Note:note,
                        
                    }
                    
                })
                if (error){
                    console.log(error);
                }
                // props.onAddItems_d(Data)
                setFirstName('')
                setLastName('')
                setAddress('')
                setNumberId('')
                setNote('')
                setPhone('')
                setSex('เด็กชาย')
                setFormValid(false)
                window.location.reload();
        };    

    return(
        
        <div className='form-content'>
            <div className='form-control'>
                    <h1 className='insert'>ลงทะเบียนนักเรียน</h1>
                </div>
                <div className='Form-ant'>
                <Form  onFinish={onFinish}  validateMessages={validateMessages} {...layout}>
                    <Form.Item label='คำนำหน้า'>
                    <Select
                    defaultValue={sex}
                    style={{ width: 120,}}
                    onChange={handlesexBoyChange}
                    >
                    <Option value="เด็กชาย">เด็กชาย</Option>
                    <Option value="เด็กหญิง">เด็กหญิง</Option>
                    </Select>
                    </Form.Item>
                    
                    <Form.Item label='ชื่อจริง'>
                       <Input placeholder="FirstName" value={firstName} onChange={handleNameChange}/>
                    </Form.Item>
                    <Form.Item label='นามสกุล'>
                        <Input placeholder='LastName'value={lastName} onChange={handleLNameChange}/>
                    </Form.Item>
                    <Form.Item label='เลขบัตรประชาชน'>
                        <Input placeholder='1409901508678'value={numberId} onChange={handleNumberIdChange}/>
                    </Form.Item>
                    <Form.Item label='ที่อยู่'>
                        <Input placeholder='บ้านเลขที่ 23 หมู่ 3'value={address} onChange={handleAddressChange}/>
                    </Form.Item>
                    <Form.Item label='เบอร์โทร'>
                        <Input placeholder='0804696207'value={phone} onChange={handlePhoneChange}/>
                    </Form.Item>
                    <Form.Item label='หมายเหตุ'>
                        <Input.TextArea value={note} onChange={handleNoteChange}/>
                    </Form.Item>
                    <div className='btn-pos'>
                        <Button type="primary" htmlType='submit' className="btn-sub ">ยืนยัน</Button>
                        <Button type='danger' htmlType='reset' className="btn-re ">ยกเลิก</Button>
                    </div>
                </Form>
                </div>
            
            {/* <form onSubmit={saveData}>
                
                <div className='prename'>
                    <label>คำนำหน้า : </label>
                    <select id="prename" value={sex} onChange={handlesexBoyChange}>
                        <option value="เด็กชาย">เด็กชาย</option>
                        <option value="เด็กหญิง">เด็กหญิง</option>
                        <option value="นาย">นาย</option>
                        <option value="นางสาว">นางสาว</option>
                    </select>
                    <input type="text" placeholder="ชื่อจริง" id="first_name" name="first_name" value={firstName} onChange={handleNameChange}></input>
                    <input type="text" placeholder="นามสกุล" id="last_name" name="last_name" value={lastName} onChange={handleLNameChange}></input>
                </div>
                <div>
                    <label>เลขบัตรประชาชน : </label>
                    <input type="text" placeholder="1409901598678" maxLength={13} value={numberId} onChange={handleNumberIdChange}  ></input>
                </div>
                <div>
                    <label>เบอร์โทร : </label>
                    <input type="text"  placeholder="0804696207" maxLength={10} value={phone} onChange={handlePhoneChange}></input>
                </div>
                <div>
                    <label>ที่อยู่ : </label>
                    <input type="text" placeholder="ที่อยู่" value={address} onChange={handleAddressChange}></input>
                </div>
                <div>
                    <label>หมายเหตุ : </label>
                    <input type="text" placeholder="หมายเหตุ" value={note} onChange={handleNoteChange}></input>
                </div>
                <div className='btn-pos'>
                    <button type="submit" className="btn-sub" disabled={!formValid}>บันทึก</button>
                    <button type="reset" className="btn-re">ยกเลิก</button>
                </div>
            </form> */}
        </div>
    );
 };
export default FormComponent;