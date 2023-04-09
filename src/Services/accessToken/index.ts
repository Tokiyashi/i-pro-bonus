import axios from "axios";
import {ACCESS_KEY} from "../../common/constants";

const ACCESS_TOKEN_BASE_URL = 'http://84.201.188.117:5021/api/v3/clients/accesstoken'

class AccessTokenService {

    public async getToken() {
        const response = await axios.post(ACCESS_TOKEN_BASE_URL, {
            accessToken: '',
            idClient: "2c44d8c2-c89a-472e-aab3-9a8a29142315",
            paramValue: "7db72635-fd0a-46b9-813b-1627e3aa02ea",
            paramName: "device",
            latitude: 0,
            longitude: 0,
            sourceQuery: 0
        }, {headers: {AccessKey: ACCESS_KEY}})
        return response.data.accessToken
    }
}

const accessTokenService = new AccessTokenService()
export default accessTokenService;