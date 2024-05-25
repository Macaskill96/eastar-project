import {getAddressData} from "../methods";


const novaService = {
    searchSettlements: (cityName: string) => {
        // console.log("City Name:", cityName);
        return getAddressData("searchSettlements", {"CityName": cityName});
    },
    getWarehouses: (cityRef?: string, findByString?: string) => {
        // console.log("City Ref:", cityRef);
        return getAddressData("getWarehouses", {"CityRef": cityRef, "FindByString": findByString});
    }
}

export { novaService };