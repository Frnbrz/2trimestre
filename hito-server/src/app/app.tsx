import Logos from "components/atoms/logos"



function App() {
  return (
    <main>
      <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h3 className="text-2xl sm:text-4xl leading-none font-bold tracking-tight text-purple-200">Hito Servidor
        </h3>
        <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-purple-400">
          Front
          <span className="text-[#61dafb]"> React + Typescript</span>
        </h1>
        <p className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium mb-10 sm:mb-11">
          Backend con:
          <code className="font-mono text-blue-500 font-bold"> Spring boot</code>
        </p>
        <div className="absolute top-12 right-12 opacity-10 lg:opacity-50">
          <Logos.Spring className="w-72 h-72" />
        </div>
      </header>

      <section>

      </section>

      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
        <a href="https://github.com/frnbrz">
          Francisco Briz @ {new Date().getFullYear()}
        </a>
      </footer>


    </main>
  )
}

export default App
