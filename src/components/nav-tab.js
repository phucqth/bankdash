import { useState } from 'react';
import './nav-tab.scss';
const NavTab = ({ list, key, ...props }) => {
    const [choose, setChoose] = useState(0);
    return (
        <div key={key}>
            <div className='nav' {...props}>
                {list.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`nav-item ${
                                choose === index ? 'active' : ''
                            }`}
                            onClick={() => setChoose(index)}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>

            {list[choose].component}
        </div>
    );
};

export default NavTab;
