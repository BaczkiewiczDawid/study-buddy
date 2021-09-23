import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';

const UsersList = ({ users}) => {
    return ( 
        <>
            <Wrapper>
                <StyledTitle>Students list</StyledTitle>
                <StyledList>
                    {users.map((userData) => (
                        <UsersListItem key={userData.name} userData={userData} />
                    ))}
                </StyledList>
            </Wrapper>
        </>
     );
}
 
export default UsersList;