import { HiOutlineChevronLeft, HiOutlineChevronDown, HiOutlineChevronUp, HiMinusSm, HiPlus, HiCheck } from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import './CarData.css';
import './Plan2.css';
import NavBar from "../utils/nav/Nav";
import React, { useState, useEffect, useReducer, useContext } from 'react';
import ToggleButton from '../utils/toggle-button/ToggleButton';
import Context from '../../context/customContext';

import { Link, } from "react-router-dom";

const initialState = { count: 14300 }

function counterReducer(previousState = initialState, action) {
    switch (action.type) {
        case 'increase':
            return {
                count: previousState.count + 100
            }

        case 'decrease':
            return {
                count: previousState.count - 100
            }

        default:
            throw new Error("No Allowed")
    }
}

export function Group21() {


    const { contextProvider, setContextProvider } = useContext(Context)


    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [year, setYear] = useState("2019");
    const [car, setCar] = useState("Wolkswagen");
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <div className="DropDownString"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            <HiOutlineChevronDown className=" {HiOutlineChevronDown} " color={"#EF3340"} size={16} />
        </div>
    ));

    useEffect(() => {
        contextProvider.car = { nameCar: car, yearCar: year }
    }, [setContextProvider, car, year])// eslint-disable-line react-hooks/exhaustive-deps



    return (


        <div className="Group22">
            <div className="GridGroup2">
                <div className="GridG2IIc">
                    <div className="Back">
                        <Link to='/' replace={true} className="BackButton"><HiOutlineChevronLeft className=" {HiOutlineChevronLeft} " color={"#EF3340"} size={16} /></Link>
                        <div className="IncreaseH52">Volver</div>

                    </div>
                    <div className="IncreaseH22">!Hola, <span>{contextProvider.name}!</span></div>

                    <div className="IncreaseH42">Completa los datos de tu auto</div>
                    <div className="CustomDropdown">
                        <div className="DropDownContent">
                            <label>Año</label>
                            <Dropdown >
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">{year}</Dropdown.Toggle>
                                <Dropdown.Menu onClick={(e) => { setYear(e.target.name) }}>
                                    <Dropdown.Item name="2018">2018</Dropdown.Item>
                                    <Dropdown.Item name="2019">2019</Dropdown.Item>
                                    <Dropdown.Item name="2020">2020</Dropdown.Item>
                                    <Dropdown.Item name="2021">2021</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>

                    <div className="CustomDropdown">
                        <div className="DropDownContent">
                            <label>Marca</label>
                            <Dropdown >
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">{car}</Dropdown.Toggle>
                                <Dropdown.Menu onClick={(e) => { setCar(e.target.name) }}>
                                    <Dropdown.Item name="Wolkswagen">Wolkswagen</Dropdown.Item>
                                    <Dropdown.Item name="Wolkswagen SUV">Wolkswagen SUV</Dropdown.Item>
                                    <Dropdown.Item name="Wolkswagen Golf">Wolkswagen Golf</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>


                </div>
                <div className="GridG2Ic">
                    <div className="HelpText">ayuda</div>
                    <div className="Divider" />
                    <div className="QuestionContent">
                        <div className="QuestionContentText">
                            <div className="QuestionText">¿ No encuentas el modelo ?</div>
                            <div className="ClickHere">Click aqui</div>
                        </div>
                        <div className="IconCar"> </div>
                    </div>
                </div>
                <div className="GridG2IIIc">
                    <div className="GroupedContent">
                        <div className="Text">¿Tu auto es a gas?</div>
                        <div className="RadioButtonGroup">
                            <input className="radio" id="radio-1" name="rd" type="radio" defaultChecked />
                            <label htmlFor="radio-1" className="radio-label">Si</label>
                            <div className="Space" />
                            <input className="radio" id="radio-2" name="rd" type="radio" />
                            <label htmlFor="radio-2" className="radio-label">No</label>

                        </div>

                    </div>

                    <div className="BigDivider" />

                    <div className="GroupedContent">
                        <div>
                            <div className="Text">Indica la suma asegurada</div>
                            <div className="MinMaxTextContent">
                                <div className="MinMaxText">MIN $12,500</div>
                                <div className="VrtDivider" />
                                <div className="MinMaxText">MAX $16,500</div>
                            </div>
                        </div>
                        <div className="CounterContent">
                            <div className="CounterGroup">
                                <button className="ButtonCounter" disabled={state.count <= 12500} onClick={() => dispatch({ type: 'decrease' })}>-</button>
                                <div>$ {state.count}</div>
                                <button className="ButtonCounter" disabled={state.count >= 16500} onClick={() => dispatch({ type: 'increase' })}>+</button>

                            </div>
                        </div>

                    </div>

                    <Link to="/armar-plan" replace={true} className="Btn-Cot" onClick={() => {
                        contextProvider.next = true;
                    }}>continuar</Link>

                </div>
                <div className="GridG2IVc">
                    <div className="Footer">
                        © 2020 RIMAC Seguros y Reaseguros.
                    </div>
                </div>
            </div>
        </div>

    );
}

