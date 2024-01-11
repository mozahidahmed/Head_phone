import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../loading/Loading';
import UserCard from './UserCard';
import ShopNow from './../../ShopNow';

const AllUser = () => {
     const {
       data: users,
       isLoading,
       refetch,
     } = useQuery(["user"], () =>
       fetch("http://localhost:5000/user", {
         headers: {
           // 'content-type': 'application/json'
           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
         },
       }).then((res) => res.json())
     );
     if (isLoading) {
       return <Loading></Loading>;
     }
   
    return (
      <div>
        <div className="grid container py-16 gap-2 ">
          {users?.map((user, index) => (
            <UserCard user={user} index={index} refetch={refetch}></UserCard>
          ))}
        </div>
      </div>
    );
};

export default AllUser;