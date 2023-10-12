import { Provider, useSelector } from 'react-redux'
import { cleanup, fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react';
import { HashRouter, Route, Router, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import store from '../Store';
import { APP_ROUTES } from '../constants';
import Dashboard from '../Dashboard/Dashboard';
import EmployeeMaster from '../Master/EmployeeMaster/EmployeeMaster';


// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("Login renders", async () => {
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
    const renderedPage = screen.getByTestId('TestingDashboard');
    expect(renderedPage).toBeInTheDocument; 
})
