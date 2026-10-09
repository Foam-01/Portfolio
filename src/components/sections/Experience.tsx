import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiEye } from 'react-icons/fi'
import { experiences } from '../../data/experience'
import { SECTION_IDS, SCROLL_OFFSET } from '../../utils/constants'
import { smoothScrollToSection } from '../../utils/dataHelpers'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'spring' as const,
      stiffness: 200
    }
  }
}

const erpWorkSamples = [
  { title: 'Sample 01', url: new URL('../../../erp-work-samples/HAP-14-15-9-69.pdf', import.meta.url).href },
  { title: 'Sample 02', url: new URL('../../../erp-work-samples/HAP-16-18-9-69.pdf', import.meta.url).href },
  { title: 'Sample 03', url: new URL('../../../erp-work-samples/HAP-19-9-69.pdf', import.meta.url).href },
  { title: 'Sample 04', url: new URL('../../../erp-work-samples/HAP-21969.pdf', import.meta.url).href },
  { title: 'Sample 05', url: new URL('../../../erp-work-samples/HAP-22969.pdf', import.meta.url).href },
  { title: 'Sample 06', url: new URL('../../../erp-work-samples/HAP-23969.pdf', import.meta.url).href },
  { title: 'Sample 07', url: new URL('../../../erp-work-samples/HAP-24969.pdf', import.meta.url).href },
  { title: 'Sample 08', url: new URL('../../../erp-work-samples/t180d3k7myqadak.pdf', import.meta.url).href },
]

