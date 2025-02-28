import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BdsSidebar, BdsListItem } from 'blip-ds/dist/blip-ds-react/components';
import { Props } from './NavSidebar-interface';

const NavSidebar = (props: Props) => {
  const navigation = props.navigation ? props.navigation : [];
  const location = useLocation();
  return (
    <BdsSidebar class="sidebar" width={280} background="surface-2" isOpen={props.isOpen} margin={false} type="fixed">
      <div slot="body">
        <NavLink to="/">
          <bds-list>
            <BdsListItem clickable value="01" icon="arrow-left" text={props?.title}></BdsListItem>
          </bds-list>
        </NavLink>
        <bds-list>
          {navigation.length > 0 &&
            navigation.map((item, index) => (
              <NavLink key={index} to={item.href}>
                <BdsListItem
                  clickable
                  active={item.href === location.pathname}
                  value={index.toString()}
                  icon={item.icon}
                  text={item.name}
                ></BdsListItem>
              </NavLink>
            ))}
        </bds-list>
      </div>
    </BdsSidebar>
  );
};

export default NavSidebar;
