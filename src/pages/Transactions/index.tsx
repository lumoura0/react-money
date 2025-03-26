import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/index';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import { PriceHighLight, TransactionsContainer, TransactionsTable } from './style';

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions() {
    const [Transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()

        console.log(data)
        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return (
        <div>
            <Header />
            <Summary />


            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {Transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="40%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>{transaction.price}</PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}