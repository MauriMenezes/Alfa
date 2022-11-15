import axios from "axios"

export const api = axios.create({

  baseURL: "https://alfarecodepro.herokuapp.com",
})
export const createAuth = async (cpf, senha) => {

  return api.post("/auth", { cpf, senha })
}

