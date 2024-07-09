import ProjectCard from './projectCard';

const projects = [
    {
        name: "Poemify",
        overview:"Poemify uses AI to generate poems from images.",
        stack: "Nextjs, AceternityUI, GeminiAI",
        github:"https://github.com/Muhammad-Owais-Warsi/Poemify",
        link:"https://poemify.vercel.app/"
    },
    {
        name: "Leave Ease",
        overview:"Leave Portal for our college students",
        stack: "Reactjs,NextUI,ExpressJs,MongoDB",
        github:"https://github.com/Muhammad-Owais-Warsi/LeaveEase",
        link:"https://leaveease-1.onrender.com/"
    },
    {
        name: "NPM Suggester",
        overview:"Get Suggetions for NPM Packages using AI",
        stack: "Reactjs,Tailwind,GeminiAI",
        github:"https://github.com/Muhammad-Owais-Warsi/NPM-Suggester",
        link:"https://npm-suggester.onrender.com/",
    },
    {
        name: "WikiLeaks",
        overview:"Web3 platform for anonymous whistleblowers.",
        stack: "Reactjs,Tailwind,Solidity",
        github:"https://github.com/Muhammad-Owais-Warsi/HackVerse",
        link:"https://wikileaks.onrender.com"
    },
    {
        name: "Trimly",
        overview:"URL Shortner",
        stack: "Reactjs,Tailwind,ExpressJs,MongoDB",
        github:"https://github.com/Muhammad-Owais-Warsi/Trimly",
        link:"https://trimly-4.onrender.com/"
    },
    {
        name: "Coming Soon",
        overview:"Exciting new project coming soon! Stay tuned for updates.",
        stack: "TBA",
        github:"https://github.com/Muhammad-Owais-Warsi",
        link:"#"
    }
];

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="text-4xl md:text-6xl font-bold text-center mb-10">
                <span className="text-purple-600">M</span>y Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                {projects.map((project, idx) => (
                    project.name === "Coming Soon" ? (
                        <div key={idx} className="relative mt-7 flex flex-col justify-center items-center p-4 bg-gray-200 border border-dashed border-gray-400 rounded-lg text-center h-[13rem]">
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-lg font-bold text-gray-700">
                                {project.name}
                                <span className="mt-2 text-sm text-gray-500">{project.overview}</span>
                            </div>
                        </div>
                    ) : (
                        <ProjectCard project={project} key={idx} />
                    )
                ))}
            </div>
        </div>
    );
}
