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
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='menu'>
                {menuArray.map((item, index) => {
                    return (
                        <div
                            className={`menu-btn ${
                                index === 1 ? 'active' : ''
                            }`}
                            key={index}
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className='menu-icon'
                            />
                            {item.title}
                        </div>
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
