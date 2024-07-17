import { Dispatch, SetStateAction } from 'react';

type ConfirmationModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function ConfirmationModal({ setModalOpen }: ConfirmationModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col w-1/4 bg-white rounded-lg p-6 shadow-custom relative">
        <p>
          Your email has been successfully sent! Someone from our team will get
          in touch with you shortly.
        </p>
        <button className="m-4" onClick={() => setModalOpen(false)}>
          <p className="font-bold text-xl">close</p>
        </button>
      </div>
    </div>
  );
}
