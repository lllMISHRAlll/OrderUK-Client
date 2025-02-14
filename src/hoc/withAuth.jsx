import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent, isProtected = true) => {
  return (props) => {
    const token = localStorage.getItem("token");

    if (isProtected && !token) {
      // If route requires authentication but user is NOT logged in, redirect to login
      return <Navigate to="/login" replace />;
    }

    if (!isProtected && token) {
      //tohandle login and singup page
      // If route does NOT require authentication but user IS logged in, redirect to home
      return <Navigate to="/" replace />;
    }

    // Allow normal access
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
