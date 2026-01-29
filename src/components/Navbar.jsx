import { useState } from 'react';



function Navbar() {
   {
  const [open, setOpen] = useState(false);
  return (
    <nav className="p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Phonkiat R.</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <span className="text-3xl cursor-pointer">✕</span> // Close icon
          ) : (
            <span className="text-3xl cursor-pointer">☰</span> // Hamburger icon
          )}
        </div>

        {/* Menu */}
        <ul
          className={`flex flex-col md:flex-row gap-4 absolute md:static bg-white md:bg-transparent top-16 left-0 w-full md:w-auto p-4 md:p-0 transition-all lg:flex md:flex ${
            open ? "block" : "hidden"
          } md:block`}
                   focus:bg-blue-200 
        >
          <li><a href="#Aboutme" className='hover:text-blue-600  focus:text-blue-600'>Home</a></li>
          <li><a href="#Work" className='hover:text-blue-600  focus:text-blue-600'>Projects</a></li>
          <li><a href="#Award" className='hover:text-blue-600  focus:text-blue-600'>Awards</a></li>

          <li><a href="#Contact" className='hover:text-blue-600  focus:text-blue-600'>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

}
export default Navbar;