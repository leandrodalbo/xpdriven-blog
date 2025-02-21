
import introimg from "../assets/intro.png"

const Intro = () => (
    <article className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-gray-300 p-6 md:p-8 lg:p-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 text-center">
            Welcome to the XPDriven Blog
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed text-center text-gray-300">
            This blog is dedicated to exploring the best practices in software development, focusing on
            <span className="text-gray-100  font-semibold"> Test-Driven Development (TDD)</span>,
            <span className="text-gray-100  font-semibold"> Extreme Programming (XP)</span>,
            <span className="text-gray-100  font-semibold"> Clean Code</span> and
            <span className="text-gray-100  font-semibold"> Agile</span> methodologies.
        </p>

        <div className="space-y-4 text-lg sm:text-xl text-gray-300">
            <p className="text-md sm:text-xl leading-relaxed text-left text-gray-300">
                <span className="text-gray-100 font-semibold">♻️ TDD</span> helps you write better code by ensuring tests come first.
                Pioneered by <span className="text-gray-100 font-semibold">Kent Beck</span>, leads to more reliable software.
            </p>

            <p className="text-md sm:text-xl leading-relaxed text-left text-gray-300">
                <span className="text-gray-100 font-semibold">👥 Extreme Programming</span> emphasizes collaboration, continuous feedback, and rapid iterations. It’s all about delivering high-quality software faster.
            </p>

            <p className="text-md sm:text-xl leading-relaxed text-left text-gray-300">
                <span className="text-gray-100 font-semibold">🧼 Clean Code</span> is a core principle in software development.<span className="text-gray-100 font-semibold"> Robert C. Martin</span>’s books, like <span className="text-gray-100 font-semibold">Clean Code</span>, teach us how to make our code more readable, maintainable, and flexible.
            </p>

            <p className="text-md sm:text-xl leading-relaxed text-left text-gray-300">
                <span className="text-gray-100 font-semibold">📢 Agile</span> promotes flexibility, continuous improvement, and close collaboration with customers. It’s a powerful way to build software that adapts to change.
            </p>

        </div>

        <div className="w-full md:w-[512px] h-48 md:h-72 flex justify-center items-center mx-auto">
            <img
                src={introimg}
                alt="wtf-intro"
                className="object-contain w-full h-full rounded-lg"
            />
        </div>



        <p className="text-lg sm:text-xl text-center text-gray-300">
            By following these practices, you'll become a better developer, creating software that is more scalable, maintainable, and easier to improve over time.
        </p>
    </article>
);

export default Intro;
