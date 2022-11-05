import React from 'react'

type Props = {
    id:string
    name:string
    isConnected:number
    soilMoisture:number
    temperature:number
    lastWatering:string
}

const DeviceCard = (props: Props) => {
    return (
        <div className="w-[250px] h-[240px] bg-[#F3F3F3] rounded-lg shadow-xl mt-4">
            <div className="w-full h-[40px] flex">
                <div className="w-[180px] h-full pl-4 text-primary-dark font-bold text-[28px]">{props.name}</div>
                <div className="w-[70px] h-full pr-4 flex items-center justify-around">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#6e6e6e] shadow-xl" />
                    <div className="w-[20px] h-[20px] rounded-full bg-[#6e6e6e] shadow-xl" />
                </div>
            </div>
            <div className="w-full px-4">
                <table>
                    <tr>
                        <td className="text-[20px] font-medium text-primary-light">Wilgotność ziemi</td>
                        <td className="text-[20px] font-light text-[#727272] pl-4">{props.soilMoisture}</td>
                    </tr>
                    <tr>
                        <td className="text-[20px] font-medium text-primary-light">Temperatura</td>
                        <td className="text-[20px] font-light text-[#727272] pl-4">{props.temperature}°</td>
                    </tr>
                </table>
            </div>
            <div className="w-full flex flex-col items-center pt-[20px]">
                <div className="text-[20px] font-medium text-primary-light">Data podlewania</div>
                <div className="text-[20px] font-light text-[#727272]">{props.lastWatering}</div>
            </div>
        </div>
    )
}

export default DeviceCard