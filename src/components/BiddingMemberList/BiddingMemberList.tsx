import {Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {selectMembers} from '../../store/selectors/members.selector';
import {fetchBiddingTimer, fetchMembers} from '../../store/thunks/thunks';
import {selectBiddingTimer} from '../../store/selectors/biddingTimer.selector';
import {BiddingTimer} from '../BiddingTimer';

export const BiddingMemberList = () => {
  const {isLoading, members} = useAppSelector(selectMembers);
  const {currentMemberID} = useAppSelector(selectBiddingTimer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMembers());
    dispatch(fetchBiddingTimer());

    const intervalUpdater = setInterval(() => {
      dispatch(fetchBiddingTimer());
    }, 1000);

    return () => {
      clearInterval(intervalUpdater);
    };
  }, [dispatch]);

  return isLoading
    ? <div>Загрузка данных...</div>
    : <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Ход</Th>
            {members.map(member => <Th key={member.id}>{member.id === currentMemberID ? <BiddingTimer /> : null}</Th>)}
          </Tr>
          <Tr>
            <Th>
              Параметры и требования
            </Th>
            {members.map(e => <Th key={e.id}>Участник<br/>{e.name}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Наличие комлекса мероприятий, повышающих стандарты качества изготовления</Td>
            {members.map(member => <Td key={member.id}>{member.standartQuality}</Td>)}
          </Tr>
          <Tr>
            <Td>Срок изготовления лота, дней</Td>
            {members.map(member => <Td key={member.id}>{member.prodTime}</Td>)}
          </Tr>
          <Tr>
            <Td>Гарантийные обязательства, мес</Td>
            {members.map(member => <Td key={member.id}>{member.garantTime}</Td>)}
          </Tr>
          <Tr>
            <Td>Условия оплаты</Td>
            {members.map(member => <Td key={member.id}>{member.paymentCondition}</Td>)}
          </Tr>
          <Tr>
            <Td>Стоимость изготовления лота, руб. (без НДС)</Td>
            {members.map(member => <Td key={member.id}>{member.price}</Td>)}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>;
};
