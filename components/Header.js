import Link from 'next/link';

const Header = () => {
    return <header id="header">
    <img src='logo.svg' className='logo' alt='Amazon Prime Video Logo' />
    <div className='header-links-container'>
      <div className='header-language-link-container'>
        <img src='globe.svg' className='globe' alt='Globe' />
        <Link href='#'>EN</Link>
      </div>

      <Link href='#'>Sign In</Link>
    </div>
  </header>
}
export default Header;