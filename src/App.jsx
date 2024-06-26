import popularDestinations from "./data/popularDestinations";
import DestinationCrad from "./components/DestinationCrad";

export default function App() {
  let destinations = popularDestinations;
  return (
    <div className="bg-white">
      <div className="bg-gray-100 lg:grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            {" "}
            <img className="h-10" src="/img/logo-brand.svg" alt="workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/img/beach-work.jpg"
              alt="woman workcationing at the beach"
            />
            <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br />
              <span className="text-brand">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:text-xl">
              Workation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice wether even when you're not
              on vacation.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                href="#"
                className="inline-block px-5 py-3 rounded-lg transform transition
                 bg-brand hover:bg-brand-light hover:-translate-y-0.5
                  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-brand
                  focus:ring-opacity-50 active:bg-brand-dark active:ring-brand-dark uppercase tracking-wider
                  font-semibold text-sm text-white shadow-lg sm:text-base"
              >
                Book your escape
              </a>
            </div>
          </div>
        </div>

        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/img/beach-work.jpg"
            alt="woman workcationing at the beach"
          />
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h1 className="text-xl text-gray-900">Polpular destinations</h1>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>

        <div
          id="cards"
          className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {destinations.map((destination) => (
            <DestinationCrad destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  );
}
