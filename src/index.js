import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './page/main';
import DefaultLayout from './layout/default-layout';
// import './styles/global.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DefaultLayout>
            <MainPage />
        </DefaultLayout>
    </React.StrictMode>
);
