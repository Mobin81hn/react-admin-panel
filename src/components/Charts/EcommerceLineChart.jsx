import { AgCharts } from "ag-charts-react";

const chartOptions = {
    data: [
        {
          quarter: "Q1",
          petrol: 200,
          diesel: 100,
        },
        {
          quarter: "Q2",
          petrol: 300,
          diesel: 130,
        },
        {
          quarter: "Q3",
          petrol: 260,
          diesel: 160,
        },
        {
          quarter: "Q4",
          petrol: 320,
          diesel: 200,
        },
    ],
    series: [
      {
        xKey: "quarter",
        yKey: "petrol",
        yName: "Petrol",
        strokeWidth: 4,
        marker: {
          enabled: false,
        }
      }
    ]
  }

const EcommerceLineChart = () => {
    return ( 
        <AgCharts className="w-full max-w-96" options={chartOptions} />
     );
}
 
export default EcommerceLineChart;