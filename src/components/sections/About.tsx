import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/personal'
import { skills } from '../../data/skills'
import { SECTION_IDS } from '../../utils/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
}

const About = React.memo(() => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  // Category display names
  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Technologies',
    other: 'Other Skills'
  }

  // Skill level colors
  const levelColors = {
    beginner: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    intermediate: 'bg-blue-100 text-blue-800 border-blue-200',
    advanced: 'bg-green-100 text-green-800 border-green-200'
  }

  const handleResumeDownload = () => {
    // For now, we'll create a placeholder link
    // In a real implementation, this would link to an actual resume file
    const link = document.createElement('a')
    link.href = '/resume.pdf' // This would be the actual resume file path
    link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`
    link.click()
  }

  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <motion.div
            className="w-24 h-1 bg-indigo-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Two-column layout: Biography and Skills */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Biography Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                My Story
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm an aspiring full-stack developer who’s deeply passionate about learning, growing, and building meaningful web applications. I may not have internship experience yet, but I make up for it with strong motivation, continuous self-learning, and a desire to create things that matter.
                Currently, I’m focusing on React, Node.js, and cloud technologies to develop user-friendly, modern, and scalable applications. I enjoy turning ideas into real projects, and every challenge is an opportunity for me to improve.
                Beyond code, I love exploring new tools, learning from real-world developers, and sharing knowledge with others. I believe in progress, dedication, and staying true to what I love — creating digital experiences that have real impact.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Info
              </h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {personalInfo.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {personalInfo.email}
                </div>
              </div>
            </div>

            {/* Resume Download Button */}
            <div>
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Skills & Technologies
            </h3>

            <div className="space-y-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-4">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </h4>

                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className={`px-3 py-2 rounded-lg border text-sm font-medium text-center transition-all duration-200 hover:shadow-md touch-manipulation min-h-[40px] flex items-center justify-center ${levelColors[skill.level]}`}
                        title={`${skill.name} - ${skill.level}`}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Legend */}
            <motion.div
              className="mt-8 p-4 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h5 className="text-sm font-medium text-gray-700 mb-3">Skill Levels:</h5>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-200 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-200 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Intermediate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-200 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default About