import { Header } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <section className="relative flex sm:bg-background sm:bg-contain sm:bg-no-repeat sm:bg-right">
        <div className="px-11 mt-16">
          <h1 className="text-5xl lg:text-7xl text-black font-bold">
            Organize
            <br />
            <span className="text-customGreen">your daily jobs</span>
          </h1>
          <p className="mt-12 font-semibold">The only way to get things done</p>
          <button className="mt-8 px-6 py-3 rounded-lg bg-customGreen hover:scale-105 hover:transition hover:duration-700 hover:ease-in-out">
            <p className="text-white font-semibold">Go to To-do list</p>
          </button>
        </div>
      </section>
    </>
  );
}
