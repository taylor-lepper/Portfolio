function Nav() {
  return (
    <>
     <nav className="border-b-8 border-green-600 bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 h-24 px-4">
          <div className="flex">
            <h1 className="px-4 pt-6 text-4xl text-gray-200">Taylor Lepper</h1>
            <div className="ml-auto mt-10">
            <a href="/" className="pt-6 mr-12 text-3xl text-gray-200">
            Home🏠
            </a>
            <a href="/about" className="pt-6 mr-12 text-3xl text-gray-200">
            About❓
            </a>
            <a href="/projects" className="pt-6 mr-12 text-3xl text-gray-200">
            Projects💻
            </a>
            <a href="/contact" className="pt-6 mr-6 text-3xl text-gray-200">
              Contact Me📞
            </a>
            </div>
          
          </div>
        </nav>
    </>
  );
}

export default Nav;