import Image from 'next/image';
import { useState } from 'react';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const UPPERCASE = ALPHABET.toUpperCase().split('');
const LOWERCASE = ALPHABET.split('');
const SYMBOLS = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];

const reallyLazyWay = 'qwertyuiopasdfghjklzxcvbnm'.split('').sort();

export default function Home() {
  const [password, setPassword] = useState('P4$5W0rD!');
  const [length, setLength] = useState(10);

  function generateNewPassword() {}

  return (
    <div className="flex justify-center items-center h-screen w-100 bg-gray-950">
      <div className="h-5/6 w-2/6 ">
        <div className="text-zinc-400 mb-8 text-center text-2xl font-bold ">
          Password Generator
        </div>
        <div className="flex pl-8 pr-8 items-center h-1/6 bg-gray-700 mb-5 text-4xl text-zinc-400">
          <div>P4$5W0rD!</div>
        </div>
        <div className="h-3/5 bg-gray-700 p-8">
          <div className="flex justify-between text-white text-xl">
            <div>Character Length</div>
            <div className="text-green-500 text-4xl">0</div>
          </div>
          <div className="pt-4 pb-4">
            <input
              className="w-full accent-green-800"
              type="range"
              min="0"
              max="1000"
            />
          </div>
          <div className="flex">
            <input
              type="checkbox"
              class="bg-red-100 border-red-300 text-red-500 focus:ring-red-200 "
            />
            <div className="text-white text-xl pl-6">
              Include Uppercase Letters
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              class="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
            />
            <div className="text-white text-xl pl-6">
              Include Lowercase Letters
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              class="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
            />
            <div className="text-white text-xl pl-6">Include Numbers</div>
          </div>
          <div className="flex mb-5">
            <input
              type="checkbox"
              class="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
            />
            <div className="text-white text-xl pl-6">Include Symbols</div>
          </div>
          <div className="flex items-center h-20 bg-gray-800 p-6 text-zinc-400 font-semibold ">
            <div>STRENGTH</div>
            <div>
              <div className="h-10 w-2 border-1"></div>
            </div>
          </div>
          <div className="bg-green-400 h-20  mt-5 text-center font-semibold ">
            <button className=" h-full w-full">GENERATE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
