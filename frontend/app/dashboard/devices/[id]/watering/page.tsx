import ButtonFilled from '@/app/_components/Buttons/ButtonFilled'
import Header from '@/app/_components/Headers/Header'
import NumberInput from '@/app/_components/Inputs/NumberInput'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div>
        <Header text="Manual watering" />
        <NumberInput label="Amount of water" info="litres" className="w-[200px]" />
        <ButtonFilled text="Start watering" />
      </div>
      <div>
        <Header text="Automatic watering" />
        <NumberInput label="Humidity level" info="humidity" className="w-[200px]" />
        <NumberInput label="Trigger humidity" info="humidity" className="w-[200px]" />
        <ButtonFilled text="Set automatic watering" />
      </div>
    </div>
  )
}

export default page
