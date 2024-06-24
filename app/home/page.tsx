import Head from "next/head";
import Footer from "../components/Footer";
import HeroSection from "../components/Home/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>FitTrack - Your Ultimate Fitness Tracker</title>
        <meta
          name="description"
          content="Track your fitness progress and nutrition effortlessly with FitTrack."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex flex-col items-center justify-center flex-1 px-20 text-center bg-cover"
        style={{ backgroundImage: "url(/images/hero-background.jpg)" }}
      >
        <HeroSection />
        <div className="mt-12">
          <a
            href="#"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
          >
            Get Started
          </a>
        </div>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="/images/fitness.jpg"
              alt="Fitness"
              className="h-48 w-48 object-cover rounded-full"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              Track Your Lifts
            </h2>
            <p className="mt-2 text-gray-600">
              Capture and analyze your workout progress with ease.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="/images/meal.jpg"
              alt="Meal"
              className="h-48 w-48 object-cover rounded-full"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              Analyze Your Meals
            </h2>
            <p className="mt-2 text-gray-600">
              Get macro estimates from your meal photos to stay on track with
              your nutrition.
            </p>
          </div>
        </section>

        <section className="mt-12 max-w-5xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                AI-Powered Tracking
              </h3>
              <p className="mt-2 text-gray-600">
                Use our advanced AI to analyze your workout form and provide
                feedback.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Macro Estimation
              </h3>
              <p className="mt-2 text-gray-600">
                Take pictures of your meals and get an estimate of your daily
                macros.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Progress Reports
              </h3>
              <p className="mt-2 text-gray-600">
                Receive detailed progress reports to keep track of your fitness
                journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Community Support
              </h3>
              <p className="mt-2 text-gray-600">
                Join a community of fitness enthusiasts for support and
                motivation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Personalized Goals
              </h3>
              <p className="mt-2 text-gray-600">
                Set and achieve personalized fitness goals tailored to your
                needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Reminders & Alerts
              </h3>
              <p className="mt-2 text-gray-600">
                Get reminders and alerts to stay on track with your fitness
                routine.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-5xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                "I love how easy it is to track my meals and stay on top of my
                nutrition. Highly recommend!" - Sarah P.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                "The progress reports keep me motivated and on track with my
                goals. FitTrack is a game-changer." - Mike R.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-5xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get Started Today
          </h2>
          <div className="flex justify-center">
            <a
              href="#"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
            >
              Sign Up Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
