import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {novaService} from "../../services";
import {AxiosError} from "axios";
import {IWarehouses, SuccessfulResponse} from "../../interfaces/nova.interface";

interface IState {
    data: SuccessfulResponse[],
    dataTwo: IWarehouses[]
}

const initialState: IState = {
    data: [],
    dataTwo: [],
};


const searchSettlements = createAsyncThunk (
    'novaSlice/searchSettlements',
    async (cityName:string, {rejectWithValue}) => {
        try {
            const {data} = await novaService.searchSettlements(cityName);
            return data;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getWarehouses = createAsyncThunk(
    'novaSlice/getWarehouses',
    async ({ cityRef, findByString }: { cityRef?: string, findByString?: string }, { rejectWithValue }) => {
        try {
            const {data} = await novaService.getWarehouses(cityRef, findByString);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);
const novaSlice = createSlice({
    name: 'novaSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchSettlements.fulfilled, (state, action) => {
                state.data = [action.payload]
            })
            .addCase(getWarehouses.fulfilled, (state, action) => {
                state.dataTwo = [action.payload];
            })
    },
});
const {reducer: novaReducer, actions} = novaSlice;
const novaActions = {...actions, searchSettlements, getWarehouses};

export {novaReducer, novaActions}