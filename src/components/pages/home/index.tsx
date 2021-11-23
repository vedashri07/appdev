import React from 'react';
import {Card, Row, Col } from 'antd'
import RoundedButton from '../../common/button/roundedButton';
import WhiteButton from '../../common/button/whiteButton';
import nurse from '../../../assets/images/nurse.svg';
import logoMid from '../../../assets/images/logo-mid.png';
import Communication from '../../../assets/images/Communication.svg';
import Rewards from '../../../assets/images/Rewards.svg';
import Education from '../../../assets/images/Education.svg';
import whiteLogo from '../../../assets/images/whiteLogo.svg';
import '../../../styles/page/home.scss';

function Home() {
   return (
     <div  className="homeContainer">
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      <Col span={12} className="gutter-row">
        <Card  bordered={false} className="cardColor">
          <div className="desktopText">
          <h2>What if doing good work was easy? </h2>
          <p>GoodWork Army is an on-demand real-time network of volunteers working around-the-clock.</p>
          <p><RoundedButton btnname='Clock-in!!'></RoundedButton></p>
          </div>
          <div className="mobileText">
          <h2>Change the way good work is valued </h2>
          <p>Let your most passionate fans support your good work via monthly membership.</p>
          <p><RoundedButton btnname='Get Started'></RoundedButton></p>
          </div>
        </Card>
      </Col>
      <Col span={12} className="gutter-row">
        <Card bordered={false} className="nurseCard">
            <img src={nurse} />
            <div className="nurseTop"/>
        </Card>
      </Col>
    </Row>
    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
    <Col span={24} className="gutter-row">
        <Card bordered={false} className="videoImage"> </Card>
      </Col>
    </Row>
  
    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
    <Col span={24} className="gutter-row">
       <Card bordered={false}>
        <h1>People on a mission to make the world better for all  <img src={logoMid} /> </h1>
      </Card>
    </Col>
    </Row>

     <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      <Col span={12} className="gutter-row">
        <Card  bordered={false} className="cardColor">
        <img src={Communication} className="imagePad"/>
        <div className="cardPanelMrg">
        <h3>Support people actually doing good work. </h3>
        <p>
           Leo sed scelerisque massa neque consequat tincidunt.
           Aliquet aliquet blandit gravida aliquet non sed proin id.
           Blandit ultrices elit, magna et nulla et consectetur.
        </p>
       </div>
        </Card>
      </Col>
      <Col span={12} className="gutter-row">
        <Card bordered={false} className="cardColor rewardHeight">
          <div className="mobileTopImage"/>
        <img src={Rewards} className="imagePad reward" />
        <div className="panelMrg">
        <h3>Become a part of the change! </h3>
        <p>
        Leo sed scelerisque massa neque consequat tincidunt. 
        Aliquet aliquet blandit gravida aliquet non sed proin id.
        
        </p>
        </div>
        </Card>
      </Col>
    </Row>
  
   <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      <Col span={12} className="gutter-row">
        <Card  bordered={false} className="cardColor helpPanelHeight">
        <img src={Education} className="imagePad"/>
        <h3>Helping others is easier than you think</h3>
        <p>
          There are many ways to support authors and be part of a big change. Your support can change someone's life and help make the world a better place.
        </p>
        </Card>
      </Col>
      <Col span={12} className="gutter-row">
        <Card bordered={false} className="cardColor doctorImage" />
      </Col>
    </Row>
     <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      <Col span={24} className="gutter-row">
        <Card  bordered={false} className="bottomCard">
        <h2>Change the way good work is valued <img src={whiteLogo}/></h2>
        <p><WhiteButton  btnname='Get Started' ></WhiteButton></p>
      </Card>
      </Col>
    </Row>
   </div>

  );
}

export default Home;
