import React, { useEffect, useState } from 'react';
import { CheckHeading } from '../Helper';

const Answer = ({ ans, index, total }) => {
  const [hasRendered, setHasRendered] = useState(false);
  const isHeading = CheckHeading(ans);

  useEffect(() => {
    console.log("Rendered:", ans, "| Heading:", isHeading);
    setHasRendered(true);
  }, [ans]);

  let contentClass = '';

  if (index === 0 && total > 1) {
    // Apply yellow title style only if there are multiple items
    contentClass = 'text-2xl font-bold text-yellow-300 mb-3';
  } else if (isHeading) {
    contentClass = 'text-lg font-bold text-blue-400 mt-4 mb-1';
  } else {
    contentClass = 'pl-5 text-white text-sm';
  }

  return (
    <div className={`my-1 ${contentClass}`}>
      {ans}
    </div>
  );
};

export default Answer;
