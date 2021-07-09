import React,{ useEffect } from 'react';

import Portal from './Portal';

import { Overlay, Dialog } from './styles';

const Modal = ({ children, open, onClose }) => {
  
  useEffect(() =>{
		function onEsc(event){
      let keyCode = event.keyCode;
			if(keyCode === 27 | keyCode === 70) onClose();
		}

		window.addEventListener('keydown', onEsc)
		return () =>{
			window.removeEventListener('keydown', onEsc)
		}
	}, [onClose]);

  if (!open) return null;

	function onOverlayClick() {
		onClose();
	}

	function onDialogClick(event) {
		event.stopPropagation();
	}

	return (
		<Portal>
			<Overlay onClick={onOverlayClick}>
				<Dialog onClick={onDialogClick}>{children}</Dialog>
			</Overlay>
		</Portal>
	);
};

export default Modal;