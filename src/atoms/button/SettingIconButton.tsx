import { IconButton } from '@chakra-ui/react';
import { memo, FC } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';

type Props = {
  onOpen: () => void;
};

export const SettingIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="Setting button"
      icon={<SettingsIcon />}
      size="m"
      variant="unstyled"
      onClick={onOpen}
    />
  );
});
