"use client";

import React, { ChangeEvent, FC } from "react";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

const Input: FC<Props> = ({
  value,
  onChange,
  placeholder = "",
  className = "",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};

export default Input;
