import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <NavLink className="mr-4 text-white" to="/dashboard">Dashboard</NavLink>
            <NavLink className="mr-4 text-white" to="/activities">Activities</NavLink>
            <NavLink className="mr-4 text-white" to="/pace-converter">Pacing</NavLink>
            <NavLink className="mr-4 text-white" to="/profile">Profile</NavLink>
        </>
    );
};

function Nav() {
    return (
        <nav>
            <div className="flex flex-[1] items-center justify-end">
                <NavLinks />
            </div>
        </nav>
    )
  }
  
  export default Nav;
  