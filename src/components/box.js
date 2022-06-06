import React from 'react'
import { motion } from 'framer-motion'

const bigBoxVariants = {
    hidden: {
        x:-350,
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
}

const listVariants = {
    hidden: {
        x:-10,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    }

}

const Box = () => {
  return (
      <motion.div 
      className="bigBox"
      variants={bigBoxVariants}
      initial="hidden"
      animate="visible"
      >

   {[1,2,3].map(box=> {
       return <motion.li
       className='boxStyle'
       variants={listVariants}
    //    initial="hidden"
    //    animate="visible"
       ></motion.li>
    })}
    </motion.div>
  )
}

export default Box