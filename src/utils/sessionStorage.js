export function setUserToSS(data) {

  sessionStorage.setItem('ArthoPayUser', JSON.stringify(data));
}

export function getUserFromSS() {

  const storedUser = sessionStorage.getItem('ArthoPayUser');

  if (storedUser) {
    return JSON.parse(storedUser);
  } else {
    return null
  }
}

export function removeUserFromSS() {

  sessionStorage.removeItem('ArthoPayUser');
}