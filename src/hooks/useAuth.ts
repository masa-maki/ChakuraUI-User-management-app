import { useCallback, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { User } from '../types/api/user';
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string, pwd: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data && pwd) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "You've logged in", status: 'success' });
            history.push('/home');
          } else {
            showMessage({ title: 'Incorrect User or Password', status: 'error' });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: 'Incorrect User or Password', status: 'error' });
          setLoading(false);
        })
        .finally();
    },
    [history, showMessage]
  );

  return { login, loading, setLoginUser };
};
