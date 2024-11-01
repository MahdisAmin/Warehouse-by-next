function setCookie(name, value) {
  const maxAge = 30 * 24 * 60 * 60;
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; domain=${window.location.hostname}`;
  console.log(`Cookie ${name} set with value: ${value}`);
}

function getCookie(name) {
  const value = `; ${document?.cookie}`;
  const parts = value?.split(`; ${name}=`);
  if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
  console.log(`Cookie ${name} deleted.`);
}
export { setCookie, getCookie, deleteCookie };
