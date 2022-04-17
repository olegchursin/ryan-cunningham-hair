import React from 'react';

interface IButton {
  readonly label?: string;
  readonly color?: 'blue' | 'green' | 'pink' | 'purple';
}

const colorMap = {
  blue: 'from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800',
  green:
    'from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
  pink: 'from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
  purple:
    'from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
};

function getColor(color: string) {
  return colorMap[color] ?? colorMap['pink'];
}

const Button: React.FC<IButton> = ({ label = 'OK', color = 'pink' }) => {
  const base =
    'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br';

  return (
    <button className={`${base} ${getColor(color)}`}>
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {label}
      </span>
    </button>
  );
};

export default Button;
