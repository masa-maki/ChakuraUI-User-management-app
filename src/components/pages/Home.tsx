import { memo, FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Image, Stack } from '@chakra-ui/react';
// import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { LinkPanel } from '../../atoms/button/LinkPanel';


export const Home: FC = memo(() => {
  const history = useHistory();
  const onClickUserManagement = useCallback(
    () => history.push('/home/user_management'),
    []
  );
  const onClickSetting = useCallback(
    () => history.push('/home/setting'),
    []
  );

  return (
    <div id="main">
      <h1>Home page</h1>
      {/* <p>This is a home page</p> */}
      <Stack direction={{base:'column', sm:'row'}} gap="1" >
        <LinkPanel imgUrl="../../public/management_image.jpg" onClick={onClickUserManagement}>
          User List
        </LinkPanel>
        <LinkPanel imgUrl="../../public/setting_image.jpg" onClick={onClickSetting}>
          Setting
        </LinkPanel>
        {/* <Image
          boxSize='30%'
          objectFit='cover'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        /> */}
      </Stack>
      {/* <PrimaryButton onClick={onClickUserManagement}>User List</PrimaryButton> */}
    </div>
  );
});
