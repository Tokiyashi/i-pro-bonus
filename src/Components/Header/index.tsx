import React from 'react';
import Container from "./styles/Container";
import {Typography} from "@mui/material";
import {ReactComponent as InfoIcon} from "../../assets/information-button 1.svg";

const Header = () => {
    return (
        <Container>
            <Typography>ЛОГОТИП</Typography>
            <InfoIcon/>
        </Container>
    );
};

export default Header;