import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState(initialFormState);

    useEffect(() => {
        axios
          .get('/students')
          .then(({ data }) => setUsers(data.students))
          .catch((err) => console.log(err));
      }, []);

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

       
