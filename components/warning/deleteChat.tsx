import { setIsShowDeleteChatConfirm } from '@/redux/reducers/globalReducer';
import { setIsShowTutorial, setMessages } from '@/redux/reducers/messagesReducer';
import { RootState } from '@/redux/store/reducers';
import { Flex, Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSecondary from '../button/buttonSecondary';
import ButtonWarning from '../button/buttonWarning';

const DeleteChatConfirm: React.FC = () => {
  const dispatch = useDispatch();

  const isShowDeleteChatConfirm = useSelector((state: RootState) => state.globalState.isShowDeleteChatConfirm);

  const cancelDeleteChat = () => {
    dispatch(setIsShowDeleteChatConfirm(false))
  }

  const confirmDeleteChat = () => {
    dispatch(setIsShowDeleteChatConfirm(false))
    dispatch(setIsShowTutorial(true))
    dispatch(setMessages([]))
  }

  return (
    <Modal
      open={isShowDeleteChatConfirm}
      title="ยืนยันลบประวัติการแชท"
      // onOk={handleOk}
      onCancel={() => dispatch(setIsShowDeleteChatConfirm(false))}
      footer={ (
        <Flex justify="flex-end" align="flex-end" gap="small">
          <ButtonSecondary text="ยกเลิก" onClick={cancelDeleteChat}/>
          <ButtonWarning text="ยืนยัน" onClick={confirmDeleteChat}/>
        </Flex>
      )}
      centered
    />
  );
};

export default DeleteChatConfirm;
