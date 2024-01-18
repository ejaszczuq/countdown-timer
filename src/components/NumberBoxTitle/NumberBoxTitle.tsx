import React, { FC } from "react";

import "./NumberBoxTitle.scss";

interface NumberBoxTitleProps {
    content: string;
}

const NumberBoxTitle: FC<NumberBoxTitleProps> = ({content}) => {
    return (
        <p className="title">{content}</p>
    );
};

export default NumberBoxTitle;