import React, { useState } from 'react';
import { users as usersData } from 'data/users'

export const UsersContext = React.createContext({
    users: [],
    handleAddUser: () => {},
    deleteUser: () => {},
});

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
  }

const UsersProvider = ({children}) => {
    const [users, setUsers] = useState(usersData);
    const [formValues, setFormValues] = useState(initialFormState);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name);
        setUsers(filteredUsers);
    };


    const handleAddUser = (formValues) => {
        const newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average,
        };

        setUsers([newUser, ...users]);
        setFormValues(initialFormState);
    };

    return (
        <UsersContext.Provider
        value={{
            users,
            handleAddUser,
            deleteUser,
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;

       
