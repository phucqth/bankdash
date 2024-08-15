import { chipCard, masterCard } from '../ultis/Image';
import './credit-card.scss';
const CreditCard = ({ active }) => (
    <div className={`credit-card ${active ? 'card-default' : ''}`}>
        <div className='card-top'>
            <div>
                <p>Balance</p>
                <p className='balance'>$1,000</p>
            </div>
            <img src={chipCard} alt='card' className='chip' />
        </div>
        <div className='card-body'>
            <div>
                CARD HOLDER
                <p>John Doe</p>
            </div>
            <div>
                VALID THRU
                <p>09/24</p>
            </div>
        </div>
        <div className='card-footer'>
            <p>9999 **** **** 8888</p>
            <img src={masterCard} alt='card' className='card-logo' />
        </div>
    </div>
);

export default CreditCard;
