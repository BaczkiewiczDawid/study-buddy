import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'
import { StyledButton } from './DeleteButton.styles'

const DeleteButton = () => (
    <StyledButton>
        <DeleteIcon />
    </StyledButton>
);

export default DeleteButton;