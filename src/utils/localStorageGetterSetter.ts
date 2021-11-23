interface userDataInterface {
  isAuthenticated?: boolean,
  name?: string,
}

export function setUserData(userData: userDataInterface) {
  if (userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  } else {
    localStorage.removeItem('userData');
  }
}

export function getUserData() {
  return localStorage.getItem('userData');
}

export function getUserToken() {
  const user = localStorage.getItem('userData');

  // TODO need some work after api is completed
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
}
