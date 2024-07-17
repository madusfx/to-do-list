import React, { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../Input';
import { loginSchema } from '@/utils/yup.schema';

type LoginModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

interface IFormInput {
  email?: string;
  user: string;
  password: string;
}

export function LoginModal({ setModalOpen }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const methods = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      user: '',
      password: '',
    },
    context: {
      isRegister: !isLogin,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  function handleChangeIsLogin() {
    setIsLogin(!isLogin);
    methods.clearErrors();
    methods.reset({
      email: '',
      user: '',
      password: '',
    });
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex bg-white rounded-lg p-5 shadow-custom relative">
        <img
          src="/images/image-login.png"
          alt="Ilustração de uma mulher de pé"
          className="hidden md:flex w-56 h-56"
        />
        {isLogin ? (
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Sign in</h1>
            <h2 className="text-4xl md:text-5xl text-customGreen">
              to access your list
            </h2>
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label="User:"
                type="text"
                name="user"
                register={register}
                errorMessage={errors.user?.message}
              />
              <Input
                label="Password:"
                type="text"
                name="password"
                register={register}
                errorMessage={errors.password?.message}
              />
              <button className="mt-5 bg-customGreen p-2 w-2/4">
                <p className="text-white font-semibold text-2xl">Sign in</p>
              </button>
            </form>
            <p className="mt-4 text-center">
              Não possui uma conta? Clique{' '}
              <button
                onClick={handleChangeIsLogin}
                className="text-customGreen font-bold"
              >
                aqui
              </button>{' '}
              para se registrar.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-5xl font-bold">Register</h1>
            <h2 className="text-5xl text-customGreen">to create your list</h2>
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label="E-mail:"
                type="text"
                name="email"
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                label="User:"
                type="text"
                name="user"
                register={register}
                errorMessage={errors.user?.message}
              />
              <Input
                label="Password:"
                type="text"
                name="password"
                register={register}
                errorMessage={errors.password?.message}
              />
              <button className="mt-5 bg-customGreen p-2 w-2/4">
                <p className="text-white font-semibold text-2xl">Register</p>
              </button>
            </form>
            <p className="mt-4 text-center">
              Já tem uma conta? Clique{' '}
              <button
                onClick={handleChangeIsLogin}
                className="text-customGreen font-bold"
              >
                aqui
              </button>{' '}
              para fazer o login.
            </p>
          </div>
        )}

        <button
          className="absolute top-0 right-0 m-4"
          onClick={() => setModalOpen(false)}
        >
          <p className="font-bold text-xl">close</p>
        </button>
      </div>
    </div>
  );
}
