import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { Container } from './styles';

Modal.setAppElement("#root")

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-model-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Titulo" />
                <input
                    type="number"
                    placeholder="Valor" />
                <input
                    placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}