const Experience = React.memo(() => {
  const [isErpPreviewOpen, setIsErpPreviewOpen] = React.useState(false)
  const [isErpPreviewLoading, setIsErpPreviewLoading] = React.useState(true)
  const [selectedErpSample, setSelectedErpSample] = React.useState(erpWorkSamples[0])

  React.useEffect(() => {
    if (!isErpPreviewOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsErpPreviewOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isErpPreviewOpen])

  const scrollToProject = (projectId: string) => {
    // Scroll to projects section first
    smoothScrollToSection(SECTION_IDS.PROJECTS, SCROLL_OFFSET)
    // After scrolling, try to highlight the project
    setTimeout(() => {
      const projectEl = document.querySelector(`[data-project-id="${projectId}"]`)
      if (projectEl) {
        projectEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 800)
  }

  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="py-20 bg-gray-50"
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
            Work Experience
          </h2>
          <motion.div
            className="w-24 h-1 bg-indigo-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My work has covered enterprise ERP and internal business applications, including full-stack development, data integration, reporting, and user-focused interface improvements.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline connector line — spans the full height of this entry */}
              {/* Desktop: centered between columns, Mobile: left side */}
              <div
                className={`absolute left-4 lg:left-[22%] top-0 bottom-0 w-0.5 bg-indigo-200 ${index === experiences.length - 1 ? 'hidden' : ''
                  }`}
                style={{ transform: 'translateX(-50%)' }}
              />

              {/* Entry row */}
              <div className="relative flex flex-col lg:flex-row lg:gap-8 pb-16 last:pb-0">
                {/* LEFT — Date & Company (Desktop only) */}
                <div className="hidden lg:flex lg:w-[20%] flex-col items-end pt-1 pr-4">
                  <span className="text-sm font-semibold text-indigo-600 tracking-wide">
                    {exp.durationShort}
                  </span>
                  <span className="text-sm font-medium text-gray-800 mt-1">
                    {exp.company}
                  </span>
                  <span className="inline-block mt-2 px-2.5 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
                    {exp.duration.split('·')[1]?.trim()}
                  </span>
                </div>

                {/* CENTER — Timeline Dot */}
                <div className="absolute left-4 lg:left-[22%] top-1 z-10" style={{ transform: 'translateX(-50%)' }}>
                  <motion.div
                    className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md"
                    variants={dotVariants}
                  />
                </div>

                {/* RIGHT — Experience Card */}
                <div className="pl-10 lg:pl-0 lg:ml-[22%] lg:pl-8 flex-1">
                  {/* Mobile: Date & Company (shown above card) */}
                  <div className="lg:hidden mb-3">
                    <span className="text-sm font-semibold text-indigo-600">
                      {exp.durationShort}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm font-medium text-gray-700">
                      {exp.company}
                    </span>
                    {exp.workType && (
                      <>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-xs text-gray-500">{exp.workType}</span>
                      </>
                    )}
                  </div>

                  {/* Card */}
                  <motion.div
                    className="bg-white rounded-lg shadow-md p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg border border-gray-100"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Card Header */}
                    <div className="mb-5">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {exp.companyFull}
                        {exp.workType && (
                          <span className="ml-2 text-gray-400">· {exp.workType}</span>
                        )}
                      </p>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100">
                        {exp.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="space-y-5 mb-6">
                      {exp.contributions.map((contrib) => (
                        <div key={contrib.number}>
                          <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-baseline gap-2">
                            <span className="text-indigo-500 font-mono text-xs">
                              {contrib.number}
                            </span>
                            <span>{contrib.title}</span>
                          </h4>
                          <ul className="space-y-1.5 ml-7">
                            {contrib.bullets.map((bullet, bIndex) => (
                              <li
                                key={bIndex}
                                className="text-sm text-gray-600 leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-indigo-400 before:font-bold"
                              >
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {exp.id === 'exp-aira-erp' && (
                      <div className="pt-3 border-t border-gray-100">
                        <button
                          type="button"
                          onClick={() => {
                            setIsErpPreviewLoading(true)
                            setIsErpPreviewOpen(true)
                          }}
                          className="group inline-flex min-h-12 items-center gap-3 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-left text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-50/70 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:translate-y-0"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-50 text-indigo-700 transition-colors group-hover:bg-indigo-100">
                            <FiEye aria-hidden="true" size={18} />
                          </span>
                          <span>Preview ERP work</span>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 group-hover:bg-white">
                            {erpWorkSamples.length} samples
                          </span>
                          <FiArrowUpRight
                            aria-hidden="true"
                            className="text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-700"
                            size={16}
                          />
                        </button>
                      </div>
                    )}

                    {/* Related Project Link */}
                    {exp.relatedProject && (
                      <div className="pt-3 border-t border-gray-100">
                        <button
                          onClick={() => scrollToProject(exp.relatedProject!.id)}
                          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200 group"
                        >
                          View Related Project: {exp.relatedProject.title}
                          <svg
                            className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isErpPreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6"
          onClick={() => setIsErpPreviewOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="erp-preview-title"
            className="flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex items-center justify-between gap-4 border-b border-gray-200 px-4 py-3 sm:px-6">
              <div>
                <h3 id="erp-preview-title" className="text-lg font-bold text-gray-900">
                  ERP Work Examples
                </h3>
                <p className="text-sm text-gray-500">{selectedErpSample.title}</p>
                <p className="mt-1 text-xs text-amber-700">
                  All samples use test data only. No real company or customer information is shown.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsErpPreviewOpen(false)}
                className="min-h-[44px] min-w-[44px] rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Close ERP work samples preview"
              >
                Close
              </button>
            </header>

            <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] md:grid-cols-[220px_minmax(0,1fr)] md:grid-rows-1">
              <nav
                aria-label="Select an ERP work sample"
                className="flex gap-2 overflow-x-auto border-b border-gray-200 p-3 md:flex-col md:overflow-y-auto md:border-b-0 md:border-r"
              >
                {erpWorkSamples.map((sample) => (
                  <button
                    key={sample.title}
                    type="button"
                    aria-pressed={selectedErpSample.title === sample.title}
                    onClick={() => {
                      setIsErpPreviewLoading(true)
                      setSelectedErpSample(sample)
                    }}
                    className={`min-h-[44px] shrink-0 rounded-md px-3 py-2 text-left text-sm transition-colors md:w-full ${selectedErpSample.title === sample.title
                      ? 'bg-indigo-50 font-semibold text-indigo-700 ring-1 ring-indigo-200'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {sample.title}
                  </button>
                ))}
              </nav>

              <div className="min-h-0 bg-gray-100 p-2 sm:p-4">
                <div className="relative h-full min-h-0">
                  <iframe
                    key={selectedErpSample.url}
                    src={`${selectedErpSample.url}#toolbar=0&navpanes=0`}
                    title={`PDF preview: ${selectedErpSample.title}`}
                    onLoad={() => setIsErpPreviewLoading(false)}
                    className={`h-full w-full rounded border border-gray-300 bg-white transition-opacity ${isErpPreviewLoading ? 'opacity-0' : 'opacity-100'}`}
                  />
                  {isErpPreviewLoading && (
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded border border-gray-200 bg-white text-gray-600"
                      role="status"
                      aria-live="polite"
                    >
                      <span className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
                      <span className="text-sm font-medium">กำลังโหลดตัวอย่าง...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  )
})

export default Experience
