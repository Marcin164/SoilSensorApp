import React, { Fragment } from 'react'
import DataTableWidget from '../Components/Widgets/DataTableWidget'
import InfoWidget from '../Components/Widgets/InfoWidget'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

type Props = {}

const Home = (props: Props) => {
  const ResponsiveGridLayout = WidthProvider(Responsive)
  const layout: any = [
    { i: 'watering-history', x: 0, y: 0, w: 4, h: 6 },
    { i: 'insufficient-humidity', x: 2, y: 0, w: 1, h: 2 },
    { i: 'bad-temperature', x: 4, y: 0, w: 1, h: 2 },
    { i: 'insufficient-water', x: 4, y: 0, w: 1, h: 2 }
  ]

  return (
    <div className="w-full bg-[#F9F9F9] min-h-[calc(100vh-70px)] pt-2">
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}>
        <DataTableWidget
          key="watering-history"
          data-grid={{ x: 0, y: 0, w: 4, h: 6 }}
          title="Watering History"
          columns={[]}
          data={[]}
        />
        {/* <DataTableWidget
          key="insufficient-humidity"
          title="Insufficient humidity"
          columns={[]}
          data={[]}
        />
        <DataTableWidget title="Bad temperature" columns={[]} data={[]} />
        <DataTableWidget title="Insufficient water" columns={[]} data={[]} />
        <InfoWidget title="Offline devices" /> */}
      </ResponsiveGridLayout>
    </div>
  )
}

export default Home
