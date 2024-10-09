import React from "react";
import * as C from "./styles";
import ResumeItem from "../ResumeItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
    return (
        <C.Container>
            <ResumeItem 
                title="Entradas" 
                Icon={FaRegArrowAltCircleUp} 
                value={income} 
                color="green"
            />
            <ResumeItem 
                title="Saidas" 
                Icon={FaRegArrowAltCircleDown} 
                value={expense} 
                color="red"
            />
            <ResumeItem 
                title="Total" 
                Icon={FaDollarSign} 
                value={total}
                isTotal={true} // Nova prop para identificar que é o total
            />
        </C.Container>
    );
};

export default Resume;