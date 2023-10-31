import { useEffect, useState } from 'react';
import getUsersFetch from '../services/fetchData.js';

export default function useRandomUsers() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState();
  const [filtered, setFiltered] = useState();

  const getUsers = async (num) => {
    try {
      setLoading(true);
      const data = await getUsersFetch(num);
      setUsers(data);

      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFiltered(users);
  }, [users]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await getUsers(e.target[0].value);
    setUsers(results);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setFiltered(
      users.filter((user) =>
        user.name.first.toLowerCase().includes(value.toLowerCase())
      )
    );
    return filtered;
  };

  return {
    getUsers,
    users,
    setUsers,
    loading,
    handleChange,
    handleSubmit,
    filtered,
  };
}
