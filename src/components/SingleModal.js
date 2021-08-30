import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Emitter from '../services/Emitter';
import { CardClasses } from './CardProvider';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => (Object.assign(CardClasses,
  {
  modal: {
    transitions: 'ease all 0.6s'
  },
})));



function SingleModal() {
  const classes = useStyles();

  const [modalContent, setModalContent] = React.useState('');
  const [modalCustomClass, setModalCustomClass] = React.useState('');
  const [modalKey, setModalKey] = React.useState(new Date().getTime());
  const [open, setOpen] = React.useState(false);

  Emitter.on('OPEN_MODAL_SIGNAL', (modalInfo) => handleModalOpenSignal(modalInfo));
  
  const handleModalOpenSignal = (modalInfo) => {
    if (modalInfo.customClass) setModalCustomClass(classes[modalInfo.customClass]);

    setModalKey(modalInfo.key)
    setModalContent(modalInfo.content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div key={modalKey}>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        fullWidth={true}
        maxWidth={'md'}
      >
        <DialogContent dividers={true} className={`${modalCustomClass} ${classes.modal}`} key={`d${modalKey}`}>
          
            {modalContent}

        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}


export default SingleModal;