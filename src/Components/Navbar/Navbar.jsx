
import {SiConsul} from 'react-icons/si'
import { BsPhoneVibrate } from './../../../node_modules/react-icons/bs/index.esm';
import { AiOutlineGlobal } from './../../../node_modules/react-icons/ai/index.esm';


const Navbar = () => {
  return (
    <div className="navBar flex">

      <div className="navBarOne flex">
        <div>
          <SiConsul className='icon'/>
        </div>

        <div className='none flex'>
          <li className='flex' > <BsPhoneVibrate/>  Support</li>
          <li className='flex' > <AiOutlineGlobal/>  Languages</li>
        </div>

        <div className='atb flex'>
            <span>Sign In</span>
            <span>Sign Out</span>
        </div>

      </div>

      
      
    </div>
  )
}

export default Navbar