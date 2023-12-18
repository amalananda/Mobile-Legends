import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import PropTypes from "prop-types";

function DropdownNav({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Menu</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem href="/home" role="button">
            Home
          </DropdownItem>
          <DropdownItem href="/trending" role="button">
            Trending
          </DropdownItem>
          <DropdownItem href="/update" role="button">
            Recent Update
          </DropdownItem>
          <DropdownItem href="/newest" role="button">
            New Release
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
