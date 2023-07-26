import React, { Suspense, useEffect } from 'react';
import Home from './components/home/Home';
import Login from './components/auth/login/Login';
import Register from './components/auth/Register';
import Loader from './components/layout/header/Loader';
import Forgetpassword from './components/auth/Forgetpassword';
import './app.css';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getmyprofile } from './redux/actions/userAction';
import { ProtectedRoute } from 'protected-route-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Profiler } from 'react';
const Header = React.lazy(() => import('./components/layout/header/Header'));
// React.lazy(()=>import())
const Courses = React.lazy(() => import('./components/courses/Courses'));
const Footer = React.lazy(() => import('./components/layout/footer/Footer'));

const Resetpassword = React.lazy(() =>
  import('./components/auth/Resetpassword')
);
const Contact = React.lazy(() => import('./components/contact/Contact'));
const Request = React.lazy(() => import('./components/contact/Request'));

const Subscribe = React.lazy(() => import('./components/payments/Subscribe'));
const Successpayment = React.lazy(() =>
  import('./components/payments/Successpayment')
);
const Failedpayment = React.lazy(() =>
  import('./components/payments/Failedpayment')
);
const Notfound = React.lazy(() => import('./components/layout/Notfound'));
const Lectures = React.lazy(() => import('./components/courses/Lectures'));

const Profile = React.lazy(() => import('./components/profile/Profile'));
const Changepassword = React.lazy(() =>
  import('./components/profile/Changepassword')
);
const Updatepassword = React.lazy(() =>
  import('./components/profile/Updatepassword')
);

const Createcourse = React.lazy(() =>
  import('./components/admin/createcourse/Createcourse')
);
const Admincourse = React.lazy(() =>
  import('./components/admin/admincourse/Admincourse')
);
const Users = React.lazy(() => import('./components/admin/users/Users'));

// window.addEventListener("contextmenu",(e)=>{
//   e.preventDefault()
// })
function App() {
  const { isauthenticate, user, error, message, loading } = useSelector(
    state => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearerror' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearmessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getmyprofile());
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<div />}>
        {
          <>
            {/* <Suspense fallback={<div/>}> */}
            <Header isauthenticate={isauthenticate} user={user} />
            {/* </Suspense> */}

            <Routes>
              <Route path="/" element={loading ? <Loader /> : <Home  />}></Route>

              <Route
                path="/profile"
                element={
                  <Suspense fallback={<div />}>
                    {' '}
                    <ProtectedRoute isAuthenticated={isauthenticate}>
                      <Profile user={user} />
                    </ProtectedRoute>
                  </Suspense>
                }
              ></Route>

              <Route path="/courses" element={<Courses />} />
              <Route
                path="/course/:id"
                element={
                  <ProtectedRoute isAuthenticated={isauthenticate}>
                    <Lectures user={user} />
                  </ProtectedRoute>
                }
              />
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/requestcourse" element={<Request />}></Route>

              {/* inside this protectedRoute , isAuthenticated
    means if isauthenticte = false then redirect to / route
    if we didnt give redirect then default redirect is /login
    */}
              <Route
                path="/login"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isauthenticate}
                    redirect="/"
                  >
                    <Login />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/signup"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isauthenticate}
                    redirect="/"
                  >
                    <Register />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/forgetpassword"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isauthenticate}
                    redirect="/"
                  >
                    <Forgetpassword />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/reset/:token"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isauthenticate}
                    redirect="/"
                  >
                    <Resetpassword />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/subscribe"
                element={
                  <ProtectedRoute isAuthenticated={isauthenticate}>
                    <Subscribe user={user} />
                  </ProtectedRoute>
                }
              />
              <Route path="/paymentsuccess" element={<Successpayment />} />
              <Route path="/failpay" element={<Failedpayment />} />
              <Route path="/*" element={<Notfound />} />

              {/* 
    this portected routes means if isauthenticate = true
    then you can access this routes
    basically if you are log in then...
 */}
              <Route
                path="/changepassword"
                element={
                  <ProtectedRoute isAuthenticated={isauthenticate}>
                    <Changepassword />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/updateprofile"
                element={
                  <ProtectedRoute isAuthenticated={isauthenticate}>
                    <Updatepassword user={user} />
                  </ProtectedRoute>
                }
              />

              {/* ADMIN ROUTES */}

              {/* <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute
                    isAuthenticated={isauthenticate}
                    adminRoute={true}
                    isAdmin={(user && user.role === 'admin') || 'testadmin'}
                  >
                    <Dashboard />
                  </ProtectedRoute>
                }
              /> */}
              <Route
                path="/admin/createcourse"
                element={
                  <ProtectedRoute
                    isAuthenticated={isauthenticate}
                    adminRoute={true}
                    isAdmin={(user && user.role === 'admin') || 'testadmin'}
                  >
                    <Createcourse />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/admincourses"
                element={
                  <ProtectedRoute
                    isAuthenticated={isauthenticate}
                    adminRoute={true}
                    isAdmin={(user && user.role === 'admin') || 'testadmin'}
                  >
                    <Admincourse />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <ProtectedRoute
                    isAuthenticated={isauthenticate}
                    adminRoute={true}
                    isAdmin={(user && user.role === 'admin') || 'testadmin'}
                  >
                    <Users />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
            <Toaster />
          </>
        }
      </Suspense>
    </Router>
  );
}

export default App;
