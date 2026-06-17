import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '', as = 'div', ...rest }) {
 const MotionTag = motion[as] || motion.div

 return (
 <MotionTag
 {...rest}
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: false, margin: "-50px" }}
 transition={{ 
 duration: 1, 
 ease: [0.16, 1, 0.3, 1],
 delay: delay / 1000 
 }}
 className={className}
 >
 {children}
 </MotionTag>
 )
}
