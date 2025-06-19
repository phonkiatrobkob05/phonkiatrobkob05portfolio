// src/components/TypeAnimation.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypeAnimation() {
  const el = useRef(null);

  useEffect(() => {
    // กำหนด Options สำหรับ Typed.js
    const typed = new Typed(el.current, {
      strings: [
        'WebApp Development',
        'Design UX/UI',
        'Frontend Development',
        
      ],
      typeSpeed: 70,       // ความเร็วในการพิมพ์
      backSpeed: 40,       // ความเร็วในการลบ
      loop: true,          // วนซ้ำไม่รู้จบ
      showCursor: true,    // แสดงเคอร์เซอร์ที่กระพริบ
      cursorChar: '|',     // กำหนดตัวอักษรของเคอร์เซอร์
      backDelay: 1500,     // หน่วงเวลาก่อนลบ
      startDelay: 500,     // หน่วงเวลาก่อนเริ่มพิมพ์ครั้งแรก
      // เพิ่ม Options อื่นๆ ได้ตามต้องการ
    });

    return () => {
      // ทำลาย Typed instance เมื่อ Component ถูก Unmount
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-center"> {/* ใช้ Tailwind สำหรับจัดวางและตกแต่ง */}
      <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        What do i do <br className="sm:hidden" />
        <span
          ref={el}
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
        />
      </h1>
      {/* สามารถเพิ่มเคอร์เซอร์สไตล์ด้วย Tailwind ได้ */}
      <style>{`
        .typed-cursor {
          opacity: 1;
          -webkit-animation: blink 0.7s infinite;
          -moz-animation: blink 0.7s infinite;
          animation: blink 0.7s infinite;
          font-weight: normal; /* ทำให้เคอร์เซอร์ไม่เป็นตัวหนาตามข้อความ */
          color: #6D28D9; /* สีเคอร์เซอร์ */
        }
        @-webkit-keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        @-moz-keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default TypeAnimation;