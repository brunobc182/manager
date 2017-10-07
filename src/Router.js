import React from 'react';
import { Actions, Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                    titleStyle={{ alignSelf: 'center' }}
                    initial
                />

                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employee List"
                    titleStyle={{ alignSelf: 'center' }}
                />
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                    titleStyle={{ alignSelf: 'center' }}
                />
            </Stack>
        </Router>
    );
};

export default RouterComponent;
