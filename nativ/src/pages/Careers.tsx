import { useTheme } from "../context/ThemeContext";

export default function Careers() {
  const { darkMode } = useTheme();
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800"
    : "bg-gradient-to-br from-white via-pink-100 to-purple-100";

  return (
    <section className={`${bgGradient} min-h-screen flex flex-col items-center justify-center transition-colors duration-500 px-6 text-center`}>
      <h1 className={`text-5xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Join Our Team</h1>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-4 max-w-2xl text-lg`}>
        At Nativ Codes, we are always looking for passionate developers, designers, and innovators. Be a part of a team that is shaping the future of technology.
      </p>
    </section>
  );
}
