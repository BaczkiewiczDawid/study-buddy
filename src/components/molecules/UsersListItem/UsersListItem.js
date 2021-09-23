import React, { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
    const { deleteUser } = useContext(UsersContext);

    return ( 
        <Wrapper>
            <StyledAverage value={average}>{average}</StyledAverage>
                <StyledInfo>
                    <p>{name}</p>
                    <p>{attendance}</p>
                </StyledInfo>
            <DeleteButton onClick={() => deleteUser(name)} />
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