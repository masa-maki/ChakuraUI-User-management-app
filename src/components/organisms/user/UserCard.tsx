import { memo, FC } from 'react';
import { Box, Heading, Image, Stack, Text, color } from '@chakra-ui/react';

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w="100%"
      bg="white"
      borderRadius="10px"
      shadow="sm"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8, color: 'teal.500', shadow: "md" }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center" >
        <Image
          boxSize="160"
          borderRadius="full"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Heading fontSize="lg" fontWeight="bold">
          {userName}
        </Heading>
        <Text fontSize="sm" colo="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
