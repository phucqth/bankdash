import Card from '../components/card';
import CreditCard from '../components/credit-card';
import NavTab from '../components/nav-tab';
import './transaction.scss';

import transactionData from '../fakeapi/transactions.json';

const TransactionPage = () => {
    const navList = [
        {
            name: 'All Transactions',
            component: <TransactionsTable type={'all'} />,
        },
        {
            name: 'Incomes',
            component: <TransactionsTable type={'income'} />,
        },
        {
            name: 'Expense',
            component: <TransactionsTable type={'expense'} />,
        },
    ];
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
            <div className='large-section-title'>Recent Transactions</div>
            <NavTab list={navList} style={{ marginBottom: '20px' }} />
        </>
    );
};

/**
 * @typedef {'all' | 'income' | 'expense'} Type
 * @type {React.FC<{ type: Type }>}
 * @type {string}
 */
const TransactionsTable = ({ type }) => {
    if (type !== 'all' && type !== 'income' && type !== 'expense') {
        throw new Error('Type must be "all", "income", or "expense"');
    }
    let finalData = transactionData;
    if (type !== 'all') {
        finalData = transactionData.filter(
            (item) => item.TransactionType === type
        );
    }
    return (
        <Card>
            <table border='1'>
                <tr className='hide-in-mobile'>
                    <th>Description</th>
                    <th>Transaction ID</th>
                    <th>Type</th>
                    <th>Card</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Receipt</th>
                </tr>
                {finalData.map((item) => {
                    return (
                        <tr>
                            <td>{item.Description}</td>
                            <td className='hide-in-mobile'>
                                {item['Transaction ID']}
                            </td>
                            <td className='hide-in-mobile'>{item.Type}</td>
                            <td className='hide-in-mobile'>{item.Card}</td>
                            <td className='hide-in-mobile'>{item.Date}</td>
                            <td
                                className={
                                    item.TransactionType === 'income'
                                        ? 'income'
                                        : 'expense'
                                }
                            >
                                {item.Amount}
                            </td>
                            <td className='hide-in-mobile item-center'>
                                <a href='/' className='download'>
                                    Download
                                </a>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </Card>
    );
};

export default TransactionPage;
