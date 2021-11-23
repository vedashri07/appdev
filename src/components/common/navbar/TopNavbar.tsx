import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Dropdown, Menu } from 'antd';

import RoundedButton from '../../common/button/roundedButton';
import { IAppState } from '../../../reducers/appReducer';
import { setUserData } from '../../../utils/localStorageGetterSetter'
import { setUserDataAction } from '../../../actions/app/appAction';

import '../../../styles/common/navbar.scss';

import goodWorkLogo from '../../../assets/logo/Ellipse.svg';
import addButton from '../../../assets/images/addButton.svg';
import userImage from '../../../assets/images/user.png'

function TopNavbar() {
  const appData: IAppState = useSelector((state: any) => state.appState);
  const [page, setPage] = useState(window.location.pathname);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOutClick = () => {
    // @ts-ignore
    setUserData(null);
    dispatch(setUserDataAction(null));
    history.push('/login');
  };

  const userDropDownItem = (
    <Menu>
      <Menu.Item onClick={handleLogOutClick}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="containerTopNavbar">
      <div className="topNavbar">
        <div className="topNavbar__Left">
          <Link to="/">
            <img className='goodWork-logo' src={goodWorkLogo} title='Good Work' />
          </Link>
        </div>
      {console.log(appData)}
        {(page === '/profilenew') ?
        
        <div className="topNavbarMain topNavbar__Middle">
        <Row gutter={[0, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

          <Col className="topNavbarMain__textWrapper">
            <Link to='/discover'>
              <span className="topNavbarNavItemText topNavbarNavItemTextActive">Discover</span>
            </Link>
          </Col>
          <Col className="topNavbarMain__textWrapper">
            <span className="topNavbarNavItemText">Dashboard</span>
          </Col>
          <Col className="topNavbarMain__textWrapper">
            <span className="topNavbarNavItemText">Funds</span>
          </Col>
          <Col className="topNavbarMain__textWrapper">
            <span className="topNavbarNavItemText">Analytics</span>
          </Col>
        </Row>
      </div>
        
        
        
        :
          <div className="topNavbarMain topNavbar__Middle">
            <Row gutter={[0, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

              <Col className="topNavbarMain__textWrapper">
                <Link to='/discover'>
                  <span className="topNavbarNavItemText topNavbarNavItemTextActive">Discover</span>
                </Link>
              </Col>
              <Col className="topNavbarMain__textWrapper">
                <span className="topNavbarNavItemText">The Pledge</span>
              </Col>
              <Col className="topNavbarMain__textWrapper">
                <span className="topNavbarNavItemText">How it works</span>
              </Col>
            </Row>
          </div>}


        <div className="topNavbar__Right">
          {appData?.user?.isAuthenticated ?
            <>
              <img className='add-image' src={addButton} title='add' alt="user-image-button" />
              <Dropdown overlay={userDropDownItem} placement="bottomCenter">
                <img className='user-image' src={userImage} title={'user'} alt="user-image" />
              </Dropdown>
            </>
            : <RoundedButton btnname='Get Started' />
          }
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
