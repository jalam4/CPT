import { Provider, useSelector } from 'react-redux'
import { fireEvent, getByText, render, screen } from '@testing-library/react';

import store from '../../Store';
import { HashRouter, Route, Router, Routes } from 'react-router-dom';
import { APP_ROUTES } from '../../constants';
import LoginPage from '../../LoginPage/LoginPage';
import Dashboard from '../../Dashboard/Dashboard';
import ProjectInfo from './ProjectInfo';



test("Employee renders", async () => {
    render(<Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path={APP_ROUTES.LOGINPAGE} element={<LoginPage />} />                
            </Routes>
        </HashRouter>
    </Provider>)
    const inputUsername = screen.getByPlaceholderText('USERNAME');
    fireEvent.change(inputUsername, {target: {value: 'tadmin'}})
    const inputPwd = screen.getByPlaceholderText('PASSWORD');
    fireEvent.change(inputPwd, {target: {value: 'TestAdmin@123'}})
    // console.log("Username: ", inputUsername);
    // console.log("Password: ", inputPwd);
    const loginBtn = screen.getByRole('button');
    // console.log("Login Button: ", loginBtn);
    await fireEvent.submit(loginBtn);
    render(<Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />                
            </Routes>
        </HashRouter>
    </Provider>)
    const textEmpl = screen.getAllByRole('link');
    // console.log("Employee Dropdown: ", textEmpl[3]);
    fireEvent.click(textEmpl[3]);
    // expect(textEmpl).toBeInTheDocument;
   render(<Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path={APP_ROUTES.PROJECTINFO} element={<ProjectInfo />} />                
            </Routes>
        </HashRouter>
    </Provider>)
    
    setTimeout(()=>{
        const textElement = screen.getByText('Download');
        const textElement1 = screen.getByText('Add Project');
        const textElement2 = screen.getByText('Columns');

        expect(textElement).toBeInTheDocument;      
        expect(textElement1).toBeInTheDocument;
        expect(textElement2).toBeInTheDocument;
    }, 2005);
})

