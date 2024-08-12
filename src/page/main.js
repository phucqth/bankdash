import { LineChart } from '../components/chart';
import CreditCard from '../components/credit-card';
import './main.scss';
const MainPage = () => {
    return (
        <>
            <div className='col-8'>
                <div className='section-title'>
                    <h4>My card</h4>
                    <p>See All</p>
                </div>
                <div className='row'>
                    <CreditCard />
                    <CreditCard />
                </div>
            </div>
            <div className='col-4'>
                <div className='section-title'>
                    <h4>Monthly Report</h4>
                </div>
            </div>
            <div className='col-8'>
                <div className='section-title'>
                    <h4>Weekly Report</h4>
                </div>

                <LineChart />
            </div>
        </>
    );
};

export default MainPage;
