import { BaseService } from "./baseService";


export class UserService extends BaseService {

    async getUsers(body){
        try {
            const response = await this.httpClient.post("user/findUser", body);
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    }
    
    async signUp(body){
        try {
            const response = await this.httpClient.post("user/signUp", body);
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    }

    async login(body){
        try {
            const response = await this.httpClient.post("user/login", body);
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    }
}