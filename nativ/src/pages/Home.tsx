import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiGooglecloud,
  SiDjango,
  SiExpress,
} from "react-icons/si";
import { FaAws, FaJava, FaMicrosoft } from "react-icons/fa";

export default function Home() {
  const { darkMode } = useTheme();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Mouse tracking
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const icons = [
    <SiReact size={40} color="#61DBFB" />,
    <SiJavascript size={40} color="#F7DF1E" />,
    <SiPython size={40} color="#3776AB" />,
    <SiNodedotjs size={40} color="#68A063" />,
    <FaJava size={40} color="#007396" />,
    <SiTypescript size={40} color="#3178C6" />,
    <SiMongodb size={40} color="#4DB33D" />,
    <SiPostgresql size={40} color="#336791" />,
    <SiMysql size={40} color="#00758F" />,
    <SiTailwindcss size={40} color="#38B2AC" />,
    <FaAws size={40} color="#FF9900" />,
    <SiGooglecloud size={40} color="#4285F4" />,
    <FaMicrosoft size={40} color="#0089D6" />,
    <SiDjango size={40} color="#092E20" />,
    <SiExpress size={40} color="#ffffff" />,
  ];

  // Generate positions once
  const [positions] = useState(
    () =>
      Array.from({ length: icons.length }, () => ({
        top: Math.random() * 80 + 10, // 10% - 90%
        left: Math.random() * 80 + 10,
      }))
  );

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 -z-20 transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"
            : "bg-gradient-to-r from-blue-200 via-blue-100 to-white"
        }`}
      />

      {/* Floating + Mouse Follow Icons */}
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute opacity-40 -z-10"
          style={{
            top: `${positions[i].top}%`,
            left: `${positions[i].left}%`,
          }}
          animate={{
            x: mouse.x * (15 + i * 2), // parallax
            y: mouse.y * (15 + i * 2),
            rotate: [0, 8, -8, 0], // gentle tilt
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Text */}
      <motion.h1
        className={`text-5xl md:text-6xl font-extrabold mb-4 transition-colors duration-500 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
        style={{
          textShadow: darkMode ? "0 0 20px #7c3aed" : "0 0 8px #3b82f6",
        }}
      >
        Nativ Codes
      </motion.h1>

      <motion.p
        className={`text-lg md:text-xl max-w-2xl mb-8 transition-colors duration-500 ${
          darkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        Innovative software solutions with futuristic technology and design.
      </motion.p>

      <a
        href="/contact"
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
      >
        Contact Us
      </a>
    </section>
  );
}
