import BarChart from '../components/bar-chart';
import { LineChart } from '../components/chart';
import CreditCard from '../components/credit-card';
import PieChart from '../components/pie-chart';
import { next, send } from '../ultis/Image';
import './main.scss';
const MainPage = () => {
    return (
        <>
            <div className='d-row-m-col'>
                <div className='col-8'>
                    <div className='section-title'>
                        <h4>My card</h4>
                        <p>See All</p>
                    </div>
                    <div className='cards-wrapper'>
                        <CreditCard active={true} />
                        <CreditCard />
                    </div>
                </div>
                <div className='col-4'>
                    <div className='section-title'>
                        <h4>Recent Transaction</h4>
                    </div>
                    <div className='card-transaction'>
                        <p>No transactions yet</p>
                    </div>
                </div>
            </div>

            <div className='d-row-m-col'>
                <div className='col-8'>
                    <div className='section-title'>
                        <h4>Weekly Activity</h4>
                    </div>
                    <div className='weekly-chart'>
                        <BarChart />
                    </div>
                </div>

                <div className='col-4'>
                    <div className='section-title'>
                        <h4>Expense Statistics</h4>
                    </div>
                    <div className='pie-chart'>
                        <PieChart />
                    </div>
                </div>
            </div>

            <div className='d-row-m-col'>
                <div style={{ width: '100%' }}>
                    <div className='section-title'>
                        <h4>Quick Tranfer</h4>
                    </div>
                    <div className='card-tranfer'>
                        <div className='list-tranfer'>
                            {listTransfer.map((item, index) => {
                                return (
                                    <div
                                        className={
                                            'tranfer-item' +
                                            (index === 0 ? ' item-active' : '')
                                        }
                                        key={index}
                                    >
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                        />
                                        <p>{item.name}</p>
                                        <p>{item.role}</p>
                                    </div>
                                );
                            })}
                            <div className='btn-next'>
                                <img src={next} alt='' />
                            </div>
                        </div>
                        <div className='tranfer-action'>
                            <p>Write Amount</p>
                            <div className='tranfer-input'>
                                <input type='text' placeholder='0.00' />
                                <div className='tranfer-btn'>
                                    Send
                                    <img
                                        src={send}
                                        alt=''
                                        className='btn-icon'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='balance-wrapper'>
                    <div className='section-title'>
                        <h4>Blance History</h4>
                    </div>

                    <div className='balance-history'>
                        <LineChart />
                    </div>
                </div>
            </div>
        </>
    );
};

const listTransfer = [
    {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/110',
        role: 'CEO',
    },
    {
        name: 'Ryan',
        avatar: 'https://i.pravatar.cc/120',
        role: 'Developer',
    },
    {
        name: 'Michael',
        avatar: 'https://i.pravatar.cc/130',
        role: 'Graphic',
    },
];

export default MainPage;
