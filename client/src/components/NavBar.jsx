const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1>Calmly</h1>
      <div>
        <ul className="flex gap-3">
          <li>Profile</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
