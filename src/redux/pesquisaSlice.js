import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    id: null,
    nome: null,
    data: null,
    imagem: null
}

export const PesquisaSlice = createSlice({
    name: 'pesquisa',
    initialState: initialValues,
    reducers:{
        reducerSetPesquisa: (state, action) => {
            state.id =  action.payload.id
            state.nome =  action.payload.nome
            state.data =  action.payload.data
            state.imagem = action.payload.imagem
        }
    }
})

export const {reducerSetPesquisa} = PesquisaSlice.actions

export default PesquisaSlice.reducer