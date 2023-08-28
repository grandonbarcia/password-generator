import Image from 'next/image';
import { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const reallyLazyWay = 'qwertyuiopasdfghjklzxcvbnm'.split('').sort();

const DATABASE = {
  upperLetters: ALPHABET.toUpperCase().split(''),
  lowerLetters: ALPHABET.split(''),
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  symbols: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'],
};

const RED = 'bg-red-600';
const ORA = 'bg-orange-600';
const YEL = 'bg-yellow-600';
const GRE = 'bg-green-600';

export default function Home() {
  const [password, setPassword] = useState('P4$5W0rD!');
  const [length, setLength] = useState(10);
  const [rules, setRules] = useState({
    upperLetters: true,
    lowerLetters: true,
    numbers: true,
    symbols: false,
  });

  const [evaluation, setEvaluation] = useState({});

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomChar(rule) {
    const arrOfChars = [...DATABASE[rule]];
    const randomNum = getRandomNum(0, arrOfChars.length - 1);

    return arrOfChars[randomNum];
  }

  function generateNewPassword() {
    const rulesToApply = Object.keys(rules).filter((k) => rules[k]);
    const passwordArr = [];
    for (let i = 0; i < length; i++) {
      const randomNum = getRandomNum(0, rulesToApply.length - 1);
      const rule = rulesToApply[randomNum];

      const randomChar = getRandomChar(rule);
      passwordArr.push(randomChar);
    }

    setPassword(passwordArr.join(''));
  }

  function handleChange(e) {
    setLength(e.target.value);
  }

  function handleCheck(value) {
    setRules((prevData) => {
      return { ...prevData, [value]: !prevData[value] };
    });
  }

  function StrengthBar() {
    const strengthArr = Array(4);
    let color;

    switch (score) {
      case 1:
        color = RED;
        break;
      case 2:
        color = ORA;
        break;
      case 3:
        color = YEL;
        break;
      case 4:
        color = GRE;
        break;
      default:
      // code block
    }
    console.log(color);

    for (let i = 0; i < 4; i++) {
      strengthArr.push(<div className="h-10 w-4 bg-white"></div>);
    }
    return strengthArr;
  }

  useEffect(() => {
    setEvaluation(zxcvbn(password));
  }, [password]);

  useEffect(() => {
    console.log(evaluation);
  }, [evaluation]);

  return (
    <div className="flex justify-center items-center h-screen w-100 bg-gray-950">
      <div className="h-5/6 sm:w-4/6 md:w-4/6 lg:w-2/6 ">
        <div className="text-zinc-400 mb-8 text-center text-2xl font-bold ">
          Password Generator
        </div>
        <div className="flex pl-8 pr-8 items-center h-1/6 bg-gray-700 mb-5 text-4xl text-zinc-400">
          <div>{password}</div>
        </div>
        <div className="h-3/5 bg-gray-700 p-8">
          <div className="flex justify-between text-white text-xl">
            <div>Character Length</div>
            <div className="text-green-500 text-4xl">{length}</div>
          </div>
          <div className="pt-4 pb-4">
            <input
              className="w-full accent-green-800"
              type="range"
              min="5"
              max="15"
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <input
              type="checkbox"
              className="bg-red-100 border-red-300 text-red-500 focus:ring-red-200 "
              checked={rules['upperLetters']}
              onChange={() => handleCheck('upperLetters')}
            />
            <div className="text-white text-xl pl-6">
              Include Uppercase Letters
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              className="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
              checked={rules['lowerLetters']}
              onChange={() => handleCheck('lowerLetters')}
            />
            <div className="text-white text-xl pl-6">
              Include Lowercase Letters
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              className="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
              checked={rules['numbers']}
              onChange={() => handleCheck('numbers')}
            />
            <div className="text-white text-xl pl-6">Include Numbers</div>
          </div>
          <div className="flex mb-5">
            <input
              type="checkbox"
              className="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"
              checked={rules['symbols']}
              onChange={() => handleCheck('symbols')}
            />
            <div className="text-white text-xl pl-6">Include Symbols</div>
          </div>
          <div className="flex items-center justify-between h-20 bg-gray-800 p-6 text-zinc-400 font-semibold ">
            <div>STRENGTH</div>
            <div className="w-1/6 flex justify-between">
              <StrengthBar />
            </div>
          </div>
          <div className="bg-green-400 h-20  mt-5 text-center font-semibold ">
            <button onClick={generateNewPassword} className=" h-full w-full">
              GENERATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
