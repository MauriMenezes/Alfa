import React, { useState } from "react"
import Header from "../Header"


const Quest01 = () => {

  const [nome, setNome] = useState("")
  const submit = () => {

    if (nome == "maurilio") alert("acertou")
  }

  return (
    <>
      <Header />

      <form className="form" onSubmit={submit}>






        <label>Nome</label>
        <input type={"text"}
          name="name"
          id="name"
          placeholder="Seu Nome aqui"

          onChange={(e) => setNome(e.target.value)}
        ></input>

        <div >
          <Button type="submit" className="btn-register">CADASTRAR</Button>
        </div>

      </form>



    </>

  )
}
export default Quest01;