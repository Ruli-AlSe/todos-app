'use client';

import { setCookie } from 'cookies-next';
import { useState } from 'react';

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }: Props) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie('selectedTab', tab.toString());
  };

  return (
    <div
      className="grid w-full space-x-2 rounded-xl bg-gray-200"
      style={{ gridTemplateColumns: `repeat(${tabOptions.length}, minmax(0, 1fr))` }}
    >
      {tabOptions.map((opt) => (
        <div key={opt}>
          <input
            type="radio"
            id={opt.toString()}
            className="peer hidden"
            checked={selected === opt}
            onChange={() => {}}
          />
          <label
            onClick={() => onTabSelected(opt)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:text-white transition-all"
          >
            {opt}
          </label>
        </div>
      ))}
    </div>
  );
};
