import { useCallback, useState } from 'react';

import { User } from '../types/api/user';

export const useSelectUser = () => {
  type Props = {
    id: number;
    users: Array<User>;
    onOpen: () => void;
  };

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // A Custome Hook to identify user and show modal
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null); // if targetUser is undefined, return null
    // setSelectedUser(targetUser!); // make clear that targetUser always exist (expression for tyepscript)
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
