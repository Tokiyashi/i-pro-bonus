import React from 'react';
import Container from "./styles/Container";
import Bonus from "../Components/Bonus";
import MainSection from "./styles/MainSection";
import Header from "../Components/Header";
import RedSection from "./styles/RedSection";
import StatusBar from "../Components/StatusBar";

function App() {
    return (
        <Container>
            <StatusBar/>
            <MainSection>
                <Header/>
                <Bonus/>
            </MainSection>
            <RedSection/>
        </Container>
    );
}

export default App;
