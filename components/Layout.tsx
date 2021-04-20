import React, { FunctionComponent } from 'react';
import Nav from "./Nav";


type LayoutProps = {
  seo?: any,
  categories: []
}

const Layout: FunctionComponent<LayoutProps> = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
);

export default Layout;
