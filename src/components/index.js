// import { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { useHistory } from "react-router-dom";
// import Context from '../../context/customContext';
import { ContextProvider } from '../context/customContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Group21, Group22, Stepper } from './car-data/CarData';
import Welcome from './welcome/Welcome';
import Home from './home/Home';

const RootApp = () => {
    return (
        <ContextProvider >
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/inicio/:name/:email" sensitive={true}>
                        <Stepper>
                            <Group21 />
                        </Stepper>
                    </Route>

                    <Route path="/datos-auto">
                        <Stepper>
                            <Group21 />
                        </Stepper>

                    </Route>

                    <Route path="/armar-plan">
                        <Stepper>
                            <Group22 />
                        </Stepper>
                    </Route>

                    <Route path="/welcome" exact>
                        <Welcome />
                    </Route>
                </Switch>
            </Router>
        </ContextProvider>
    )
}

export default RootApp;
