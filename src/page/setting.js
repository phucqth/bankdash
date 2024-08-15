import { useState, useRef } from 'react';
import Card from '../components/card';
import './setting.scss';
import { pencilEdit } from '../ultis/Image';
import NavTab from '../components/nav-tab';
const SettingPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
            alert('Please select a PNG or JPEG image file.');
            return;
        }

        if (file.size > 1024 * 1024) {
            alert('File size should not exceed 1MB.');
            return;
        }

        setSelectedFile(event.target.files[0]);
    };
    const handleChangeAvatar = () => {
        fileInputRef.current.click();
    };
    const navList = [
        {
            name: 'Profile',
            component: (
                <div className='setting-content'>
                    <div className='setting-avt-group'>
                        <img
                            src={
                                (selectedFile &&
                                    URL.createObjectURL(selectedFile)) ||
                                'https://i.pravatar.cc/300'
                            }
                            alt='avatar'
                            className='setting-avt'
                        />
                        <div
                            className='btn-edit'
                            onClick={() => {
                                handleChangeAvatar();
                            }}
                        >
                            <input
                                label='Edit'
                                type='file'
                                onChange={handleFileChange}
                                ref={fileInputRef}
                            />
                            <img src={pencilEdit} alt='edit' />
                        </div>
                    </div>
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
            ),
        },
        {
            name: 'Preferences',
            component: (
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
                    <div className='form-group'>
                        <div className='btn-save'>Save</div>
                    </div>
                </>
            ),
        },
        {
            name: 'Security',
            component: <div>Security</div>,
        },
    ];

    return (
        <Card>
            <NavTab list={navList} />
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
