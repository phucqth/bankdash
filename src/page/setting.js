import { useState } from 'react';
import Card from '../components/card';
import './setting.scss';
const SettingPage = () => {
    const [choose, setChoose] = useState('nav-item-0');
    const navList = ['Edit Profile', 'Preferences', 'Security'];
    return (
        <Card>
            <div className='nav'>
                {navList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`nav-item ${
                                choose === `nav-item-${index}` ? 'active' : ''
                            }`}
                            onClick={() => setChoose(`nav-item-${index}`)}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
            {choose === 'nav-item-0' && (
                <div className='setting-content'>
                    <img
                        src='https://i.pravatar.cc/300'
                        alt='avatar'
                        className='setting-avt'
                    />
                    <div className='setting-form'>
                        <div className='form-group'>
                            <label>Your Name</label>
                            <input placeholder={profileData.name} />
                        </div>
                        <div className='form-group'>
                            <label>Username</label>
                            <input placeholder={profileData.username} />
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input
                                placeholder={profileData.email}
                                type='email'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Present Address</label>
                            <input placeholder={profileData.presentAddress} />
                        </div>
                        <div className='form-group'>
                            <label>Day of Birth</label>
                            <input placeholder={profileData.birthday} />
                        </div>
                        <div className='form-group'>
                            <label>City</label>
                            <input placeholder={profileData.city} />
                        </div>
                        <div className='form-group'>
                            <label>Permanent Address</label>
                            <input placeholder={profileData.permanentAddress} />
                        </div>
                        <div className='form-group'>
                            <label>Country</label>
                            <input placeholder={profileData.country} />
                        </div>
                        <div className='form-group'>
                            <label>Postal Code</label>
                            <input placeholder={profileData.postalCode} />
                        </div>
                    </div>
                </div>
            )}
            {choose === 'nav-item-1' && (
                <>
                    <div className='preference-form'>
                        <div className='form-group'>
                            <label>Currency</label>
                            <input placeholder='USD' />
                        </div>
                        <div className='form-group'>
                            <label>Time Zone</label>
                            <input placeholder='(GMT-12:00) International Date Line West' />
                        </div>
                    </div>
                    <div>Notification</div>
                    <div className='btn-save'>Save</div>
                </>
            )}
            {choose === 'nav-item-2' && <div>Security</div>}
        </Card>
    );
};

const profileData = {
    name: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    birthday: '25 January 1990',
    permanentAddress: 'San Jose, California, USA',
    postalCode: '8888',
    username: 'charlene.reed',
    presentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    country: 'USA',
};
export default SettingPage;
