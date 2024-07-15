import './style.css';

type BannerBackgroundProps = {
  children: JSX.Element | JSX.Element[];
};

export function BannerBackground({ children }: BannerBackgroundProps) {
  return (
    <section className="relative px-20 sm:py-6 mt-36 w-full flex flex-col items-center section-bg">
      {children}
    </section>
  );
}
