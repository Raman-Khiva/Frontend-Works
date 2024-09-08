import Hero from "./componets/Hero"
import Navbar from "./componets/Navbar"
import Products from "./componets/Products"
import About from "./componets/About"
import Reviews from "./componets/Reviews";

const App = () => {
  

  return (
    <section>
      <div className="bg_image ">
        <section>
          <Navbar/>
        </section>

        <section className="mt-20 md:mt-0 max-[480px]:mt-12">
          <Hero/>
        </section>
      </div>

      <section className="bg-[#1b1616] text-white">
        <Products/>
      </section>

      <section>
        <About/>
      </section>

      <section>
        <Reviews/>
      </section>

    </section>
  )
}

export default App
