import classNames from 'classnames';

type CardProps = {
  title: string;
  subtitle: string;
  type: 'todo' | 'done';
  list?: [];
};

export function Card({ title, subtitle, type, list }: CardProps) {
  return (
    <div
      className={classNames(
        'bg-white drop-shadow-md w-80 sm:w-96 p-6 border-t-[20px]',
        {
          'border-customOrange': type === 'todo',
          'border-customGreen': type === 'done',
        },
      )}
    >
      <h1 className="text-black text-4xl text-center font-poppins font-semibold">
        {title}
      </h1>
      <p className="text-black text-2xl text-center">{subtitle}</p>
      <div>
        <ul className="mt-4 flex flex-col">
          <li className="mt-2 flex gap-4">
            <div
              className={classNames(
                'box-border border-2 w-6 h-6 rounded-full',
                {
                  'border-customOrange': type === 'todo',
                  'border-customGreen': type === 'done',
                },
              )}
            ></div>
            <p className="font-semibold text-base">this is a new task</p>
          </li>
          <li className="mt-2 flex gap-4">
            <div
              className={classNames(
                'box-border border-2 w-6 h-6 rounded-full',
                {
                  'border-customOrange': type === 'todo',
                  'border-customGreen': type === 'done',
                },
              )}
            ></div>
            <p className="font-semibold text-base">this is a new task</p>
          </li>
          <li className="mt-2 flex gap-4">
            <div
              className={classNames(
                'box-border border-2 w-6 h-6 rounded-full',
                {
                  'border-customOrange': type === 'todo',
                  'border-customGreen': type === 'done',
                },
              )}
            ></div>
            <p className="font-semibold text-base">this is a new task</p>
          </li>
          <li className="mt-2 flex gap-4">
            <div
              className={classNames(
                'box-border border-2 w-6 h-6 rounded-full',
                {
                  'border-customOrange': type === 'todo',
                  'border-customGreen': type === 'done',
                },
              )}
            ></div>
            <p className="font-semibold text-base">this is a new task</p>
          </li>
          <li className="mt-2 flex gap-4">
            <div
              className={classNames(
                'box-border border-2 w-6 h-6 rounded-full',
                {
                  'border-customOrange': type === 'todo',
                  'border-customGreen': type === 'done',
                },
              )}
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
