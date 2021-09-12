import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = () => {
    return ( 
        <Wrapper>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItem userData={userData} />
                ))}
            </StyledList>
        </Wrapper>
     );
}
 
export default UsersList;