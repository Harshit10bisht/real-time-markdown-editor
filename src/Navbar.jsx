import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-cyan-700 py-4 px-24">
      {/* Left side */}
      <div className="text-white font-bold text-xl">
        MARKDOWN HTML EDITOR
      </div>

      {/* Right side */}
      <div>
        <button className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-xl mr-5">
          SIGN UP
        </button>
        <button className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-xl">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;