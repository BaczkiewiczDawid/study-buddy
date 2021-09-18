import { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usersData) {
                resolve([...usersData]);
            }  else {
                reject({message: 'Error'});
            }
        }, 2000)
    })
}

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState([]);

    useEffect(() => {
        setLoadingState(true);
        mockAPI()
            .then((data) => {
                setLoadingState(false);
                setUsers(data);
         })
        .catch((err) => console.log(err));
    }, []);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name);
        setUsers(filteredUsers);
    };

    return ( 
        <>
            <Wrapper>
                <StyledTitle>Add new student</StyledTitle>
                <FormField label="name" id="name" name="name" />
                <FormField label="Attendance" id="name" name="name" />
                <FormField label="Average" id="name" name="name" />
                <Button>Add</Button>
            </Wrapper>
            <Wrapper>
                <StyledTitle>{isLoading ? 'Loading...' : 'Users List'}</StyledTitle>
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