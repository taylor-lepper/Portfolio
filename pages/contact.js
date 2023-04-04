export default function Contact() {
  return (
    <>
      <div className="text-center h-screen bg-gradient-to-r from-indigo-900 via-black to-cyan-700">
        <h1 className="text-5xl pt-8 text-white">Contact Me</h1>
        <h2 className="text-3xl text-gray-200 pt-6">
          Coding/Website Services:
        </h2>
        <div className="pt-4 grid grid-cols-3 gap-1">
          <div className="text-gray-200 text-3xl p-3 border-4 mx-4 h-56 border-cyan-500 rounded-xl hover:border-pink-400">
            <h3 className="text-white font-bold pt-2 text-3xl">Phone:</h3>
            <h4 className="pt-12 text-2xl">Cell:</h4>
            <p className="text-2xl">360-808-2233</p>
          </div>
          <div className="text-gray-200 text-3xl p-3 border-4 mx-4 h-56 border-cyan-500 rounded-xl hover:border-pink-400">
            <h3 className="text-white font-bold pt-2 text-3xl">Email:</h3>
            <h4 className="pt-12 text-2xl">Personal:</h4>
            <p className="text-2xl">taylor.lepper@gmail.com</p>
          </div>
          <div className="text-gray-200 text-3xl p-3 border-4 mx-4 h-56 border-cyan-500 rounded-xl hover:border-pink-400">
            <h3 className="text-white font-bold pt-2 text-3xl">LinkedIn:</h3>
            <h4 className="pt-12 text-2xl">Profile:</h4>
            <p className="text-2xl">
              <a
                className="hover:font-bold"
                href="https://linkedin.com/in/taylor-lepper"
              >
                https://linkedin.com/in/taylor-lepper
              </a>
            </p>
          </div>
        </div>
        <div>
        <h1 className="text-3xl text-gray-200 py-6">
              General Contracting Services:
            </h1>
          <div  className="flex flex-row justify-center">
       
            <div className="text-gray-200 text-3xl p-3 border-4 h-88 border-cyan-500 rounded-xl hover:border-pink-400 w-1/2">
              <h3 className="text-white font-bold pt-2 text-3xl">
                Beaver Built Contracting LLC:
              </h3>
              <h4 className="pt-8 text-2xl">Phone:</h4>
              <p className="text-2xl">360-808-2233</p>
              <h4 className="pt-4 text-2xl">Website:</h4>
              <p className="text-2xl">
                <a
                  className="hover:font-bold"
                  href="https://beaverbuiltcontracting.com"
                >
                  https://beaverbuiltcontracting.com
                </a>
              </p>
              <h4 className="pt-4 text-2xl">Email:</h4>
              <p className="text-2xl">beaverbuiltcontracting@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
