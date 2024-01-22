import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./NumberBox.scss";

interface NumberBoxProps {
  id: string;
  title: string;
  num: number;
}

const NumberBox: FC<NumberBoxProps> = ({ id, title, num }) => {
  const [flip, setFlip] = useState(false);
  const [prevNum, setPrevNum] = useState(num);

  useEffect(() => {
    setFlip(true);
    const timer = setTimeout(() => {
      setFlip(false);
      setPrevNum(num);
    }, 750); // Reset flip state

    return () => clearTimeout(timer);
  }, [num]); // This will run every time `num` changes

  return (
    <div className="numberBox" id={id}>
      <div className="front">
        <hr />
        <p>{num}</p>
        <div className="circleRight" />
        <div className="circleLeft" />
      </div>

      <motion.div animate={{ rotateX: flip ? 0 : -90 }} transition={{ duration: 0.7 }} className="back">
        <hr />
        <p>{prevNum}</p>

        <div className="circleRight" />
        <div className="circleLeft" />
      </motion.div>

      <p className="box-title">{title}</p>
    </div>
  );
};

export default NumberBox;
