type BannerBackgroundProps = {
  children: JSX.Element | JSX.Element[];
};

export function BannerBackground({ children }: BannerBackgroundProps) {
  return (
    <section className="mt-20 relative w-full h-72">
      <div className="absolute inset-0 -skew-y-3 transform bg-black"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </section>
  );
}
