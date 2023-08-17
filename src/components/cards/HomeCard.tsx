import { ReactNode } from "react";

interface PROPS {
  children?: ReactNode;
  className?: string;
}

const HomeCard = ({ children, className }: PROPS) => {
  return (
    <div
      className={`flex items-center border border-b_gray rounded-lg shadow
        ${className}`}
    >
      {children}
    </div>
  );
};

export default HomeCard;
