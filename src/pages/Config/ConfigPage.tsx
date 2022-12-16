import React, {useState} from 'react';
import {Button, Container, Flex, FormControl, FormLabel, Input, Select} from '@chakra-ui/react';
import {updateTimer} from '../../api/api';

const ConfigPage = () => {
  const [secondVal, setSecondVal] = useState(120);
  const [memberVal, setMemberVal] = useState('1');

  const sendData = () => {
    updateTimer({
      currentMemberID: memberVal,
      updatedLotTime: Date.now() + secondVal * 1000,
    });
  };

  return (
    <Container
      mt={10}
    >
      <Flex
        flexDirection="column"
        gap={4}
      >
        <FormControl>
          <FormLabel>Участник</FormLabel>
          <Select value={memberVal} onChange={(e) => setMemberVal(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Время на ход в секундах</FormLabel>
          <Input type="number" value={secondVal} onChange={(e) => setSecondVal(+e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={sendData}>Обновить данные</Button>
      </Flex>
    </Container>
  );
};

export default ConfigPage;