export function Group22() {
    const [initialCost, setInitialCost] = useState(20.00);
    const [selected, setSelected] = useState(true);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);

    const { contextProvider, setContextProvider } = useContext(Context)

    useEffect(() => {

    }, [setContextProvider])// eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        if (selected) {
            setInitialCost(initialCost + 15.00);
        }
        if (selected2) {
            setInitialCost(initialCost + 20.0);
        }
        if (selected3) {
            setInitialCost(initialCost + 50.00);
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const onSelected = () => {
        setSelected(!selected);
        if (selected) setInitialCost(initialCost - 15.00)
        else setInitialCost(initialCost + 15.00)
    }

    const onSelected2 = () => {
        setSelected2(!selected2);
        if (selected2) setInitialCost(initialCost - 20.00)
        else setInitialCost(initialCost + 20.00)
    }

    const onSelected3 = () => {
        setSelected3(!selected3);
        if (selected3) setInitialCost(initialCost - 50.00)
        else setInitialCost(initialCost + 50.00)
    }
    return (
        <div className="Group32">
            <div className="SubGroup321">

                <div className="PlanCard">
                    <div className="Back">
                        <Link to="/datos-auto" replace={true} className="BackButton"><HiOutlineChevronLeft className=" {HiOutlineChevronLeft} " color={"#EF3340"} size={16} /></Link>
                        <div className="IncreaseH52">Volver</div>

                    </div>
                </div>

                <div className="PlanCard PlanCardColor">
                    <div className="IncreaseH22">Mira las coberturas</div>
                    <div className="IncreaseH42">Conoce las coberturas para tu plan</div>
                    <div className="CardView">
                        <div className="TextContentCard">
                            <div className="Number">Placa: {contextProvider.number}</div>
                            <div className="CarTitle">
                                <div className="NameCar">{contextProvider.car?.nameCar}</div>
                                <div className="NameCar">{contextProvider.car?.yearCar}</div>
                            </div>
                            <Link to="/datos-auto" replace={true} className="Edit" onClick={() => {
                                contextProvider.next = false;
                            }}>editar</Link>
                        </div>

                        <div className="ImageCardView"></div>
                    </div>
                </div>

                <div className="PlanCard">
                    <div className="AddRemove AddRemoveText">Agrega o quita coberturas</div>

                    <div>
                        <div className="HeaderTabViewContent">
                            <div className="HeaderTabView HeaderTabViewTouched">Protege a tu auto</div>
                            <div className="HeaderTabView" style={{ width: '110px' }}>Protege a los que te rodeaN</div>
                            <div className="HeaderTabView">mejora tu plAN</div>
                        </div>
                        <div className="HeaderLine">
                            <div className="Touched"></div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                    </div>

                    <div className="Expandable">
                        <div className="Image31 ImageContent"></div>
                        <div>
                            <div className="ExpandableHeader">
                                <div className="AddRemoveText">Llanta robada</div>
                                <div className="NoIcon">
                                    <HiOutlineChevronUp className=" {HiOutlineChevronUp} " color={"#EF3340"} size={20} />
                                </div>
                                <div className="NoToggle">
                                    <ToggleButton
                                        selected={selected}
                                        toggleSelected={() => {
                                            onSelected();
                                            setSelected(!selected);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="Back">
                                <div className="RemoveButton" onClick={onSelected}>
                                    {
                                        selected ? <HiMinusSm className=" {HiMinusSm} " color={"#939DFF"} size={16} /> : <HiPlus className=" {HiPlus} " color={"#939DFF"} size={16} />
                                    }
                                </div>
                                <div className="AddText RemoveText">{selected ? "quitar" : "agregar"}</div>

                            </div>
                            <h5 className="TextH5">
                                He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más
                            </h5>

                            <div className="ShowLessMoreContent">
                                <div className="ShowLessMoreText ShowLessColor"> VER Menos</div>
                                <HiOutlineChevronUp className=" {HiOutlineChevronUp} " color={"#A3ABCC"} size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="BigDivider2"></div>

                    <div className="Expandable">
                        <div className="Image32 ImageContent"></div>
                        <div>
                            <div className="ExpandableHeader">
                                <div className="AddRemoveText">Choque y/o pasarte la luz roja </div>
                                <div className="NoIcon">
                                    <HiOutlineChevronDown className=" {HiOutlineChevronDown} " color={"#EF3340"} size={20} />
                                </div>
                                <div className="NoToggle">
                                    <ToggleButton
                                        selected={selected2}
                                        toggleSelected={() => {
                                            onSelected2();
                                            setSelected2(!selected2);
                                        }}
                                    />
                                </div>

                            </div>

                            <div className="Back">
                                <div className="RemoveButton" onClick={onSelected2}>
                                    {
                                        selected2 ? <HiMinusSm className=" {HiMinusSm} " color={"#939DFF"} size={16} /> : <HiPlus className=" {HiPlus} " color={"#939DFF"} size={16} />
                                    }
                                </div>
                                <div className="AddText RemoveText">{selected2 ? "quitar" : "agregar"}</div>

                            </div>

                            <div className="ShowLessMoreContent">
                                <div className="ShowLessMoreText ShowMoreColor"> VER mas</div>
                                <HiOutlineChevronDown className=" {HiOutlineChevronDown} " color={"#6F7DFF"} size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="BigDivider2"></div>

                    <div className="Expandable">
                        <div className="Image33 ImageContent"></div>
                        <div>
                            <div className="ExpandableHeader">
                                <div className="AddRemoveText">Atropello en la vía Evitamiento </div>
                                <div className="NoIcon">
                                    <HiOutlineChevronDown className=" {HiOutlineChevronDown} " color={"#EF3340"} size={20} />
                                </div>
                                <div className="NoToggle">
                                    <ToggleButton
                                        selected={selected3}
                                        toggleSelected={() => {
                                            onSelected3();
                                            setSelected3(!selected3);
                                        }}
                                    />
                                </div>

                            </div>

                            <div className="Back">
                                <div className="RemoveButton" onClick={onSelected3}>
                                    {
                                        selected3 ? <HiMinusSm className=" {HiMinusSm} " color={"#939DFF"} size={16} /> : <HiPlus className=" {HiPlus} " color={"#939DFF"} size={16} />
                                    }
                                </div>
                                <div className="AddText RemoveText">{selected3 ? "quitar" : "agregar"}</div>

                            </div>

                            <div className="ShowLessMoreContent">
                                <div className="ShowLessMoreText ShowMoreColor"> VER mas</div>
                                <HiOutlineChevronDown className=" {HiOutlineChevronDown} " color={"#6F7DFF"} size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="BigDivider2"></div>


                </div>


                {/* {array && array.map(item => (
                        <div className="ABC"> {item}</div>
                    ))} */}
            </div>
            <div className="SubGroup322">

                <div className="Empty"></div>
                <div className="TotalContentGlobal">
                    <div className="TotalContent">
                        <div className="Total">$ {initialCost.toFixed(2)}</div>
                        <div className="Month">mensuales</div>
                    </div>
                    <div className="ImageShield"></div>
                </div>
                <div className="Details">
                    <div className="Divider"></div>
                    <div className="Text">El precio incluye:</div>
                    <div className="CheckList">
                        <HiCheck className=" {HiCheck} " color={"#43B748"} size={16} />
                        <h5 className="TextH5"> Llanta de respuesto</h5>
                    </div>
                    <div className="CheckList">
                        <HiCheck className=" {HiCheck} " color={"#43B748"} size={16} />
                        <div className="TextH5"> Analisis de motor</div>
                    </div>
                    <div className="CheckList">
                        <HiCheck className=" {HiCheck} " color={"#43B748"} size={16} />
                        <div className="TextH5"> Aros gratis</div>
                    </div>
                </div>

                <Link to="/welcome" itemProp={{ name: "welcome" }} className="Btn-Cot">lo quiero</Link>

            </div>



        </div>


    );
}


export const Stepper = ({ children }) => {
    const { contextProvider, setContextProvider } = useContext(Context)
    console.log(contextProvider);
    return (
        <div className="Content2">
            <NavBar />
            <div className="Group12">
                <div className="Step2">
                    <Link to="/" replace={true} className="BackButtonTop"><HiOutlineChevronLeft className=" {HiOutlineChevronLeft} " color={"#E4E8F7"} size={16} /></Link>
                    <div className="StepText StepTextPassed ">PASO {contextProvider.next ? "2" : "1"} de 2</div>
                    <div className="ProgressLine2">
                        <div className={`ProgressLineChild ${contextProvider.next ? "ProgressLineChild2" : "ProgressLineChild1"}`}/>
                    </div>
                </div>
                <div className="StepContent">
                    <div className="StepNumber StepNumberPassed None">1</div>
                    <div className="StepText StepTextPassed None">Datos del auto</div>
                </div>
                <div className="StepContent None">
                    <div className="ProgressLine" />
                </div>
                <div className="StepContent None">
                    <div className="StepNumber">2</div>
                    <div className="StepText">Arma tu plan</div>
                </div>
            </div>
            {children}
        </div>
    )
}
