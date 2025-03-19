
// src/layouts/Layout.js
import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import SearchBar from '../../components/SearchBar';
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const MainLayout = ({ title, navs }) => {
  
  return (
      <main className="">
        <Header />
        <div className="">
          <Outlet  />
        </div>
      </main>
    
  );
};

export default MainLayout;
