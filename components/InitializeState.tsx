// components/InitializeState.tsx
'use client';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadStateFromLocalStorage } from '@/redux/slices/calculationSlice';

const InitializeState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStateFromLocalStorage());
  }, [dispatch]);

  return null;
};

export default InitializeState;
