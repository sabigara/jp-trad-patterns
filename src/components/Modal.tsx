import React from 'react';
import ReactModal, { Styles } from 'react-modal';

export type Props = {
  title?: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  close: () => void;
};

ReactModal.setAppElement('#__next');

const Modal: React.FC<Props> = ({ title, icon, isOpen, close, children }) => {
  const styles: Styles = React.useMemo(
    () => ({
      overlay: {
        background: '#0004',
      },
      content: {
        width: 500,
        height: 200,
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        border: 'none',
        borderRadius: 12,
      },
    }),
    [],
  );

  return (
    <ReactModal isOpen={isOpen} onRequestClose={close} style={styles}>
      <div>
        <div>{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
