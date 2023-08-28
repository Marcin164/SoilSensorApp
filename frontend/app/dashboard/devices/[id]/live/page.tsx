"use client";

import LineChartWrapper from "@/app/_components/Charts/LineChart";
import Header from "@/app/_components/Headers/Header";
import InfoTile from "@/app/_components/Others/InfoTile";
import React from "react";

const lineData = [
  {
    humidity: 324,
    time: 14,
  },
  {
    humidity: 466,
    time: 15,
  },
];

const page = () => {
  return (
    <div>
      <div className="float-left w-[calc(100%-200px)] pr-4">
        <div>
          <Header text="Info" />
          <InfoTile title="Temperature" value="14" />
          <InfoTile title="Humidity" value="324" />
          <InfoTile title="Connection state" value="Connected" />
        </div>
        <div>
          <Header text="Humidity" />
          <LineChartWrapper
            data={lineData}
            tooltip
            xKey="time"
            yKey="humidity"
            height={220}
          />
        </div>
        <div>
          <Header text="Temperature" />
          <LineChartWrapper
            data={[]}
            tooltip
            xKey="time"
            yKey="humidity"
            height={220}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
