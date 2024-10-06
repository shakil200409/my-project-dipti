import Footer from "./components/Footer";
import Header from "./components/Header";
import img1 from "./assets/forest.jpg";
import img2 from "./assets/mountains.jpg";
import img3 from "./assets/ocean.jpg";
import img4 from "./assets/wildlife.jpg";

function App() {
  return (
    <>
      <Header></Header>

      <div className="container mx-auto p-8">
        <header className="bg-blue-600 text-white text-center py-20">
          <h1 className="text-4xl font-bold">Explore the Beauty of Nature</h1>
          <p className="mt-4 text-lg">
            Discover the wonders of our planet and its incredible landscapes.
          </p>
        </header>

        <div className="container mx-auto p-8 space-y-8">
          <section>
            <h2 className="text-3xl font-bold">Forests</h2>
            <img
              src={img1}
              alt="Forest"
              className="w-full h-64 object-cover rounded-md mt-4"
            />
            <p className="mt-2">
              Forests cover about 31% of the Earth's land area. They are vital
              for maintaining ecological balance, providing habitats for
              countless species, and absorbing carbon dioxide.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Oceans</h2>
            <img
              src={img2}
              alt="Ocean"
              className="w-full h-64 object-cover rounded-md mt-4"
            />
            <p className="mt-2">
              Oceans are the largest ecosystems on Earth, covering more than 70%
              of the planet's surface. They play a crucial role in regulating
              climate and weather patterns.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Mountains</h2>
            <img
              src={img3}
              alt="Mountain"
              className="w-full h-64 object-cover rounded-md mt-4"
            />
            <p className="mt-2">
              Mountains are majestic natural formations that provide diverse
              habitats and are often home to unique flora and fauna. They also
              influence climate and weather.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Wildlife</h2>
            <img
              src={img4}
              alt="Wildlife"
              className="w-full h-64 object-cover rounded-md mt-4"
            />
            <p className="mt-2">
              Wildlife encompasses all living organisms that are not
              domesticated. They play vital roles in maintaining the balance of
              ecosystems.
            </p>
          </section>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
