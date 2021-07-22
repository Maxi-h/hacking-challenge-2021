import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css';
import NavBar from "../utils/nav/Nav";
import React, { useEffect, useContext } from 'react';
import Context from '../../context/customContext';

function Welcome() {

    const {contextProvider, setContextProvider}  = useContext(Context)

    useEffect(() => {
        
    }, [setContextProvider]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="Content4">
            <NavBar />

            <div className="Group41">

                <div className="Background"></div>
                <div className="Image41Content">
                    <div className="Image41" />
                </div>
            </div>

            <div className="Group42">
                <div className="WelcomeText WelcomeTextColor">¡Te damos la bienvenida!</div>
                <div className="WelcomeText Title">Cuenta con nosotros para proteger tu vehículo</div>
                <div className="SubTitle">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</div>
                <div className="SubTitle MailText">{contextProvider.email}</div>
                <div className="Btn-Cot2">cómo usar mi seguro</div>
            </div>

            <div className="Footer4">
                © 2020 RIMAC Seguros y Reaseguros.
            </div>


        </div>


    );
}

export default Welcome;
