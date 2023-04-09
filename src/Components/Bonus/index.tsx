import React, {useEffect, useState} from 'react';
import bonusService from "../../Services/bonus";
import Container from "./styles/Container";
import {Skeleton, Typography} from "@mui/material";
import dateFormat from 'dateformat'
import InfoColumn from "./styles/InfoColumn";
import ExpirationRow from "./styles/ExpirationRow";
import {Colors} from "../../common/enums";
import {ReactComponent as FireIcon} from "../../assets/fire.svg";
import {ReactComponent as ButtonIcon} from "../../assets/button.svg";

type BonusesInfo = {
    currentQuantity: number;
    dateBurning: string;
    forBurningQuantity: number;
}

const Bonus = () => {
    const [bonusesInfo, setBonusesInfo] = useState<BonusesInfo>()

    const init = async () => {
        const result = await bonusService.getBonuses()
        setBonusesInfo(result)
    }

    const getBurningDate = () => {
        if (!bonusesInfo) {
            return
        }
        const date = new Date(bonusesInfo?.dateBurning)
        return dateFormat(date, 'mm dd').replaceAll(' ', '.')
    }

    useEffect(() => {
        void init();
    }, [])

    return (
        <Container sx={{boxShadow: 3}}>
            {bonusesInfo?.forBurningQuantity ?
                <InfoColumn>
                    <Typography fontSize='24px' fontWeight='bold'>
                        {bonusesInfo?.currentQuantity} бонусов
                    </Typography>
                    <ExpirationRow>
                        <Typography color={Colors.GREY} fontSize='16px'>
                            {getBurningDate()} сгорит
                        </Typography>
                        <FireIcon/>
                        <Typography color={Colors.GREY} fontSize='16px'>
                            {bonusesInfo?.forBurningQuantity} бонусов
                        </Typography>
                    </ExpirationRow>
                </InfoColumn>
                :
                <InfoColumn>
                    <Skeleton variant='text' width='50%'/>
                    <Skeleton variant='text' width='80%'/>
                </InfoColumn>
            }
            <ButtonIcon/>
        </Container>
    );
};

export default Bonus;