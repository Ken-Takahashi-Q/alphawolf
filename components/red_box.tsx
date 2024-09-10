import { RootState } from '@/redux/store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';

const RedBox: React.FC = () => {
  const cart = useSelector((state: RootState) => state.globalState.cart);
  return (
    <div
      className={`${cart > 0 ? 'block' : 'hidden'} border-1 24 absolute right-7 top-7 z-10 flex h-3 w-3 items-center justify-center rounded-full border-solid border-white bg-red-500 text-center text-xs`}
    >
      {cart}
    </div>
  );
};

export default RedBox;
