const Nav = () => {
  return (
    <nav className="bg-gray-50 shadow-blue-600 py-5">
      <ul className="flex items-center justify-between container mx-auto">
        <div>
          <li className="uppercase cursor-pointer">Logo</li>
        </div>
        <div className="flex items-center gap-x-8">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
          <li>
            <button className="bg-green-400 text-white px-8 py-2 rounded">Get A Meeting</button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
