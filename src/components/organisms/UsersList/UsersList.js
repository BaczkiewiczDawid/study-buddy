import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';

const UsersList = ({ deleteUser, users}) => {
    return ( 
        <>
            <Wrapper>
                <StyledTitle>Students list</StyledTitle>
                <StyledList>
                    {users.map((userData) => (
                        <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
                    ))}
                </StyledList>
            </Wrapper>
        </>
     );
}
 
export default UsersList;