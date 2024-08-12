import './default.scss';
import Header from './header';
import Sidebar from './sidebar';

const DefaultLayout = ({ children }) => {
    return (
        <div className='default-layout'>
            <Sidebar />
            <div className='right-side'>
                <Header />
                <div className='content'>{children}</div>
            </div>
        </div>
    );
};
export default DefaultLayout;
