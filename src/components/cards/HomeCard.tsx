import { ReactNode } from "react";

interface PROPS {
  children?: ReactNode;
  className?: string;
}

const HomeCard = ({ children, className }: PROPS) => {
  return (
    <div
      className={`flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row
       hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default HomeCard;
