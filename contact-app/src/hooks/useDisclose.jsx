import { useState } from 'react';

const useDisclose = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Return them in an array or object (array preferred like useState)
  return [isOpen, onClose, onOpen];
};

export default useDisclose;
