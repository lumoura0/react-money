import { Header } from '../../components/Header/index';
import { Summary } from '../../components/Summary';
import { PriceHighLight, TransactionsContainer, TransactionsTable } from './style';

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="40%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="40%">Coxinha</td>
                            <td>
                                <PriceHighLight variant="outcome">- R$ 5,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}