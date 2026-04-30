

export default function Header() {

  return (
    <header className="w-full h-[100px] fixed bg-accent flex items-center px-6 text-white">
      
      {/* Left - Logo */}
      <div className="flex-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrWparqjwiRqDDUL0bpSfatK1zGaYYIZbElDc3DEUP8A&s"
          alt="logo"
          className="h-16"
        />
      </div>

      {/* Center - Nav */}
      <nav className="flex justify-center">
        <ul className="flex gap-10">
          <li className="cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600  p-2 rounded-md hover:text-white hover:bg-none hover:border-2 hover:border-blue-600">Home</li>
          <li className="cursor-pointer bg-gradient-to-r from-blue-600 to-violet-600  p-2 rounded-md hover:text-white hover:bg-none hover:border-2 hover:border-blue-600">Contact</li>
        </ul>
      </nav>

      {/* Right - Empty (for balance) */}
      <div className="flex-1"></div>

    </header>
  );
}