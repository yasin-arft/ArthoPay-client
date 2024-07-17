export function setUserToSS(data) {
  const storedUser = getUserFromSS()

  if (storedUser) {
    sessionStorage.removeItem('ArthoPayUser')
    sessionStorage.setItem('ArthoPayUser', JSON.stringify(data));
  } else {
    sessionStorage.setItem('ArthoPayUser', JSON.stringify(data));
  }
}

export function getUserFromSS() {

  const storedUser = sessionStorage.getItem('ArthoPayUser');
  if (storedUser) {
    return JSON.parse(storedUser);
  } else {
    return null
  }
}