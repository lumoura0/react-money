import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg';
export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay className="overlay" />
                        <Dialog.Content className="content">
                            <Dialog.Title className="title">Nova Transação</Dialog.Title>
                            <Dialog.Description className="description">Preencha os campos abaixo para cadastrar uma nova transação</Dialog.Description>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}