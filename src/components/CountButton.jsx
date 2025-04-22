import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

const CountButton = () => {
    const [count, setCount] = useState(0);
    const handleCountAdd = () => {
        setCount(count + 1)
    }

    const handleCountRemove = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
  return (
    <button className="shadow px-1 w-full md:basis-2/3 py-2 rounded-lg flex items-center justify-between bg-light-grayish-blue text-sm">
      <Minus
        className="text-custom-orange h-4 w-4 cursor-pointer font-700"
        onClick={handleCountRemove}
      />
      <span className="text-dark-blue font-700">{count}</span>
      <Plus
        className="text-custom-orange h-4 w-4 cursor-pointer font-700"
        onClick={handleCountAdd}
      />
    </button>
  );
}

export default CountButton;
