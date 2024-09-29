import { AgCharts } from "ag-charts-react";
import { useState } from "react";
import Header from "../../components/Header";

const Pie = () => {
    const [options, setOptions] = useState({
        data: getData(),
        title: {
          text: "Portfolio Composition",
        },
        series: [
          {
            type: "pie",
            angleKey: "amount",
            legendItemKey: "asset",
          },
        ],
      });

      function getData() {
        return [
          { asset: "Stocks", amount: 60000 },
          { asset: "Bonds", amount: 40000 },
          { asset: "Cash", amount: 7000 },
          { asset: "Real Estate", amount: 5000 },
          { asset: "Commodities", amount: 3000 },
        ];
      }
    
      return (
        <div className="mx-4 sm:mx-10 md:m-10 p-6 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Chart" title="Portfolio Composition" />
            <AgCharts className="h-96" options={options} />;
        </div>
      ) 
}
 
export default Pie;