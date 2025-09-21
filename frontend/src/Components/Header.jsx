import React from 'react';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { headerLinks } from '../utils';
import Button from './Button';

const Header = () => {
  const { user, token } = useSelector((state) => state.auth);
  return (
    <div>
      <div>
        <FaMoneyBillTrendUp />
      </div>
      {user && <li>
        {headerLinks.map((link) => {
          <li>{link.name}</li>
        })}
      </li>}
      <div>
        {user ? <div><Button text={"Logout"} /></div> : <div>
          <Button text={"Register"} />
          <Button text={"Login"} />
        </div>}
      </div>
    </div>
  )
}

export default Header
