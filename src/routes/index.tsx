import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Props } from './routes-interface';
import { components } from '../utils/components';
import NavSidebar from '../wrappers/NavSidebar/NavSidebar';
import Home from './../pages/Home';
import BaseComponents from '../pages/baseComponents';
import TeamComponents from '../pages/teamComponents';

export const AppRoutes = () => {
  const baseComponents = components[0].pages;
  const teamComponents = components[1].pages;
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/base-components" element={<BaseComponents />} />

      {baseComponents.map((item, index) => (
        <Route
          key={index}
          path={item.href}
          element={item.component()}
        />
      ))}
      {teamComponents.map((item, index) => (
        <Route
          key={index}
          path={item.href}
          element={item.component()}
        />
      ))}

      <Route path="/team-components" element={<TeamComponents />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export const SidebarRoute = (props: Props) => {
  return (
    <Routes>
      {components.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          element={<NavSidebar title={item.name} navigation={item.pages} isOpen={props.isOpen}></NavSidebar>}
        />
      ))}
    </Routes>
  );
};
