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
  const [isFutureDate, setIsFutureDate] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [containerWidth, setContainerWidth] = useState("60px");
  const [buttonPosition, setButtonPosition] = useState("17%");

  const handleClick = () => {
    setIsVisible(!isVisible);
    setContainerWidth(isVisible ? "60px" : "295px");
    setButtonPosition(isVisible ? "17%" : "5%");
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputType("date");
    setIsInputTouched(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputType("text");
    const date = event.target.value ? new Date(event.target.value) : new Date();
    setInputDate(date);

    const inputDateWithoutTime = new Date(date.setHours(0, 0, 0, 0));
    const todayWithoutTime = new Date(new Date().setHours(0, 0, 0, 0));

    const futureDate = inputDateWithoutTime.getTime() > todayWithoutTime.getTime();
    setIsFutureDate(futureDate);

    if (!futureDate) {
      setIsErrorVisible(true);
      if (inputDateWithoutTime.getTime() === todayWithoutTime.getTime()) {
        setErrorMessage("The date cannot be today");
      } else {
        setErrorMessage("The date cannot be in the past");
      }
    } else {
      setIsErrorVisible(false);
    }

    if (event.target.value === "") {
      setIsErrorVisible(true);
      setErrorMessage("The date field cannot be empty");
    }
  };

  return (
    <motion.div className="InputButtonContainer" id={id} animate={{ x: [null, -140, -145], width: containerWidth }}>
      <motion.button
        id={id}
        onClick={handleClick}
        style={{
          backgroundColor: isVisible ? "#b4516a" : "#d552733b",
          color: isVisible ? "#52202ca4" : "#d55273a8",
          border: isVisible ? "1.5px solid #52202ca4" : "1.5px solid #d55273a8",
          left: buttonPosition
        }}
      >
        {title}
      </motion.button>
      <motion.div
        className="inputBox"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
        id={id}
        animate={isVisible ? { x: [null, -5, 23] } : {}}
      >
        <motion.div
          className="checkIcon"
          onMouseEnter={() => setIsErrorVisible(!isFutureDate && isInputTouched)}
          onMouseLeave={() => setIsErrorVisible(false)}
          animate={isFutureDate ? { scale: 1 } : { scale: [1, 1.1, 1] }}
          transition={{
            repeat: isFutureDate ? 0 : Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundColor: isFutureDate ? "green" : "rgb(189, 32, 32)"
          }}
        />

        <input type={inputType} onFocus={handleFocus} onBlur={handleBlur} placeholder="Choose date" />
        <motion.div
          className="errorMessage"
          style={{
            visibility: isErrorVisible ? "visible" : "hidden"
          }}
        >
          {isErrorVisible && errorMessage}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InputButton;
