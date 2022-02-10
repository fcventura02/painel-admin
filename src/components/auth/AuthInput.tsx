interface IAuthInput {
  id: string;
  label: string;
  value: any;
  type?: "text" | "email" | "password";
  required?: boolean;
  isRender?: boolean;
  setValue: (newValue: string) => void;
}

export default function AuthInput({
  id,
  type = "text",
  required,
  isRender = true,
  value,
  label,
  setValue,
}: IAuthInput) {
  return isRender ? (
    <div
      className={`
            flex flex-col  mt-4
      `}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        className={`
            px-4 py-3 rounded-lg bg-gray-200
            border focus:border-blue-500 focus:bg-white focus:outline-none
        `}
      />
    </div>
  ) : null;
}
