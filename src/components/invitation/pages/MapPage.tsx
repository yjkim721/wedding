import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function MapPage() {
  const address =
    "서울특별시 영등포구 국회대로 612 코레일유통빌딩 2층";

  const handleNaverMap = () => {
    window.open(
      `https://map.naver.com/p/search/${encodeURIComponent(address)}`,
      "_blank",
    );
  };

  const handleGoogleMap = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      "_blank",
    );
  };

  const handleKakaoMap = () => {
    window.open(
      `https://map.kakao.com/link/search/${encodeURIComponent(address)}`,
      "_blank",
    );
  };

  return (
    <div
      className="h-full overflow-y-auto"
      style={{ background: "#fafaf8" }}
    >
      <div className="p-8 pb-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 pt-4"
        >
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
            LOCATION
          </p>
          <p 
            className="text-gray-700 mt-2"
            style={{ fontSize: '0.9rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
          >
            오시는 길
          </p>
        </motion.div>

        {/* Map Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mb-10"
        >
          <button
            onClick={handleNaverMap}
            className="group relative pb-1"
          >
            <span
              className="text-gray-600 group-hover:text-gray-900 transition-colors"
              style={{
                fontSize: "0.8rem",
                fontFamily: "'Noto Serif KR', serif",
                letterSpacing: "0.08em",
              }}
            >
              NAVER
            </span>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300 group-hover:bg-gray-900 transition-colors"></div>
          </button>
          <span
            className="text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            |
          </span>
          <button
            onClick={handleKakaoMap}
            className="group relative pb-1"
          >
            <span
              className="text-gray-600 group-hover:text-gray-900 transition-colors"
              style={{
                fontSize: "0.8rem",
                fontFamily: "'Noto Serif KR', serif",
                letterSpacing: "0.08em",
              }}
            >
              KAKAO
            </span>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300 group-hover:bg-gray-900 transition-colors"></div>
          </button>
          <span
            className="text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            |
          </span>
          <button
            onClick={handleGoogleMap}
            className="group relative pb-1"
          >
            <span
              className="text-gray-600 group-hover:text-gray-900 transition-colors"
              style={{
                fontSize: "0.8rem",
                fontFamily: "'Noto Serif KR', serif",
                letterSpacing: "0.08em",
              }}
            >
              GOOGLE
            </span>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300 group-hover:bg-gray-900 transition-colors"></div>
          </button>
        </motion.div>

        {/* Map Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="relative w-full h-64 bg-white/50 rounded-lg overflow-hidden border border-gray-300">
            <div className="relative w-full h-full p-4">
              {/* 영등포구청역 - Top */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
                <div className="flex items-center justify-center gap-0.5 mb-1">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">
                    5
                  </div>
                </div>
                <p
                  className="text-gray-800 whitespace-nowrap font-medium"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "0.78rem",
                  }}
                >
                  영등포구청역
                </p>
              </div>

              {/* 당산삼성 2차아파트 - Top Left */}
              <div className="absolute top-8 left-6 text-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mb-0.5 mx-auto"></div>
                <p
                  className="text-gray-600 whitespace-nowrap"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "0.68rem",
                  }}
                >
                  당산삼성
                  <br />
                  2차아파트
                </p>
              </div>

              {/* 타이어뱅크 - Top Right */}
              <div className="absolute top-8 right-6 text-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mb-0.5 mx-auto"></div>
                <p
                  className="text-gray-600"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "0.68rem",
                  }}
                >
                  타이어뱅크
                </p>
              </div>

              {/* THE VERDE G - Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div
                  className="px-5 py-2.5 rounded text-white mb-2 shadow-md"
                  style={{ backgroundColor: "#6B7E6A" }}
                >
                  <p
                    className="font-medium"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: "0.83rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    더베르G
                  </p>
                </div>
                <MapPin className="w-6 h-6 text-red-500 mx-auto" />
              </div>

              {/* 영등포 타운홀 - Bottom Left */}
              <div className="absolute bottom-12 left-8 text-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mb-0.5 mx-auto"></div>
                <p
                  className="text-gray-600 whitespace-nowrap"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "0.68rem",
                  }}
                >
                  영등포
                  <br />
                  타운홀
                </p>
              </div>

              {/* 영등포 경찰서 - Bottom Left 2 */}
              <div className="absolute bottom-6 left-12 text-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mb-0.5 mx-auto"></div>
                <p
                  className="text-gray-600 whitespace-nowrap"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "0.68rem",
                  }}
                >
                  영등포
                  <br />
                  경찰서
                </p>
              </div>

              {/* 반도유보라 엘리스마트 - Bottom Right */}
              <div className="absolute bottom-8 right-6 text-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mb-0.5 mx-auto"></div>
                <p
                  className="text-gray-600 whitespace-nowrap"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "0.68rem",
                  }}
                >
                  반도유보라
                  <br />
                  엘리스마트
                </p>
              </div>

              {/* Decorative lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: "none" }}
              >
                <line
                  x1="50%"
                  y1="15%"
                  x2="50%"
                  y2="85%"
                  stroke="#d0d0c8"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                />
                <line
                  x1="15%"
                  y1="50%"
                  x2="85%"
                  y2="50%"
                  stroke="#d0d0c8"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Venue Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          <p
            className="text-gray-700"
            style={{ fontSize: "0.88rem", lineHeight: "1.7" }}
          >
            더베르G · 서울시 영등포구 국회대로 612 코레일유통사옥 2층
          </p>
        </motion.div>

        {/* Transportation Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-6"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          {/* 자가용 */}
          <div>
            <h4
              className="text-gray-800 mb-2.5"
              style={{
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              자가용 이용 시
            </h4>
            <div
              className="space-y-0.5 text-gray-500 text-left"
              style={{
                fontSize: "0.8rem",
                lineHeight: "1.7",
                fontFamily: "'Noto Serif KR', serif",
              }}
            >
              <div>
                네비게이션{" "}
                <span className="font-medium">[더베르G]</span>{" "}
                검색
              </div>
              <div>국회대로 612 2층 / 당산동 3가 2-7</div>
            </div>
          </div>

          {/* 지하철 */}
          <div>
            <h4
              className="text-gray-800 mb-2.5"
              style={{
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              지하철 이용 시
            </h4>
            <div
              className="text-gray-500 text-left"
              style={{
                fontSize: "0.7rem",
                lineHeight: "1.6",
                fontFamily: "'Noto Serif KR', serif",
              }}
            >
              <div>
                2호선, 5호선 영등포구청역 4번 출구에서 566m
                (도보 약 7분)
              </div>
            </div>
          </div>

          {/* 셔틀버스 */}
          <div>
            <h4
              className="text-gray-800 mb-2.5"
              style={{
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              셔틀버스 안내
            </h4>
            <div
              className="text-gray-500 text-left"
              style={{
                fontSize: "0.7rem",
                lineHeight: "1.6",
                fontFamily: "'Noto Serif KR', serif",
              }}
            >
              <div>
                영등포구청역 5번 출구 우리은행 앞 ↔ 더베르G
                주차장 입구 좌측
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phone Number at Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-10"
        >
          <p
            className="text-gray-500"
            style={{
              fontSize: "0.7rem",
              fontFamily: "'Noto Serif KR', serif",
            }}
          >
            더베르G Tel. 02. 2088. 5272
          </p>
        </motion.div>
      </div>
    </div>
  );
}