export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 px-6 py-12">
      {/* Profile Image Section */}
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dwdfcdv0g/image/upload/v1740740066/dbmlpnb9o7nlazlicl9p.png"
          alt="Profile Picture of Shailesh Singh Bisht"
          className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-4 border-gray-500 shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="text-center mt-8 md:mt-0 md:ml-12">
        <h1 className="text-white text-3xl md:text-5xl font-mono font-extrabold mb-6 tracking-wider leading-relaxed">
          Created By:{" "}
          <span className="text-blue-400">Shailesh Singh Bisht</span>
        </h1>

        {/* Tech Stack */}
        <h1 className="text-gray-300 text-2xl md:text-4xl font-mono font-bold mt-10 mb-6">
          Tech Stack Used
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            {
              src: "https://res.cloudinary.com/dwdfcdv0g/image/upload/v1740757781/c2ndatbmkslp9aempiuj.jpg",
              alt: "React Logo",
            },
            {
              src: "https://res.cloudinary.com/dwdfcdv0g/image/upload/v1740757781/oawkevnqc8b9d4ijbajn.jpg",
              alt: "Redux Logo",
            },
            {
              src: "https://res.cloudinary.com/dwdfcdv0g/image/upload/v1740757781/ghugg65n7uihqoxewfpj.png",
              alt: "Tailwind CSS Logo",
            },
            {
              src: "https://res.cloudinary.com/dwdfcdv0g/image/upload/v1740757781/fl23etmyw0epfw8yvjn4.png",
              alt: "Vite Logo",
            },
          ].map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.alt}
              className="w-[120px] h-[80px] object-contain rounded-lg border-2 border-gray-500 shadow-lg hover:scale-105 transition-transform duration-300 hover:border-blue-500"
            />
          ))}
        </div>

        {/* Profile Links */}
        <h1 className="text-gray-300 text-2xl md:text-4xl font-mono font-bold mt-12 mb-6">
          Profile Links
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            {
              href: "https://github.com/Shailesh-Singh-Bisht",
              src: "https://res.cloudinary.com/dwdfcdv0g/image/upload/v1740758849/nk8hucl3ukihf0r4pyn5.png",
              alt: "GitHub Logo",
            },
            {
              href: "https://www.linkedin.com/in/shailesh-singh-bisht-13b30b258/",
              src: "https://res.cloudinary.com/dwdfcdv0g/image/upload/v1740758848/lv2drfoghbm7xazvxgmc.png",
              alt: "LinkedIn Logo",
            },
            {
              href: "https://leetcode.com/u/Shailesh_Singh_Bisht/",
              src: "https://res.cloudinary.com/dwdfcdv0g/image/upload/v1740758848/zn6jqffnphgkip3bjps0.png",
              alt: "LeetCode Logo",
            },
          ].map((profile, index) => (
            <a
              key={index}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={profile.src}
                alt={profile.alt}
                className="w-[120px] h-[80px] object-contain rounded-lg border-2 border-gray-500 shadow-lg hover:scale-110 transition-transform duration-300 hover:border-blue-500"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
