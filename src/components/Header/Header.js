import { NavLink } from 'react-router-dom';
import styles from './Header.css';

export const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {
    const handleLogOut = () => {
        localStorage.removeItem('todos');
        localStorage.setItem('isLoggedIn', false);
        setIsLoggedIn(false);
    };

    return (
        <header className={styles.Header}>

            {
                isLoggedIn ?
                    <nav>
                        Sveiks,&nbsp;<strong>{userName}</strong>!
                        <NavLink
                            onClick={handleLogOut}
                            activeclassname={styles.activeLink}
                            exact="true" to="/login">
                            ↪ Izlogoties
                        </NavLink>
                    </nav>

                    : "Sveiks, čoms!"
            }


        </header>
    )
}