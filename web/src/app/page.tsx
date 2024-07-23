'use client';
import { useEffect, useState } from 'react';
import { getId, getToken } from '@/services/auth';
import {
  BannerBackground,
  Card,
  Carousel,
  ContactCard,
  Footer,
  Header,
  ListItem,
  LoginModal,
} from '@/components';
import api from '@/services/api';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [list, setList] = useState<ListItem[]>([]);
  const userId = getId();
  const userToken = getToken();

  useEffect(() => {
    fetchList();
  }, []);

  const handleUpdate = () => {
    fetchList();
  };

  const fetchList = async () => {
    try {
      const response = await api.get(`/list/items/${userId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      setList(response.data);
    } catch (err) {
      console.error('Error fetching list', err);
    }
  };

  return (
    <>
      {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
      <Header setModalOpen={setModalOpen} />
      <section
        id="introduction"
        className="relative flex sm:bg-background sm:bg-contain sm:bg-no-repeat sm:bg-right"
      >
        <div className="px-11 mt-6 sm:mt-16">
          <h1 className="text-5xl lg:text-7xl text-black font-bold">
            Organize
            <br />
            <span className="text-customGreen">your daily jobs</span>
          </h1>
          <p className="mt-12 font-semibold">The only way to get things done</p>
          <button
            className="mt-8 px-6 py-3 rounded-lg bg-customGreen hover:scale-105 hover:transition hover:duration-700 hover:ease-in-out"
            onClick={fetchList}
          >
            <a href="#todolist" className="text-white font-semibold">
              Go to To-do list
            </a>
          </button>
        </div>
      </section>
      <BannerBackground>
        <h1 className="relative font-poppins text-5xl sm:text-6xl text-center text-white font-semibold inline-block">
          To-do List
          <span className="absolute left-0 right-0 bottom-[-8px] h-[4px] bg-customGreen w-full"></span>
        </h1>
        <p className="mt-8 mx-2 sm:mx-0 text-xl sm:text-2xl text-center text-white">
          Drag and drop to set your main priorities, check when done and create
          what’s new.
        </p>
      </BannerBackground>
      <section
        id="todolist"
        className="flex flex-col items-center sm:items-baseline sm:flex-row justify-center gap-12 mt-36 bg-background2 bg-auto bg-no-repeat bg-left"
      >
        <Card title="To-do" type="todo" list={list} onUpdate={handleUpdate} />
        <Card title="Done" type="done" list={list} onUpdate={handleUpdate} />
      </section>
      <section id="carousel" className="relative z-0 flex justify-center mt-20">
        <Carousel />
        <div className="bg-customGreen w-3/4 h-[520px] rounded-lg relative z-0">
          <h1 className="p-10 text-5xl font-semibold text-white">
            good things
          </h1>
        </div>
      </section>
      <section id="contact" className="flex justify-center mt-80">
        <ContactCard />
      </section>
      <Footer />
    </>
  );
}
