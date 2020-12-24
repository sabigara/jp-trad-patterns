import React from 'react';
import ReactModal, { Styles } from 'react-modal';

export type Props = {
  title?: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  height?: number;
};

ReactModal.setAppElement('#__next');

const Modal: React.FC<Props> = ({
  title,
  icon,
  isOpen,
  close,
  height,
  children,
}) => {
  const styles: Styles = React.useMemo(
    () => ({
      overlay: {
        background: '#0004',
      },
      content: {
        width: 500,
        height,
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        border: 'none',
        borderRadius: 12,
      },
    }),
    [height],
  );

  return (
    <ReactModal isOpen={isOpen} onRequestClose={close} style={styles}>
      {children}
    </ReactModal>
  );
};

export default Modal;
