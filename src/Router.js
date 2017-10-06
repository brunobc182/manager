import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={LoginForm} title="Please Login" />
                <Scene
                    onRight={() => console.log('Olar')}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employee List"
                />
            </Stack>
        </Router>
    );
};

export default RouterComponent;
