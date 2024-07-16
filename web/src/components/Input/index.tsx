type InputProps = {
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
};

export function Input({ type, label, placeholder, required }: InputProps) {
  return (
    <div className="flex flex-col w-full mt-6">
      <label htmlFor="" className="text-base text-customBlue">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border rounded-md border-customBlue p-3"
        required={required}
      />
    </div>
  );
}
