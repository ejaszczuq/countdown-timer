import React, { FC } from "react";

import "./NumberBox.scss";

interface NumberBoxProps {
    idProp: string;
    num: number;
}

const NumberBox: FC<NumberBoxProps> = ({idProp, num}) => {
    return (
        
        <><div className="numberBox" id={idProp}>
            <hr /><p>{num}</p><div className="circleRight" /><div className="circleLeft" />
            </div></>
    );
};

export default NumberBox;