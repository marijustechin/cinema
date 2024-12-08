import { useState } from 'react';
import logo from '/assets/logo.svg';
import { navLinks } from '../../helpers/contants';
import avatar from '/assets/image-avatar.png';
import { Link, NavLink } from 'react-router';
import { NavIcon } from '../shared/NavIcon';
import { useUserContext } from '../../service/UserContext';

export const Navbar = () => {
  const user = useUserContext();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const userLogOut = () => {
    user.setLoggedOut();
  };

  return (
    <nav className="w-16 h-[90%] rounded-lg bg-darkBlue p-2">
      <div className="h-full flex flex-col items-center justify-between">
        <div className="flex flex-col gap-10">
          <div className="mt-5">
            <Link to={'/'}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex flex-col gap-5 items-center">
            {navLinks.map((link) => (
              <NavLink key={link.title} to={link.href}>
                <NavIcon link={link.href} />
              </NavLink>
            ))}
          </div>
        </div>
        <div onClick={toggleOpen} className="cursor-pointer relative z-50">
          <div
            className={`${
              open ? 'visible' : 'invisible'
            } absolute w-20 -right-20 -top-5`}
          >
            <p
              onClick={userLogOut}
              className="body-sm bg-darkBlue p-2 rounded-lg hover:bg-lightBlue"
            >
              Log out
            </p>
          </div>
          <img src={avatar} alt="avatar" width={36} />
        </div>
      </div>
    </nav>
  );
};
