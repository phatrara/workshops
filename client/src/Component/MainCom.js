import { Button, Col, Form, Input, Row } from "antd";

function MainCom() {
    return(
        <>
        <Form>
            <Row>
                <Col span={6}>
                    <img src="../img/login.png"></img>
                </Col>
                <Col span={18}>
                    <Row>
                        <Col span={6} style={{display:'flex',justifyContent:'flex-end'}}>
                            <Form.Item label='Username' name='Username'  rules={[{required:true, message:'กรุณากรอก Username!'}]}></Form.Item>
                        </Col>
                        <Col span={18}>
                            <Input style={{width:'100%'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} style={{display:'flex',justifyContent:'flex-end'}}>
                            <Form.Item label='Password' name='Password' rules={[{required:true, message:'กรุณากรอก Password!'}]}></Form.Item>
                        </Col>
                        <Col span={18}>
                            <Input.Password style={{justifyContent:'flex-end'}}/>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
            <Row>
                <Col span={12} style={{justifyContent:'center',display:'flex'}}>
                    <Button type="primary">Apply</Button>
                </Col>
                <Col span={12} style={{justifyContent:'center',display:'flex'}}>
                    <Button type="danger">Cancel</Button>
                </Col>
            </Row>
        </Form>
        </>
    )
}

export default MainCom;