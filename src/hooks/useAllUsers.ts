// ユーザー取得のカスタムフック

import axios from "axios";
import { useState } from "react";

import { UserProf } from "../types/UserProf";
import { User } from "../types/api/user";

export const useAllUsers = () => {
  const [userProfile, setUserProfile] = useState<Array<UserProf>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfile(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getUsers, userProfile, loading, error };
};
