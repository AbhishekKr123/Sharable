import React from 'react';
import UserList from '../components/userList/UserList';
import pic from '../../images/abhi.jpg';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Abhi',
      image: pic,
      places: 3
    }
  ];

  return <UserList items={USERS} />;
};

export default Users;
