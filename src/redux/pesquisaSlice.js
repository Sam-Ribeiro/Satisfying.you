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
            state.pessimo = action.payload.pessimo
            state.ruim = action.payload.ruim
            state.neutro = action.payload.neutro
            state.bom = action.payload.bom
            state.excelente = action.payload.excelente
        }
    }
})

export const {reducerSetPesquisa} = PesquisaSlice.actions

export default PesquisaSlice.reducer