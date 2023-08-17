import { ReactNode } from "react";

interface PROPS {
  children?: ReactNode;
  path: string;
  text?: string;
  className?: string;
}

const HomeLink = ({ children,text,className, path }: PROPS) => {
  return(
  <a className={`flex text-gold cursor-pointer ${className}`}>
<span>{children || text}</span>
<img
src="/arrow-right.svg"
/>
  </a>)
};
export default HomeLink;
