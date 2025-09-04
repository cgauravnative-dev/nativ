import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { darkMode } = useTheme();
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800"
    : "bg-gradient-to-br from-white via-blue-100 to-purple-100";

  return (
    <section className={`${bgGradient} min-h-screen flex flex-col items-center justify-center transition-colors duration-500 px-6 text-center`}>
      <h1 className={`text-5xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>About Nativ Codes</h1>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-4 max-w-2xl text-lg`}>
        We are a futuristic software company focused on delivering scalable, secure, and innovative solutions for modern businesses. Our mission is to help companies accelerate their digital transformation.
      </p>
    </section>
  );
}
