type CardProps = {
  title: string;
  subtitle: string;
  color: 'customOrange' | 'customGreen';
  list?: [];
};

export function Card({ title, subtitle, color, list }: CardProps) {
  return (
    <div
      className={`bg-white drop-shadow-md w-96 p-6 border-t-[20px] border-${color}`}
    >
      <h1 className="text-black text-4xl text-center font-poppins font-semibold">
        {title}
      </h1>
      <p className="text-black text-2xl text-center">{subtitle}</p>
      <div>
        <ul className="mt-4 flex flex-col">
          <li className="mt-2 flex gap-4">
            <div
              className={`box-border border-2 border-${color} w-6 h-6 rounded-full`}
            ></div>
            <p className="font-semibold text-base">this is a new task</p>
          </li>
          <li className="mt-2 flex gap-4">
            <div
              className={`box-border border-2 border-${color} w-6 h-6 rounded-full`}
            ></div>
            <p className="font-semibold text-base">this is a new task</p>
          </li>
          <li className="mt-2 flex gap-4">
            <div
              className={`box-border border-2 border-${color} w-6 h-6 rounded-full`}
            ></div>
            <p className="font-semibold text-base">this is a new task</p>
          </li>
          <li className="mt-2 flex gap-4">
            <div
              className={`box-border border-2 border-${color} w-6 h-6 rounded-full`}
            ></div>
            <p className="font-semibold text-base">this is a new task</p>
          </li>
          <li className="mt-2 flex gap-4">
            <div
              className={`box-border border-2 border-${color} w-6 h-6 rounded-full`}
            ></div>
            <p className="font-semibold text-base">this is a new task</p>
          </li>
        </ul>
        <div className="flex justify-center">
          <button className="mt-6 bg-black p-4 rounded-md w-3/4">
            <p className="text-white font-semibold text-2xl text-center">
              erase all
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
