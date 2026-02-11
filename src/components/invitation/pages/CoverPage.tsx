import { motion } from 'motion/react';
import coverImage from 'figma:asset/f9f969ffed8b23afea2c99c0a530a3dcd4e1c658.png';

export default function CoverPage() {
  return (
    <div className="h-full relative overflow-hidden" style={{ background: '#000' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={coverImage} 
          alt="Wedding"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-12">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center pt-4"
        >
          <p 
            className="text-white tracking-widest"
            style={{ fontSize: '0.7rem', fontFamily: "'Noto Serif KR', serif", letterSpacing: '0.3em' }}
          >
            WEDDING INVITATION
          </p>
        </motion.div>

        {/* To section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-8"
        >
          <p className="text-white text-left" style={{ fontSize: '0.9rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 400 }}>
            To. 한나
          </p>
          <p className="text-white text-left mt-2" style={{ fontSize: '0.85rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}>
            한낭 나 결혼한당 &gt;.&lt;
          </p>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Swipe instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="pb-4"
        >
          <p className="text-white text-center" style={{ fontSize: '0.75rem', fontFamily: "'Noto Serif KR', serif", opacity: 0.8 }}>
            좌우로 넘겨주세요 →
          </p>
        </motion.div>
      </div>
    </div>
  );
}