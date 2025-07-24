import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/personal'
import { SECTION_IDS, SCROLL_OFFSET } from '../../utils/constants'
import { smoothScrollToSection } from '../../utils/dataHelpers'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
}

const Hero = React.memo(() => {
  const scrollToSection = (sectionId: string) => {
    smoothScrollToSection(sectionId, SCROLL_OFFSET)
  }

  return (
    <section 
      id={SECTION_IDS.HERO} 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Professional Photo/Avatar */}
        <motion.div className="mb-8" variants={avatarVariants}>
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-xl">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {personalInfo.name.split(' ').map(name => name[0]).join('')}
            </span>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.h2 
          className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 font-semibold mb-6"
          variants={itemVariants}
        >
          {personalInfo.title}
        </motion.h2>

        {/* Introduction */}
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {personalInfo.bio}
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection(SECTION_IDS.PROJECTS)}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 touch-manipulation min-h-[48px]"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View My Work
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection(SECTION_IDS.CONTACT)}
            className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg border-2 border-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 touch-manipulation min-h-[48px]"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.button
            onClick={() => scrollToSection(SECTION_IDS.ABOUT)}
            className="text-gray-400 hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded-full p-2"
            aria-label="Scroll to about section"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
          >
            <svg 
              className="w-6 h-6 mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
})

export default Hero