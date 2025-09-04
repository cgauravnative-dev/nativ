import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { darkMode } = useTheme();
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-gray-900 via-red-900 to-pink-800"
    : "bg-gradient-to-br from-white via-red-100 to-pink-100";

  return (
    <section className={`${bgGradient} min-h-screen flex flex-col items-center justify-center transition-colors duration-500 px-6 text-center`}>
      <h1 className={`text-5xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Contact Us</h1>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-4 max-w-2xl text-lg`}>
        Have questions or want to start a project? Reach out to us and our team will get back to you promptly. Email us at <span className="font-semibold">hello@nativcodes.com</span>.
      </p>
    </section>
  );
}
