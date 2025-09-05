
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>

      <p className="text-gray-800 font-semibold text-center mb-8 max-w-2xl mx-auto leading-relaxed">
        Welcome to our app! 🚀 This project is built using
        <span className="text-blue-600"> React </span>
        and <span className="text-teal-600"> Tailwind CSS</span>. Below is a
        sample user profile fetched directly from
        <span className="text-purple-600"> GitHub API</span>.
      </p>

      <UserClass name={""} location={""} contact={"sranjay15@gmail.com"} />
    </div>
  );
};

export default About;
