import React, { useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import {
  BdsThemeProvider,
  BdsNavbar,
  BdsNavbarContent,
  BdsButtonIcon,
  BdsIllustration,
  BdsAvatar,
  BdsTooltip,
  BdsButton,
} from 'blip-ds/dist/blip-ds-react/components';
import { AppRoutes, SidebarRoute } from './routes';
import DownTimeModal from './wrappers/DowntimeModal';

const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');
const isDark = browserTheme.matches;

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <BdsThemeProvider theme={isDark ? 'dark' : 'light'} class="provider-global">
      <BdsNavbar orientation="vertical" justifyContent="flex-start" class="nav-global">
        <BdsNavbarContent>
          <BdsButton
            variant={openSidebar ? 'solid' : 'text'}
            class="arrow-down"
            color="content"
            icon-left="menu-hamburger"
            onClick={() => setOpenSidebar(!openSidebar)}
          ></BdsButton>
        </BdsNavbarContent>
        <BdsNavbarContent>
          <Link to="/base-components">
            <BdsTooltip position="right-center" tooltip-text="Base Components">
              <BdsButtonIcon size="short" variant="secondary" icon="integration"></BdsButtonIcon>
            </BdsTooltip>
          </Link>
          <Link to="/team-components">
            <BdsTooltip position="right-center" tooltip-text="Team Components">
              <BdsButtonIcon size="short" variant="secondary" icon="integrations-channels"></BdsButtonIcon>
            </BdsTooltip>
          </Link>
        </BdsNavbarContent>
      </BdsNavbar>
      <bds-grid padding="none" height="100%" xxs="12" direction="column" class="app-nav">
        <BdsNavbar class="header" orientation="horizontal" justifyContent="space-between" backgroundColor="surface-2">
          <BdsNavbarContent className="logo-area">
            <Link to="/">
              <BdsIllustration
                class="logo"
                type="brand"
                name={isDark ? 'blip-ballon-blue-white-horizontal' : 'blip-ballon-blue-black-horizontal'}
              ></BdsIllustration>
            </Link>
          </BdsNavbarContent>
          <BdsNavbarContent>
            <BdsAvatar name="Uai Design System" size="small"></BdsAvatar>
          </BdsNavbarContent>
        </BdsNavbar>
        <bds-grid padding="none" xxs="12" height="calc(100% - 56px)" class="app-nav-container">
          <SidebarRoute isOpen={openSidebar} />
          <bds-grid height="100%" xxs="12" direction="column" class="app-nav-container-content">
            <AppRoutes />
          </bds-grid>
        </bds-grid>
      </bds-grid>
      {/* <DownTimeModal downtime={20} waintingTime={10}></DownTimeModal> */}
    </BdsThemeProvider>
  );
};
export default App;
