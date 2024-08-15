import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './page/main';
import DefaultLayout from './layout/default-layout';
import './styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SettingPage from './page/setting';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <DefaultLayout>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/settings' element={<SettingPage />} />
                </Routes>
            </DefaultLayout>
        </BrowserRouter>
    </React.StrictMode>
);
