import { memo, FC, ReactNode } from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  imgUrl: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const LinkPanel: FC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, imgUrl, onClick } = props;
  return (
    <Button
      backgroundColor="teal.400"
      color="white"
      w="100%"
      h="20vh"
      fontSize={"4vw"}
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
      // sx={{flexGrow:1}}
    >
      {children}
    </Button>

    // <Box pos="relative" boxSize="50%" sx={{width: "50vw", height: "30vh", backgroundColor: "teal.500"}}>
    //     {/* <Image
    //       boxSize="full"
    //       objectFit='contain'
    //       src={imgUrl}
    //       alt={children}
    //       onClick={onClick}
    //       sx={{borderRadius: 8, }}
    //     /> */}
    //     <Text pos="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" color="white" sx={{fontWeight: 800, fontSize: "5vw"}}>
    //      {children}
    //     </Text>
    // </Box>
  );
});
