import Image from "next/image";
import { delay, motion } from "framer-motion";

export default function Team(){
    return(
        <div className="mt-[19.375rem] mx-[10.625rem] pb-28 border-b-2 border-b-black">
            
            <div className="flex justify-center">
           
            <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5,0.71,1, 1.5],
                    delay:8
                }}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            ><div className="text-right mr-12 font-extrabold text-[64px] tracking-widest">Meet the Team <br></br>of 2022-23</div></motion.h1>
                <div className="text-left ml-12 font-extrabold text-[36px] tracking-widest">Know the amazing<br></br> individuals who make <br></br>our team a winning<br></br>combination.</div>
                
            </div>
           
            <div className="flex justify-center mt-[7rem]">
                <Image src={"/images/group photo.svg"} width={1090} height={524}/>
            </div>
        </div>
    )
}