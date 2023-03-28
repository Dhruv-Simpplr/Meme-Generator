import '../style.css'
import hlogo from '../images/hlogo.png'
function Header(){
  return(
    <header className='Header'> 
      <img src={hlogo} alt='' className='Header-logo'/>
      <h4 className='Header-title'>React Meme GEN</h4>
    </header>
  )
}

export default Header