import { bell, setting, search } from '../ultis/Image';
const Header = () => {
    return (
        <div className='header'>
            <div className='page-title'>Overview</div>
            <div className='header-action'>
                <div className='header-search'>
                    <img src={search} alt='search' className='search-icon' />
                    <input placeholder='Search for something' />
                </div>
                <div className='action-btn'>
                    <img src={setting} alt='setting' />
                </div>
                <div className='action-btn'>
                    <img src={bell} alt='setting' />
                </div>
                <img
                    src='https://i.pravatar.cc/300'
                    alt='avatar'
                    className='avatar'
                />
            </div>
        </div>
    );
};

export default Header;
