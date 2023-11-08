import cn from 'classnames';
import './Modal.css';

const Modal = (props) => {
  const { isActive, setActive, children } = props;

  const modalStyle = cn('modal', { active: isActive });
  const modalContentStyle = cn('modal-content', { active: isActive });

  return (
    <div className={modalStyle} onClick={() => setActive(false)}>
      <div className={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
