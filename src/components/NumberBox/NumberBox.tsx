import React, { FC } from "react";

interface NumberBoxProps {
    className: string;
    title: string;
    num: number;
}

const NumberBox: FC<NumberBoxProps> = ({className, title, num}) => {
    return (
        
        <><div className={className}>
            {num}
        </div><h2>{title}</h2></>
        
    );
};

export default NumberBox;