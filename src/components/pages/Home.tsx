import { memo, FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

export const Home: FC = memo(() => {
  const history = useHistory();
  const onClickUserManagement = useCallback(
    () => history.push('/home/user_management'),
    []
  );

  return (
    <div id="main">
      <h1>Home page</h1>
      <p>This is a home page</p>
      <PrimaryButton onClick={onClickUserManagement}>User List</PrimaryButton>
    </div>
  );
});
