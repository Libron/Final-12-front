import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

const UserMenu = ({user, logout}) => (
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            Hello, {user.name}
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem tag={RouterNavLink} to={'/gallery/uploadPhoto'}>
                Upload photo
            </DropdownItem>
            <DropdownItem tag={RouterNavLink} to={'/gallery?uid=' + user._id}>
                View My Gallery
            </DropdownItem>
            <DropdownItem onClick={logout}>
                Logout
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
);

export default UserMenu;