import "./../navbar/style.css";

import { NavLink } from "react-router-dom";
const NavLinks = () => {

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return ( 
    <ul className="nav-list">
      <li><NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink></li>                                                                                          
      
      <li><NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Projects</NavLink></li>                                                        

      <li><NavLink to="/skills" className={({isActive}) => isActive ? activeLink : normalLink}>Skills</NavLink></li>

      <li><NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>

    </ul> );
}
 
export default NavLinks;