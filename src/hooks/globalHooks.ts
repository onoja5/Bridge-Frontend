import { useState } from 'react';

export const useGlobalHooks = () => {
  const [loading, setLoading] = useState<{ [key: string | number]: boolean }>(
    {},
  );
  const [errors, setErrors] = useState({ error: false, errMessage: '' });

  // const handleShow = (id: string | number) => {
  //   dispatch(toggleShow(id));
  // };

  return {
    loading,
    setLoading,
    errors,
    setErrors,
    open,
  };
};
