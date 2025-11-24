import { configureStore } from "@reduxjs/toolkit";
import { loginSlice,  } from "./loginSlice";
import { PesquisaSlice } from "./pesquisaSlice";


export const store = configureStore({
    reducer:{
        login: loginSlice.reducer,
        pesquisa: PesquisaSlice.reducer
    }
})