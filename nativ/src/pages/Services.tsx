import { useTheme } from "../context/ThemeContext";

export default function Services() {
  const { darkMode } = useTheme();
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-gray-900 via-teal-900 to-green-800"
    : "bg-gradient-to-br from-white via-teal-100 to-green-100";

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "UI/UX Design",
    "AI & Machine Learning",
  ];

  return (
    <section className={`${bgGradient} min-h-screen flex flex-col items-center justify-center transition-colors duration-500 px-6 text-center`}>
      <h1 className={`text-5xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Our Services</h1>
      <ul className={`mt-6 space-y-4 text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {services.map((service) => (
          <li key={service}>• {service}</li>
        ))}
      </ul>
    </section>
  );
}
