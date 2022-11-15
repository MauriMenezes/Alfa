import "./login.css"
import React, { useState, useContext } from "react"
import { AuthContext } from "../../context/auth"
import { Link } from "react-router-dom"
import { Button, Alert, Container } from "react-bootstrap"
import Footer from "../../components/footer"

const Login = () => {

  const { authenticated, login } = useContext(AuthContext)

  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("DADOS DO FORM", { cpf, senha })
    login(cpf, senha)
  }
  return (

    <>

      <div id="login">

        <h1 className="titulo-login">Login </h1>
        <form className="form" onSubmit={handleSubmit}>

          <div className="field">
            <audio src="assets/audio/objetivo.mpeg" controls></audio>

            <label>CPF</label>

            <input type={"Text"}
              name="cpf"
              value={cpf}
              placeholder="xxx-xxx-xxx.xx"
              onChange={(e) => setCpf(e.target.value)} required></input>
          </div>
          <div className="field">
            <label>Senha</label>
            <input type={"password"}
              name="password"
              id="password"
              value={senha}
              placeholder="**********"
              onChange={(e) => setSenha(e.target.value)}></input>
          </div>
          <div className="actions">
            <div className="d-grid gap-2">
              <Button type='submit' className="btn-login" variant="primary" size="lg">
                Entrar
              </Button>

            </div>


          </div>
          <div className="reg">
            <h4>Nâo possui conta? Registre-se <Link className="link" to={"/register"} >
              aqui
            </Link>  </h4>
          </div>
        </form>

      </div>

      <Footer />
    </>



  )
}
export default Login