import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className='py-32'>
      <div className="border-t border-stone-900 pb-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-10 text-center text-4xl"
        >
          Get In Touch
        </motion.h2>

        <div className="text-center tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4 text-lg"
          >
            {CONTACT.phoneNo}
          </motion.p>

          <p className="text-sm text-stone-600 mb-2">
            Feel free to drop a message or collaboration idea:
          </p>

          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-sky-600 transition-colors duration-300 text-base"
          >
            {CONTACT.email}
          </a>
        </div>

        {/* Social Media Icons */}
        <div className='mt-12 flex justify-center items-center gap-6 text-2xl'>
          <a href="https://www.linkedin.com/in/syedzaheed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/szaid47" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://x.com/zaheeeed45" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.instagram.com/z4heed_s/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
