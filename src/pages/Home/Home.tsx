import React from 'react';
import {Button, Container, Link, Stack, Text, useDisclosure} from '@chakra-ui/react';
import {BiddingModal} from '../../components/BiddingModal';

const HomePage = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Container
        mt={10}
      >
        <Stack spacing={4}>
          <Text>Для обновления таймера необходимо перейти на страницу&#32;
            <Link href="/config" target="_blank">конфигурации</Link></Text>
          <Button onClick={onOpen}>Открыть торги</Button>
          <Text fontSize="sm">Исходный код также доступен на&#32;
            <Link href="https://github.com/artpotlov/lotus-test-task">Github</Link></Text>
        </Stack>
      </Container>
      <BiddingModal isOpen={isOpen} onCloseHandler={onClose} />
    </>
  );
};

export default HomePage;
