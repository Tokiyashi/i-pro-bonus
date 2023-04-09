import React from 'react';
import Container from "./styles/Container";
import {Typography} from "@mui/material";
import Circles from "./styles/Circles";
import {ReactComponent as DotsIcon} from "../../assets/dots.svg";
import {ReactComponent as BatteryIcon} from "../../assets/battery.svg";

const StatusBar = () => {
    return (
        <Container>
            <Circles>
                <DotsIcon/>
                <Typography fontWeight='bold'  fontSize='12px'> Figma </Typography>
            </Circles>
            <Typography fontWeight='bold'  fontSize='12px'> 9:42 AM </Typography>
            <Typography fontWeight='bold' fontSize='12px'> 42%
                <BatteryIcon/>
            </Typography>
        </Container>
    );
};

export default StatusBar;