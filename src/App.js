import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import Modal from "./components/modal";


function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
   
  return (
    <>
      <div style={{width: "100%", height: '100vh', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={()=>(modalOpen ? close() : open())}>
          Click me
          </motion.button>
      </div>

    <AnimatePresence
    //išjungti bet kokią pradinę animaciją vaikams, esantiems pirmą kartą atvaizduojant komponentą.
    initial={false}
    // vienu metu atvaizduokite tik vieną komponentą
    //Išeinantis komponentas baigs savo išėjimą
    //animaciją prieš atvaizduojant įeinantį komponentą
    exitBeforeEnter={true}
    //įvyksta, kai visi išeinantys nodes baigia animaciją.
    onExitComplete={()=>null}
    >
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
      
    </AnimatePresence>

          </>

  );
}

export default App;
