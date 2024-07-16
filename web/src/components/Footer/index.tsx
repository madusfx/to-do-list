export function Footer() {
  return (
    <footer className="mt-20 relative justify-center w-full h-52">
      <div className="absolute inset-0 -skew-y-3 transform bg-black"></div>
      <div className="absolute inset-0 translate-y-10 sm:translate-y-14 transform bg-black"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <h1 className="font-bold text-2xl">Need help?</h1>
        <a
          href="mailto:coopers@coopers.pro"
          className="mt-2 font-semibold text-xl"
        >
          coopers@coopers.pro
        </a>
        <p className="mt-2 text-sm">© 2024 Coopers. All rights reserved.</p>
      </div>

      <div className="absolute top-full left-1/4 -skew-y-1 transform bg-customGreen w-1/2 h-8"></div>
      <div className="absolute top-full left-1/4 translate-y-2 sm:translate-y-6 transform bg-customGreen w-1/2 h-8"></div>
    </footer>
  );
}
