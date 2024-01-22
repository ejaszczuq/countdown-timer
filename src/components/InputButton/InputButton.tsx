import { FC, useState } from "react";
import { motion } from "framer-motion";

import "./InputButton.scss";

interface InputButtonProps {
  id: string;
  title: string;
  setInputDate: (date: Date) => void;
}

const InputButton: FC<InputButtonProps> = ({ id, title, setInputDate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputType, setInputType] = useState("text");

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputType("date");
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputType("text");
    const date = event.target.value ? new Date(event.target.value) : new Date();
    setInputDate(date);
  };

  return (
    <motion.div className="InputButtonContainer" id={id} animate={{ x: [null, 100, -150] }}>
      <motion.button
        id={id}
        onClick={handleClick}
        style={{
          backgroundColor: isVisible ? "#b4516a" : "#d552733b",
          color: isVisible ? "#52202ca4" : "#d55273a8",
          border: isVisible ? "1.5px solid #52202ca4" : "1.5px solid #d55273a8"
        }}
      >
        {title}
      </motion.button>
      <motion.input
        style={{ visibility: isVisible ? "visible" : "hidden" }}
        type={inputType}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Choose date"
        id={id}
        animate={isVisible ? { x: [null, -5, 23] } : {}}
      />
    </motion.div>
  );
};

export default InputButton;
