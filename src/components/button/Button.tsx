import { ReactNode } from "react";

interface PROPS {
  children: string;
}

const Button = ({ children }: PROPS) => {
  return <a className=" bg-[#C5A663] px-8 py-3 mt-4 border rounded-[8px] text-black inline-block">{children}</a>;
};

export default Button;
