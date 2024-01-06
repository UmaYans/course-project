import { Suspense } from 'react';
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/utils/classNames/classNames';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])} >
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'} >Гланая</Link>
            <Link to={'/about'} >О нас</Link>
            <Suspense fallback={<div> Loading...</div>} >
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
