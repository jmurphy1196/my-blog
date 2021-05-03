import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Jason | Home" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>{/* place navbar here */}</header>
    <div className='layout-container'>
      <main>{children}</main>
    </div>
    <footer>{/* place footer here */}</footer>
  </div>
);

export default Layout;
