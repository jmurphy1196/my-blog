import Link from "next/link";
interface NavbarProps {
  headerTitle?: string;
}

const Navbar: React.FC<NavbarProps> = ({ headerTitle = "Jason's Space" }) => {
  return (
    <nav className='navbar'>
      <div className='logo flex center'>
        <Link href='/'>
          <a>
            <h1>{headerTitle} |</h1>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <img
              className='ml-1 mt-1'
              src='https://img.icons8.com/ios-filled/50/000000/blogger.png'
            />
          </a>
        </Link>
      </div>
      <div className='navbar__left-menu flex center'>
        <div className='navbar__left-menu__links flex'>
          <Link href=''>Home </Link> <span>|</span>
          <Link href=''>Posts </Link> <span>|</span>
          <Link href=''>About </Link> <span>|</span>
        </div>
        <input className='is-rounded' type='text' placeholder='Search...' />
      </div>
    </nav>
  );
};
export default Navbar;
