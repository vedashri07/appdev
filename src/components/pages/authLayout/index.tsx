import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { setUserData } from '../../../utils/localStorageGetterSetter';
import { setUserDataAction } from '../../../actions/app/appAction';

import { getUserData } from '../../../utils/localStorageGetterSetter';

import './style.scss';

interface authLayout {
  children: any,
}

const AuthLayout = ({ children }: authLayout) => {

  const dispatch = useDispatch();

  useEffect(() => {
    if (getUserData()) {
      const userData = JSON.parse(getUserData() as string);
      setUserData(userData);
      dispatch(setUserDataAction(userData));
    }
  }, []);

  return (
    <div className='authLayout-wrapper'>
      {children}
    </div>
  );
};

export default AuthLayout;
