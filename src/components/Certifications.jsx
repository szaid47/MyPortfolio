import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {/* Certificate 1 */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 flex flex-col items-center"
        >
          <img
            src="../certificate-1.png"
            alt="Certificate 1"
            className="rounded-3xl border border-stone-900 shadow-lg max-w-xs w-full object-cover"
          />
          <h3 className="mt-4 text-center text-xl font-semibold">
            AWS Academy Cloud Foundations
          </h3>
          <a
            href="https://www.credly.com/badges/1f670f64-6f31-48f4-8ffa-28df90ed50a8/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center text-blue-500"
          >
            Verify Certificate
          </a>
        </motion.div>

        {/* Certificate 2 */}
        
      </div>
    </div>
  );
};

export default Certifications;
