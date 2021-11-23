import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import RoundedButton from '../../common/button/roundedButton';
import { IAppState as IAppUser } from '../../../reducers/appReducer';
import { IAppState } from '../../../store/store';

import goodWorkLogo from '../../../assets/logo/Ellipse.svg';

import '../../../styles/common/footer.scss';

function Footer() {
  const appData: IAppUser = useSelector((state: IAppState) => state.appState);

  const getTheClassName = () => {
    if (appData?.user?.isAuthenticated) {
      return 'gutter-row footerBarMain__textWrapper';
    } else {
      return 'gutter-row footerBarMain__centerTextWrapper';
    }
  };

  return (
    <div className="containerFooterNavbar" >
      <div className="footerNavbar">
      <div className="footerNavbar__Left">
        <Link to="/">
          <img className='footer-logo' src={goodWorkLogo} title='Good Work' alt="Good Work Logo"/>
        </Link>
      </div>
      <div className={`${appData?.user?.isAuthenticated ? 'footerBarMainLoggedIn' : '' } footerBarMain footerNavbar`}>
        <Row gutter={[0, { xs: 8, sm: 16, md: 24, lg: 32 }]} className='footerBarMain__mainWrapper'>

          <Col className={getTheClassName()}>
            <Link to='/discover'>
              <span className="topNavbarNavItemText topNavbarNavItemTextActive">Discover</span>
            </Link>
          </Col>
          <Col className={getTheClassName()}>
            <span className="topNavbarNavItemText">Resources</span>
          </Col>
          <Col className={getTheClassName()}>
            <span className="topNavbarNavItemText">Pricing</span>
          </Col>
          <Col className={getTheClassName()}>
            <span className="topNavbarNavItemText">Terms</span>
          </Col>
          <Col className={getTheClassName()}>
            <span className="topNavbarNavItemText">Privacy</span>
          </Col>
          <Col className={getTheClassName()}>
            <span className="topNavbarNavItemText">Discord</span>
          </Col>
        </Row>
      </div>

        {!appData?.user?.isAuthenticated ?
        <div>
          </div>
          :
          <div className="footerNavbar__Right">
          <RoundedButton btnname='Get Started'/>
        </div>
          
        }
      </div>
    </div>
  );
}

export default Footer;
