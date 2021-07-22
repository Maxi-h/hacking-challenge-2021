import logo from '../../../images/logo-rimac.svg';

import { ImPhone } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

    return (
        <div className="nav" >
            <div className="nav-child"><img src={logo} alt="logo"/></div>
            <div className="nav-child right"><div className="b"></div><ImPhone className=" {ImPhone} " color={"#6F7DFF"} size={16}> </ImPhone><div className="Contact"></div></div>
        </div>
    );
}

export default NavBar;
