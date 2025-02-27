import {motion} from 'framer-motion'
export const ExploreText: React.FC = () => {
    return (
      <div className="flex justify-center items-center bg-green-100 p-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-green-700 text-center shadow-lg p-4 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          EXPLORE <span className="text-green-900">FARM FRESH</span> <br />
          <span className="text-yellow-600">ORGANIC VEGETABLES</span> NOW!
        </motion.h1>
      </div>
    );
  };
  
  