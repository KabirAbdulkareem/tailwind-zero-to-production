export default function App() {
  return (
    <div>
      <div class="bg-gray-100 lg:grid lg:grid-cols-2 2xl:grid-cols-5">
        <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div class="xl:max-w-xl">
            {" "}
            <img class="h-10" src="/img/logo.svg" alt="workcation" />
            <img
              class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/img/beach-work.jpg"
              alt="woman workcationing at the beach"
            />
            <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br />
              <span class="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p class="mt-2 text-gray-600 sm:text-xl">
              Workation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice wether even when you're not
              on vacation.
            </p>
            <div class="mt-4 space-x-1 sm:mt-6">
              <a
                href="#"
                class="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition"
              >
                Book your escape
              </a>
            </div>
          </div>
        </div>

        <div class="hidden relative lg:block 2xl:col-span-3">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
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

        <div id="cards" className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">

          <div id="card" className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-32 w-32"
              src="/img/toronto.jpg"
              alt="Toronto skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Toronto</h3>
              <p className="text-gray-600">$120 / night average</p>
              <div className="mt-4">
                <a href="#" className="text-indigo-500 hover:text-indigo-400">
                  Explore 76 properties
                </a>
              </div>
            </div>
          </div>

          <div id="card" className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-32 w-32"
              src="/img/malibu.jpg"
              alt="Malibu clifs"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Malibu</h3>
              <p className="text-gray-600">$120 / night average</p>
              <div className="mt-4">
                <a href="#" className="text-indigo-500 hover:text-indigo-400">
                  Explore 76 properties
                </a>
              </div>
            </div>
          </div>

          <div id="card" className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-32 w-32"
              src="/img/chicago.jpg"
              alt="Chicago city"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Chicago</h3>
              <p className="text-gray-600">$120 / night average</p>
              <div className="mt-4">
                <a href="#" className="text-indigo-500 hover:text-indigo-400">
                  Explore 76 properties
                </a>
              </div>
            </div>
          </div>

          <div id="card" className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-32 w-32"
              src="/img/seattle.jpg"
              alt="Toronto skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Seattle</h3>
              <p className="text-gray-600">$120 / night average</p>
              <div className="mt-4">
                <a href="#" className="text-indigo-500 hover:text-indigo-400">
                  Explore 76 properties
                </a>
              </div>
            </div>
          </div>

          <div id="card" className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-32 w-32"
              src="/img/colorado.jpg"
              alt="Toronto skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Colorado</h3>
              <p className="text-gray-600">$120 / night average</p>
              <div className="mt-4">
                <a href="#" className="text-indigo-500 hover:text-indigo-400">
                  Explore 76 properties
                </a>
              </div>
            </div>
          </div>

          <div id="card" className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-32 w-32"
              src="/img/miami.jpg"
              alt="Toronto skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Miami</h3>
              <p className="text-gray-600">$120 / night average</p>
              <div className="mt-4">
                <a href="#" className="text-indigo-500 hover:text-indigo-400">
                  Explore 76 properties
                </a>
              </div>
            </div>
          </div>


        </div>
        
      </div>
    </div>
  );
}
