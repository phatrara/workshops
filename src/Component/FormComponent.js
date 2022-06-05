import './FormComponent.css';
import {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


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


    const handleNameChange = (event)=>{
        setFirstName(event.target.value);
        // console.log(firstName);
    }
    const handleLNameChange =(event)=>{
        setLastName(event.target.value);
    }
    const handleNumberIdChange =(event)=>{
        setNumberId(event.target.value.replace(/\D/g, ''));
        // console.log(numberId);
    }
    const handlePhoneChange =(event)=>{
        setPhone(event.target.value.replace(/\D/g, ''));
        console.log(phone);
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
        const Data = {
            id:uuidv4(),
            sex:sex,
            firstName:firstName,
            lastName:lastName,
            numberId:numberId,
            phone:phone,
            address:address,
            note:note,
            // fullName:fullName
        }
        console.log(Data);
        props.onAddItems_d(Data)
        setFirstName('')
        setLastName('')
        setAddress('')
        setNumberId('')
        setNote('')
        setPhone('')
        setFormValid(false)
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

    return(
        <div className='form-content'>
            <div className='form-control'>
                    <h1 className='insert'>ลงทะเบียนนักเรียน</h1>
                </div>
            <form onSubmit={saveData}>
                
                <div className='prename'>
                    <label>คำนำหน้า : </label>
                    <select id="prename" value={sex} onChange={handlesexBoyChange}>
                        <option value="เด็กชาย">เด็กชาย</option>
                        <option value="เด็กหญิง">เด็กหญิง</option>
                        {/* <option value="นาย">นาย</option>
                        <option value="นางสาว">นางสาว</option> */}
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
            </form>
        </div>
    )
 }
export default FormComponent;