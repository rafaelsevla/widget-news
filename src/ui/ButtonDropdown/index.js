import React from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
  UncontrolledButtonDropdown
} from 'reactstrap';

const ButtonDropdown = ({ children, options, onClick }) => (  
  <UncontrolledButtonDropdown className="button-dropdown" >
    <DropdownToggle caret>
      {children}
    </DropdownToggle>
    <DropdownMenu modifiers={{
      setMaxHeight: {
        enabled: true,
        order: 890,
        fn: (data) => {
          return {
            ...data,
            styles: {
              ...data.styles,
              overflow: 'auto',
              maxHeight: 200,
            },
          };
        },
      },
    }}>
      <div>

      {!!options.length && options.map(option => (
        <DropdownItem onClick={() => onClick(option)}>{option.name}</DropdownItem>
        ))}
        </div>
    </DropdownMenu>
  </UncontrolledButtonDropdown>
)

export default ButtonDropdown