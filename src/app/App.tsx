import './styles/index.scss'
import { Link } from 'react-router-dom';
import { classNames } from 'shared/utils/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])} >
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'} >Гланая</Link>
            <Link to={'/about'} >О нас</Link>
            <AppRouter />
        </div>
    );
};
