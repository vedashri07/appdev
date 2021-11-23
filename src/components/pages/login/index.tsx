import React from 'react';
import { Card, Row, Col, Form, Input } from 'antd'
import { useDispatch } from 'react-redux';

import RoundedButton from '../../common/button/roundedButton';

import { setUserData } from '../../../utils/localStorageGetterSetter'
import { setUserDataAction } from '../../../actions/app/appAction';

import Communication from '../../../assets/images/login-Communication.svg';
import Slider from '../../../assets/images/Slider.svg';
import Google from '../../../assets/images/Google.svg';

import '../../../styles/page/login.scss';

function Login(props: any) {

  const dispatch = useDispatch();

  const onFinish = () => {
    const userData = { isAuthenticated: true, name: 'User Name' };
    setUserData(userData);
    dispatch(setUserDataAction(userData));
    props.history.push('/dashboard');
  };
   return (
     <div className="loginContainer">
    
     <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      <Col className="gutter-row" span={12}>
        <Card  bordered={false} className="cardColor">
        <h2>Log In </h2>
        <p>Let your most passionate fans support your good work via monthly membership.</p>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
 <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
        className="formInput"
        //  prefix={<UserOutlined className="site-form-item-icon" />}
         placeholder="EMAIL" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          // prefix={<LockOutlined className="site-form-item-icon" />}
          className="formInput"
          type="password"
          placeholder="PASSWORD"
        />
      </Form.Item>
        <p><RoundedButton btntype="loginBtn" btnname='Log In'></RoundedButton>  <img src={Google} className="googleImage"/></p>
        </Form>
        </Card>
      </Col>
      <Col className="gutter-row" span={12}>
        <Card bordered={false} className="communicationCard">
        <img src={Communication} className="imagePad"/>
        <h2>Support people actually doing good work. </h2>
        <p>
           Leo sed scelerisque massa neque consequat tincidunt.
           Aliquet aliquet blandit gravida aliquet non sed proin id.
           Blandit ultrices elit, magna et nulla et consectetur.
        </p>
        <img src={Slider} className="imagePadTop"/>
        
        </Card>
      </Col>
    </Row>

  
   
     </div>

  );
}

export default Login;
