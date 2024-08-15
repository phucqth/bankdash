import { useState } from 'react';
import { bell, setting, search, hamburger } from '../ultis/Image';
import './header.scss';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='header'>
                <div className='header-desktop'>
                    <div className='page-title'>Overview</div>
                    <div className='header-action'>
                        <div className='header-search'>
                            <img
                                src={search}
                                alt='search'
                                className='search-icon'
                            />
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
                <div className='header-mobile'>
                    <div className='header-top'>
                        <div
                            className='header-menu-btn'
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <img src={hamburger} alt='setting' />
                        </div>
                        <div className='page-title'>Overview</div>
                        <img
                            src='https://i.pravatar.cc/300'
                            alt='avatar'
                            className='avatar'
                            onClick={() => {
                                alert('hello');
                            }}
                        />
                    </div>

                    <div className='header-search'>
                        <img
                            src={search}
                            alt='search'
                            className='search-icon'
                        />
                        <input placeholder='Search for something' />
                    </div>
                </div>
            </div>
            <div
                className={
                    open ? 'header-menu-overlay active' : 'header-menu-overlay'
                }
            >
                1111111111111
            </div>
        </>
    );
};

export default Header;
