import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
    return ( 
        <Wrapper>
            <StyledAverage>{average}</StyledAverage>
                <StyledInfo>
                    <p>{name}</p>
                    <p>{attendance}</p>
                </StyledInfo>
            <DeleteButton />
        </Wrapper>
     );
}

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string.isRequired,
    })
};
 
export default UsersListItem;