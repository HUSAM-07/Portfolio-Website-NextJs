import { delay, motion } from "framer-motion";
import { exit } from "process";

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: { 
        top: "100%",
    },
    exit: { 
        top: ["100%", "0"]
    },
    
};

const reverseIndex = (index)=> {
    const totalSteps = 6; //number of steps
    return totalSteps - index;
};

const Stairs = () => {
    return (
        <>
          {/* render 6 motion dev
    */}
        {[...Array(6).map((_, index)=> {
            <motion.dev 
                key={index} 
                variants={stairAnimation} 
                initial="initial"
                animate="animate" 
                exit="exit" 
                transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: reverseIndex(index) * 0.1, 
                }}
                className="h-full w-full bg-white relative"
            />;
        })}
       </>
    );
}


const Stairs = () => {
  return (
    <div>Stairs</div>
  )
}
