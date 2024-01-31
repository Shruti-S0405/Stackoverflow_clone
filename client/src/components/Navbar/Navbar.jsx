import React, { useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import bars from '../../assets/bars.svg';
import Avatar from '../../components/Avatar/Avatar';
import { setCurrentUser } from '../../actions/currentUser';
import './Navbar.css';

const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);

  const handleLogout = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
    navigate('/Auth');
    dispatch(setCurrentUser(null));
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  }, [User?.token, handleLogout, dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
          <Link to="/" className="nav-items nav-logo">
            <img src={logo} alt="logo" width={22} />
            <span style={{ fontSize: '20px', fontWeight: '300', justifyContent:'center'}}> stack</span>
            <span style={{ fontSize: '20px', fontWeight: 'bolder',justifyContent:'center' }}> overflow</span>
          </Link>
          <Link to="/" className="nav-items nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-items nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-items nav-btn res-nav">
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="navbar-2">
          {User === null ? (
            <Link to="/Auth" className="nav-items nav-links cmn-btn">
              Log in
            </Link>
          ) : (
            <>
              <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50px" color="white">
                <Link to={`/Users/${User?.result?._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-items nav-links" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
