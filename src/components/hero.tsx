import p1 from "/p1.gif"


export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center p-4 mt-20">
            <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
                H<span className="text-[rgb(189,130,255)]">i</span>, I'm Muhammad Owais Wars<span className="text-[rgb(189,130,255)]">i</span>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl text-center mt-4">
                A passionate developer who loves to ship projects.
            </div>
            <div>
                <img src={p1}></img>
            </div>
        </div>
    );
}
