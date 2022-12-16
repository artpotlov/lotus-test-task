import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from '@chakra-ui/react';
import {BiddingMemberList} from '../BiddingMemberList';
import React from 'react';

type TProps = {
  isOpen: boolean;
  onCloseHandler: () => void;
}
export const BiddingModal = ({isOpen, onCloseHandler}: TProps) => {
  return (
    <Modal
      size="full"
      isOpen={isOpen}
      onClose={onCloseHandler}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ход торгов</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <BiddingMemberList />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
