import React from 'react';
import {motion} from 'framer-motion';
import Backdrop from '../backdrop';
import Box from '../box';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        }

    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

const Modal = ({handleClose, text}) => {
  return (
    <Backdrop onClick={handleClose}>
        <motion.div
        drag
        dragConstraints={{
            top: 20,
            bottom: 50,
            left: -20,
            right: 50,
        }}
        //sekanti eilute neileizia uzsidaryti betkur paspaudus modalo viduje
        onClick={(e)=>e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate="visible"
        exit='exit'
        className="modal">
        <button onClick={handleClose}>Close</button>
        <Box />
        <p>{text}</p>
        </motion.div>
    </Backdrop>
  )
}

export default Modal