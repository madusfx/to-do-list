import { useState, useEffect } from 'react';
import classNames from 'classnames';
import api from '@/services/api';
import { getToken } from '@/services/auth';

type CardProps = {
  title: string;
  type: 'todo' | 'done';
  list: ListItem[];
  onUpdate: () => void;
};

export type ListItem = {
  title: string;
  completed: boolean;
  _id: string;
};

export function Card({ onUpdate, title, type, list: initialList }: CardProps) {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState<ListItem[]>(initialList);
  const completedTasks = list.filter(item => item.completed).length;
  const userToken = getToken();

  const handleKeyDown = (event: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleCreateItem(inputValue);
      setInputValue('');
    }
  };

  async function handleCreateItem(title: string) {
    const data = {
      title: title,
    };
    try {
      const response = await api.post('/list/item', data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setList(prevList => [...prevList, response.data.item]);
    } catch (err) {
      console.error('error creating item', err);
    }
  }

  async function handleDeleteItem(_id: string) {
    try {
      await api.delete(`/list/item/${_id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setList(list.filter(item => item._id !== _id));
    } catch (err) {
      console.error('error when deleting item', err);
    }
  }

  async function handleEraseAll() {
    const itemsToDelete = list.filter(item =>
      type === 'todo' ? !item.completed : item.completed,
    );
    for (const item of itemsToDelete) {
      await handleDeleteItem(item._id);
    }
    onUpdate();
  }

  async function handleCompleteItem(_id: string) {
    const data = {
      completed: true,
    };
    try {
      await api.put(`/list/item/${_id}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      onUpdate();
    } catch (err) {
      console.error('error when updating item', err);
    }
  }

  useEffect(() => {
    setList(initialList);
  }, [initialList]);

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
      {type === 'todo' ? (
        <>
          <p className="text-black text-2xl text-center">
            Take a breath. Start doing.
          </p>
          <div>
            <ul className="mt-4 flex flex-col">
              {list
                .filter(item => !item.completed)
                .map(item => (
                  <li className="mt-2 flex gap-4" key={item._id}>
                    <button
                      className="box-border border-2 w-6 h-6 rounded-full border-customOrange"
                      onClick={() => handleCompleteItem(item._id)}
                    ></button>
                    <p className="font-semibold text-base">{item.title}</p>
                    <button
                      className="opacity-0 hover:opacity-100 transition-opacity duration-300 ml-auto"
                      onClick={() => handleDeleteItem(item._id)}
                    >
                      <p className="text-customGray">delete</p>
                    </button>
                  </li>
                ))}
              <li className="mt-2 flex gap-4">
                <div className="box-border border-2 w-6 h-6 rounded-full border-customOrange"></div>
                <input
                  type="text"
                  placeholder="create new item..."
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="placeholder-customOrange border-none focus:border-none"
                  style={{ outline: 'none', border: 'none' }}
                />
              </li>
            </ul>
            <div className="flex justify-center">
              <button
                className="mt-6 bg-black p-4 rounded-md w-3/4"
                onClick={handleEraseAll}
              >
                <p className="text-white font-semibold text-2xl text-center">
                  erase all
                </p>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-black text-2xl text-center">
            {completedTasks > 0
              ? `Congratulations! You have done ${completedTasks} tasks`
              : "You haven't completed any tasks yet"}
          </p>
          <div>
            <ul className="mt-4 flex flex-col">
              {list
                .filter(item => item.completed)
                .map(item => (
                  <li className="mt-2 flex gap-4" key={item._id}>
                    <div className="box-border border-2 w-6 h-6 p-1 rounded-full border-customGreen bg-customGreen">
                      <img src="/icons/check-solid.svg" alt="" />
                    </div>
                    <p className="font-semibold text-base">{item.title}</p>
                    <button
                      className="opacity-0 hover:opacity-100 transition-opacity duration-300 ml-auto"
                      onClick={() => handleDeleteItem(item._id)}
                    >
                      <p className="text-customGray">delete</p>
                    </button>
                  </li>
                ))}
            </ul>
            <div className="flex justify-center">
              <button
                className="mt-6 bg-black p-4 rounded-md w-3/4"
                onClick={handleEraseAll}
              >
                <p className="text-white font-semibold text-2xl text-center">
                  erase all
                </p>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
