import React from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
  UncontrolledButtonDropdown
} from 'reactstrap';

const ButtonDropdown = ({ children, options }) => (  
  <UncontrolledButtonDropdown className="button-dropdown">
    <DropdownToggle caret>
      {children}
    </DropdownToggle>
    <DropdownMenu>
      {!!options.length && options.map(option => (
        <DropdownItem>{option.name}</DropdownItem>
      ))}
    </DropdownMenu>
  </UncontrolledButtonDropdown>
)

export default ButtonDropdown