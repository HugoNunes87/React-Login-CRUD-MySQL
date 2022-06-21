import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import Login from "../Pages/Login"
import Cadastro from "../Pages/Cadastro";
import Crud from '../Pages/Crud'

const logado = localStorage.getItem('@user');


const Rotas = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {!logado && <Route path="/" element={<Login logado={logado} />} />}
                    {logado && <Route path="/" exact element={<Crud/>} />}
                    {!logado && <Route path="/cadastro" element={<Cadastro logado={logado} />} />}
                </Routes>
            </BrowserRouter>
        </div>

    );
};



export default Rotas;