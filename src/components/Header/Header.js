import './Header.scss'
import logo from '../../assets/header_logo.png';

const Header = () => {


  return(
    <div class='header'>
      <img src={logo} alt='summit logo'></img>
      <div class='text'>
        <h1>RainFocus Summit</h1>
        <div class='subtext'>
          <p>December 15th</p>
          <p>Lehi, Utah</p>
        </div>
      </div>
    </div>
    )
}

export default Header;