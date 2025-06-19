function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Phonkiat R.</div>
        <ul className="flex space-x-4">
          <li><a href="#Aboutme" className="text-white hover:text-gray-300">About me</a></li>
          <li><a href="#Work" className="text-white hover:text-gray-300">My works</a></li>
          <li><a href="#Education" className="text-white hover:text-gray-300">Education</a></li>

        </ul>
          <div><a href="#Contact" className="text-white text-lg font-bold hover:text-blue-300">Contact</a></div>


      </div>
    </nav>
  );
}
export default Navbar;