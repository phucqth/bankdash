import { NavLink } from 'react-router-dom';
import {
    logo,
    home,
    tranfer,
    user,
    economic,
    creditCard,
    loan,
    service,
    econometrics,
    settingsSolid,
} from '../ultis/Image';
import './sidebar.scss';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <NavLink className='logo' to='/'>
                <img src={logo} alt='logo' />
            </NavLink>
            <div className='menu'>
                {menuArray.map((item, index) => {
                    return (
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'menu-btn  active' : 'menu-btn'
                            }
                            key={index}
                            to={item.link}
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className='menu-icon'
                            />
                            {item.title}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};
const menuArray = [
    { title: 'Dashboard', link: '/', icon: home },
    { title: 'Transactions', link: '/transactions', icon: tranfer },
    { title: 'Accounts', link: '/accounts', icon: user },
    { title: 'Investments', link: '/investments', icon: economic },
    { title: 'Credit Cards', link: '/credit-cards', icon: creditCard },
    { title: 'Loans', link: '/loans', icon: loan },
    { title: 'Services', link: '/services', icon: service },
    { title: 'My Privileges', link: '/privileges', icon: econometrics },
    { title: 'Settings', link: '/settings', icon: settingsSolid },
];
export default Sidebar;
