export default function About() {
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <div className="text-4xl md:text-6xl font-bold text-center">
                About <span className="text-purple-600">M</span>e
            </div>
            <div className="mt-6 max-w-3xl px-6">
                <p className="text-lg md:text-xl leading-relaxed text-center">
                    Hi, I'm Muhammad Owais Warsi! My journey into the world of computer science began in 12th grade, where my initial lack of interest soon transformed into a <span className="bg-purple-200 px-1 rounded">burning passion</span>. I've since delved deep into various aspects of development, learning new skills and technologies along the way. Currently, I'm on an <span className="bg-purple-200 px-1 rounded">exciting path to mastering full-stack development</span>.
                </p>
                <p className="mt-4 text-lg md:text-xl leading-relaxed text-center">
                    I'm a dedicated developer who loves bringing projects to life and contributing to the open-source community. Whether it's coding, collaborating, or exploring the latest tech trends, I'm always eager to <span className="bg-purple-200 px-1 rounded">push the boundaries and create something amazing</span>.
                </p>
            </div>
        </div>
    );
}
