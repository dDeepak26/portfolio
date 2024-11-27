import { connectData } from "@/data/data";

const Connect = () => {
  return (
    <section id="connect" className="relative">
      <div className="container mx-auto px-4 md:px-20 mt-12 mb-20">
        <div className="text-center text-3xl font-bold mb-8">Connect</div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {connectData.map((connect, index) => (
            <a
              key={index}
              href={connect.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center transition-transform duration-200 hover:shadow-lg hover:scale-110"
            >
              <div className="flex items-center justify-center w-16 h-16 border hover:border-blue-500 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
                <img
                  src={connect.icon}
                  alt={connect.connectTo}
                  className="w-10 h-10 object-cover"
                />
              </div>
              <span className="text-center text-sm font-medium">
                {connect.connectTo}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
