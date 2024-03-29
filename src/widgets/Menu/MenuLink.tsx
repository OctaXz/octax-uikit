import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, target,  ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href } ;
  const props2 = isHttpLink && target ? { target } : "";

  // console.log(Tag)
  // console.log(props)
  // console.log("MenuLink",target)
  return <Tag {...props} {...props2} {...otherProps} />;
};


export default MenuLink;
