import { motion } from 'motion/react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { unsplash_tool } from '../../../tools';

const TIMELINE_EVENTS = [
  { date: '2020. 03', title: '첫 만남', description: '운명처럼 마주친 그날' },
  { date: '2020. 06', title: '설레는 시작', description: '서로에게 빠져들다' },
  { date: '2021. 12', title: '함께한 계절들', description: '추억을 쌓아가며' },
  { date: '2023. 08', title: '프러포즈', description: '평생을 함께하자는 약속' },
  { date: '2024. 11', title: '양가 상견례', description: '두 가족이 하나로' },
  { date: '2025. 02', title: '스튜디오 촬영', description: '소중한 순간을 담다' },
  { date: '2025. 05', title: '예식장 예약', description: '완벽한 장소를 찾아' },
  { date: '2026. 01', title: '청첩장 발송', description: '기쁜 소식을 전하다' },
  { date: '2026. 06. 28', title: '결혼식', description: '새로운 시작' },
];

export default function TimelinePage() {
  return (
    <div className="h-full overflow-y-auto p-8" style={{ background: '#fafaf8' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <div className="text-center mb-12 pt-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gray-400 mx-auto mb-6"
          />
          <p
            className="text-gray-400 tracking-wider"
            style={{ fontSize: '0.7rem', fontFamily: "'Noto Serif KR', serif", letterSpacing: '0.3em' }}
          >
            OUR STORY
          </p>
          <p
            className="text-gray-700 mt-2"
            style={{ fontSize: '0.9rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
          >
            우리가 함께 걸어온 시간
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6 pb-8">
          {TIMELINE_EVENTS.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative"
            >
              <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                {/* Date */}
                <div className={`w-24 flex-shrink-0 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    {event.date}
                  </p>
                </div>

                {/* Connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full ${index === TIMELINE_EVENTS.length - 1 ? 'bg-gray-700' : 'bg-gray-400'} ring-4 ring-white`} />
                  {index < TIMELINE_EVENTS.length - 1 && (
                    <div className="w-px h-full bg-gray-300 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 pb-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-gray-800 mb-1" style={{ fontSize: '1rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 400 }}>
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}