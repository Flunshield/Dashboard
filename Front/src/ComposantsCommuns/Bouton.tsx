import React from "react";
import '../StyleCss/Boutton.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  className?: string;
}

const Bouton = ({
  children,
  onClick,
  type,
  className = ""
}: ButtonProps) => {
  return (
    <div className="button-container">
    <button
      type={type}
      className={`${className}`}
      onClick={onClick}
    >
      {children}
    </button>
    </div>
  );
};

export default Bouton;
