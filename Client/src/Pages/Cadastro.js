import "../Styles/Cadastro.css"
import Img from "../Assets/database.svg"
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link } from 'react-router-dom';


function Cadastro({ logado = false }) {

    const handleRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            alert(response.data.msg);
            console.log(response);
            window.location.reload();
        });
    };

    const validationsRegister = yup.object().shape({
        email: yup
            .string()
            .email("E-mail inválido")
            .required("O e-mail é obrigatório"),
        password: yup
            .string()
            .min(8, "A senha deve ter pelo menos 8 caracteres")
            .required("A senha é obrigatória"),
        confirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas são diferentes")
            .required("A confirmação da senha é obrigatória"),
    });


    return (
        <div className="body">
            <div className="left-cadastro">
                <img src={Img} alt="Pessoas olhando gráficos" className="chart" />
            </div>
            <div className="right-cadastro">
                <div className="card-cadastro">
                    <div className="user-links">
                        <div className="user-link-home">
                            {!logado && <Link to="/">Home</Link>}
                        </div>

                        <div className="user-link-cad">
                            {!logado && <Link to="/cadastro">Cadastro</Link>}
                        </div>
                    </div>
                    <h1>CADASTRO</h1>
                    <Formik
                        initialValues={{}}
                        onSubmit={handleRegister}
                        validationSchema={validationsRegister}
                    >
                        <Form className="login-form">
                            <div className="form-group">
                                <label form="email">Usuário</label>

                                <Field name="email" type='email' className="form-field" placeholder="Email" />

                                <ErrorMessage
                                    component="span"
                                    name="email"
                                    className="form-error"
                                />
                            </div>

                            {/*Outro campo*/}

                            <div className="form-group">
                                <label form="email">Senha</label>
                                <Field name="password" type='password' className="form-field" placeholder="Senha" />

                                <ErrorMessage
                                    component="span"
                                    name="password"
                                    className="form-error"
                                />
                            </div>

                            {/*Confirmação*/}

                            <div className="form-group">
                                <label form="email">Confirme sua senha</label>
                                <Field name="confirmation" type='password' className="form-field" placeholder="Senha" />

                                <ErrorMessage
                                    component="span"
                                    name="confirmation"
                                    className="form-error"
                                />
                            </div>
                            <button className="button" type="submit">
                                CADASTRAR
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;