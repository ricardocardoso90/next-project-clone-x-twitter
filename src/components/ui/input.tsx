"use client"

import { KeyboardEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  value?: string;
  filled?: boolean;
  password?: boolean;
  placeholder: string;
  icon?: IconDefinition;
  onChange?: (newValue: string) => void;
  onPress?: () => void;
};

export function Input({ placeholder, password, icon, filled, value, onChange, onPress }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  function handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    if (e.code.toLowerCase() === 'enter' && onPress) {
      onPress();
    }
  };

  return (
    <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
      {icon &&
        <FontAwesomeIcon
          icon={icon}
          className="size-6 text-gray-500 ml-4"
        />
      }

      <input
        value={value}
        placeholder={placeholder}
        onChange={e => onChange && onChange(e.target.value)}
        type={password && !showPassword ? 'password' : 'text'}
        className="flex-1 outline-none bg-transparent h-full px-4"
        onKeyUp={handleKeyUp}
      />

      {password &&
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          className="cursor-pointer mr-4 size-6 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        />
      }
    </div>
  )
};