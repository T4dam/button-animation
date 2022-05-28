import {motion} from "framer-motion";

function App() {
  return (
    
      <div style={{width: "100%", height: '100vh', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={()=>null}>Click me</motion.button>
      </div>

  );
}

export default App;
