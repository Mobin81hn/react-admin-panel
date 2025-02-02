import { AgCharts } from "ag-charts-react";
import { useState } from "react";

const LineChart = () => {
    function getLoungeData() {
        return [
          {
            time: new Date("01 Jan 2020 13:25:30 GMT"),
            sensor: 25,
          },
          {
            time: new Date("01 Jan 2020 13:26:30 GMT"),
            sensor: 24,
          },
          {
            time: new Date("01 Jan 2020 13:27:30 GMT"),
            sensor: 24,
          },
          {
            time: new Date("01 Jan 2020 13:28:30 GMT"),
            sensor: 23,
          },
          {
            time: new Date("01 Jan 2020 13:29:30 GMT"),
            sensor: 22.5,
          },
          {
            time: new Date("01 Jan 2020 13:30:30 GMT"),
            sensor: 21.5,
          },
          {
            time: new Date("01 Jan 2020 13:31:30 GMT"),
            sensor: 22.5,
          },
        ];
      }
      
      function getOfficeData() {
        return [
          {
            time: Date.parse("01 Jan 2020 13:25:00 GMT"),
            sensor: 21,
          },
          {
            time: Date.parse("01 Jan 2020 13:26:00 GMT"),
            sensor: 22,
          },
          {
            time: Date.parse("01 Jan 2020 13:28:00 GMT"),
            sensor: 22,
          },
          {
            time: Date.parse("01 Jan 2020 13:29:00 GMT"),
            sensor: 23,
          },
          {
            time: Date.parse("01 Jan 2020 13:30:00 GMT"),
            sensor: 24,
          },
          {
            time: Date.parse("01 Jan 2020 13:31:00 GMT"),
            sensor: 24,
          },
          {
            time: Date.parse("01 Jan 2020 13:32:00 GMT"),
            sensor: 24.5,
          },
          {
            time: Date.parse("01 Jan 2020 13:33:00 GMT"),
            sensor: 24.5,
          },
        ];
    }
    const [options, setOptions] = useState({
      title: {
        text: "Temperature Readings",
      },
      series: [
        {
          data: getLoungeData(),
          xKey: "time",
          yKey: "sensor",
          yName: "Lounge",
        },
        {
          data: getOfficeData(),
          xKey: "time",
          yKey: "sensor",
          yName: "Office",
        },
      ],
      axes: [
        {
          type: "time",
          position: "bottom",
        },
        {
          type: "number",
          position: "left",
          label: {
            format: "#{.1f} °C",
          },
        },
      ],
    });
  
    return <AgCharts className="h-96" options={options} />;
  };

export default LineChart;