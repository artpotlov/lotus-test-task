import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../hooks/redux';
import {selectBiddingTimer} from '../../store/selectors/biddingTimer.selector';
import {Flex, Text} from '@chakra-ui/react';

export const BiddingTimer = () => {
  const {updatedLotTime} = useAppSelector(selectBiddingTimer);
  const [timeString, setTimeString] = useState('');

  const getTimeString = (e: number) => e > 9 ? e : '0' + e;

  useEffect(() => {
    const timer = setInterval(() => {
      const timeDiff = new Date(updatedLotTime - Date.now());
      const h = timeDiff.getUTCHours();
      const m = timeDiff.getUTCMinutes();
      const s = timeDiff.getUTCSeconds();

      if (timeDiff.getTime() < 0) {
        setTimeString('');
        return;
      }

      setTimeString(`${getTimeString(h)}:${getTimeString(m)}:${getTimeString(s)}`);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [updatedLotTime]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="30px"
    >
      {
        !!timeString &&
          <Text
            w="100%"
            p={2}
            textAlign="center"
            color="white"
            bg="red.300"
            borderRadius={2}
          >
            {timeString}
          </Text>
      }
    </Flex>
  );
};
