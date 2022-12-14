import {useContext, useState} from 'react';
import { KnucklebonesContext } from '../context/knucklebones';
import Table from './Table';

import Example1 from '../static/jpg/przyklad1.jpg'
import Example2 from '../static/jpg/przyklad2.jpg'
import Example3 from '../static/jpg/przyklad3.jpg'

import Example2_1 from '../static/jpg/przyklad2_1.jpg'
import Example2_2 from '../static/jpg/przyklad2_2.jpg'
import { useTranslation } from 'react-i18next';

function Rules(){
    const {t,i18n} = useTranslation();
    const {changeGameStarted}=useContext(KnucklebonesContext)
    const data = [
        {first:1, second: 4, third: 9 },
        {first:2, second: 8, third: 18 },
        {first:3, second: 12, third: 27 },
        {first:4, second: 16, third: 36},
        {first:5, second: 20, third: 45 },
        {first:6, second: 24, third: 54 },
    ]

    const config = [
        {label: t("diceNumber"), render: (number) => number.first},
        {label: t("double"), render: (number) => number.second},
        {label: t("triple"), render: (number) => number.third},

    ]

    return( <div className="flex justify-center flex-col ml-2 mr-2 items-center">
        <button className="border pl-10 pr-10 p-5 hover:bg-gray-400 rounded mt-5" onClick={changeGameStarted}>{t('play')}</button>
    <div className="text-2xl mt-5 mb-5">{t("firstTime")}</div>
    <li>{t("whatIsKnucklebone")} <u>{t("2person")}</u>{t("uCanPlay")} <u>{t("only1device")}</u></li>
    <li>{t("playersTakeTurns")}</li>
    <li>{t("eachPlayer")}</li>
    <li>{t("filledAll")}</li>
    <li>{t("ifAPlayer")}</li>
    <li>{t("youCanDestroy")}</li>
    <p className='font-bold mt-5 text-xl'>{t("JustLikeThis")}</p>
    <div className='flex max-lg:flex-col justify-center w-60 p-4'>
        <img className='border m-2' alt="Example2_1" src={Example2_1}></img>
        <img className='border m-2' alt="Example2_2" src={Example2_2}></img>
    </div>
    <p className='font-bold mt-5 text-xl'>{t("ValueCalculation")}</p>
    <Table data={data} config={config}/>
    <p className='font-bold mt-5 text-xl'>{t("HowItLooksInPractice")}</p>
    <div className='flex max-lg:flex-col justify-center w-60 p-4'>
        <img className='border m-2' alt="Example1" src={Example1}></img>
        <img className='border m-2' alt="Example2" src={Example2}></img>
        <img className='border m-2' alt="Example3" src={Example3}></img>
    </div>
  </div>)
}

export default Rules;