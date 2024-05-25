import {axiosService} from "../../services";
import {baseURL} from "../../constants";


export function getAddressData(calledMethod:string, methodProperties: {}) {
    return axiosService.post(baseURL, {
        apiKey: "a3f4f37a4fa4bda3c57a5fdcba75660d",
        modelName: "Address",
        calledMethod,
        methodProperties
    });
}