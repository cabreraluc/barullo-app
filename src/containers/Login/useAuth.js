const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("user-barullo"));

  return user;
};

export default useAuth;
