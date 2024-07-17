'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../Input';
import { contactSchema } from '@/utils/yup.schema';

export interface IFormInput {
  name?: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactCard() {
  const methods = useForm<IFormInput>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
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

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-3/4 sm:w-1/2 bg-white drop-shadow-md p-10"
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src="/images/contact-image.png"
              alt="Mulher mexendo no computador"
              className="absolute -top-32 left-1/2 transform -translate-x-1/2 rounded-full"
            />
          </div>
          <div className="flex items-start gap-6 mt-14 lg:mt-0">
            <div className="flex justify-center p-2 bg-customGreen rounded-md w-14 h-14">
              <img src="/icons/mail-icon.svg" alt="" />
            </div>
            <h1>
              GET IN <br />
              <span className="font-bold">TOUCH</span>
            </h1>
          </div>

          <Input
            label="Your name"
            placeholder="type your name here..."
            type="text"
            name="name"
            register={register}
            errorMessage={errors.name?.message}
          />
          <div className="flex flex-col lg:flex-row gap-4">
            <Input
              label="Email*"
              placeholder="example@example.com"
              type="email"
              name="email"
              required
              register={register}
              errorMessage={errors.email?.message}
            />
            <Input
              label="Telephone*"
              placeholder="(  ) ____-____"
              type="text"
              name="phone"
              required
              register={register}
              errorMessage={errors.phone?.message}
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="text-base text-customBlue">
              Message*
            </label>
            <textarea
              rows={4}
              cols={50}
              className="border rounded-md border-customBlue p-3 w-full"
              placeholder="Type what you want to say to us"
              name="name"
            />
            <p>{errors.message?.message}</p>
          </div>
          <button className="mt-8 w-full p-4 bg-customGreen rounded-md">
            <p className="text-white font-bold uppercase">send now</p>
          </button>
        </form>
      </FormProvider>
    </>
  );
}
