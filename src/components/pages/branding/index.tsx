import React from 'react';
import { Col, Card, Row } from 'antd'
import '../../../styles/page/branding.scss';
import whiteLogo from '../../../assets/images/logo-mid.png';
import WhiteButton from '../../common/button/whiteButton';
function Branding(props: any) {
   return (
     <div className="BrandingContainer">
     <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
     <Col  span={24}>
        <Card bordered={false} className="brandCard">
        <div className="simile"> <img src={whiteLogo}/> </div>  
        <h2>Ready to do Good Work?</h2>
        </Card>
      </Col>
    
    </Row>
     </div>

  );
}

export default Branding;
