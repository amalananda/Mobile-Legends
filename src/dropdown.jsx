import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import PropTypes from "prop-types";
import { CiMenuBurger } from "react-icons/ci";

function DropdownNav({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="drop">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle color="black">
          <CiMenuBurger />
        </DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem href="/" role="button">
            Home
          </DropdownItem>
          <DropdownItem href="/cek_pesanan" role="button">
            Cek Pesanan
          </DropdownItem>
          <DropdownItem href="/daftar_harga" role="button">
            Daftar Harga
          </DropdownItem>
          <DropdownItem href="/newest" role="button">
            Kontak
          </DropdownItem>
          <DropdownItem href="/login_page" role="button">
            Login
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DropdownNav.propTypes = {
  direction: PropTypes.string,
};

export default DropdownNav;
