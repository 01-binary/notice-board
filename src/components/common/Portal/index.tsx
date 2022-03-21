import React, { FC, useMemo } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  elementId: string;
};

const Portal: FC<Props> = ({ children, elementId = 'root' }) => {
  const rootElement = useMemo(
    () => document.getElementById(elementId),
    [elementId],
  );
  if (!rootElement) return null;
  return createPortal(children, rootElement);
};

export default Portal;
