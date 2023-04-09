import axios from "axios";
import accessTokenService from "../accessToken";
import {ACCESS_KEY} from "../../common/constants";

const BONUS_BASE_URL = 'http://84.201.188.117:5003/api/v3/ibonus/generalinfo/';

class BonusService {
    public async getBonuses() {
        const token = await accessTokenService.getToken()
        const result = await axios.get(BONUS_BASE_URL + token, {headers: {AccessKey: ACCESS_KEY}})
        return result.data.data
    }

}

const bonusService = new BonusService()

export default bonusService;