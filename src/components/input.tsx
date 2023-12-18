import React, { ChangeEvent, FormEvent } from "react";

export type InputParams = {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (event: FormEvent) => void;
  icon?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

function Input({
  label,
  value,
  onChange,
  onSubmit,
  icon: icons,
  required,
  disabled,
  placeholder = label,
}: InputParams) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <form className="flex-1" onSubmit={onSubmit}>
      <label
        htmlFor={label}
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        {label}
      </label>
      <div className="relative">
        {icons && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {icons}
          </div>
        )}
        <input
          type="text"
          id={label}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-blue-500"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      </div>
    </form>
  );
}

export default Input;
