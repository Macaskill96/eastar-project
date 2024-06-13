
export interface Address {
    Present: string;
    Warehouses: number;
    MainDescription: string;
    Area: string;
    Region: string;
    SettlementTypeCode: string;
    Ref: string;
    DeliveryCity: string;
}

export interface SuccessfulResponse {
    success: boolean;
    data: {
        TotalCount: number;
        Addresses: Address[];
    }[];
    errors: any[];
}

export interface ISetValuePost {
    userID: string;
    nameUser: string;
    lastName: string;
    phone: string;
    city: string;
    warehouse: string
}

export interface IPostInfo {
    Description: string,
    Phone: string,
    Reception: {}
}

export interface IWarehouses {
    success: boolean,
    data: {
        Description: string,
        Phone: string,
        Reception: {}
    }[],
    errors: []
}