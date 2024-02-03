import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import PropTypes from "prop-types";
import { CiMenuBurger } from "react-icons/ci";

function DropdownNav({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle color="black">
          <CiMenuBurger />
        </DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem href="/" role="button">
            Home
          </DropdownItem>
          <DropdownItem href="/cekpesanan" role="button">
            Cek Pesanan
          </DropdownItem>
          <DropdownItem href="/update" role="button">
            Daftar Harga
          </DropdownItem>
          <DropdownItem href="/newest" role="button">
            Kontak
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
