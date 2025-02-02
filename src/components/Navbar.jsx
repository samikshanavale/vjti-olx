import React from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogout = () =>{
    localStorage.removeItem("username");
    navigate('/login');
  }

  return (
    <nav className="bg-white text-white">
      <div className="mycontainer flex justify-between items-center h-10 px-1 py-12">

        {/* Logo and Search Bar */}
        <div className="flex items-center gap-4">
          {/* Main Logo */}
          <Link to="/">
          <img src="icons/logo.png" alt="logo" width={130} className="mx-2" /></Link>
          
          {/* Search Bar with Icon */}
          <div className="flex items-center border border-yellow-300 rounded w-[1200px] h-[40px] bg-white">
            {/* Icon */}
            
            <lord-icon
              src="https://cdn.lordicon.com/wjyqkiew.json"
              trigger="hover"
              colors="primary:#121331,secondary:#e8e230"
              style={{ width: "30px", height: "30px", margin: "0 8px" }}
            ></lord-icon>

            {/* Input */}
            <input 
              placeholder="Search items ..." 
              className="w-full h-full text-black px-2 py-1 outline-none" 
              type="text" 
            />
          </div>

          {/* Account Button */}
          <button
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 flex items-center gap-2"
            onClick={() => navigate('/profile')} // Navigate to the profile page
          >
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              colors="primary:#000000,secondary:#000000"
              style={{ width: '20px', height: '20px' }}
            ></lord-icon>
            Account
          </button>
          
          <button
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 flex items-center gap-2"
            onClick={handleLogout} // Navigate to the profile page
          >
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              colors="primary:#000000,secondary:#000000"
              style={{ width: '20px', height: '20px' }}
            ></lord-icon>
             Logout 
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
