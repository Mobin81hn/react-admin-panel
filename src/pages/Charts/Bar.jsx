import { AgCharts } from "ag-charts-react";
import { useState } from "react";
import Header from "../../components/Header";

const Bar = () => {
    const [options, setOptions] = useState({
        title: {
          text: "Apple's Revenue by Region",
        },
        subtitle: {
          text: "In Billion U.S. Dollars",
        },
        data: getData(),
        series: [
          {
            type: "bar",
            xKey: "year",
            yKey: "NAQ1",
            yName: "Q1 - North America",
            legendItemName: "Q1",
            stackGroup: "na",
            fill: "#5090dc",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "NAQ2",
            yName: "Q2 - North America",
            legendItemName: "Q2",
            stackGroup: "na",
            fill: "#ffa03a",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "NAQ3",
            yName: "Q3 - North America",
            legendItemName: "Q3",
            stackGroup: "na",
            fill: "#459d55",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "NAQ4",
            yName: "Q4 - North America",
            legendItemName: "Q4",
            stackGroup: "na",
            fill: "#34bfe1",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "EURQ1",
            yName: "Q1 - Europe",
            legendItemName: "Q1",
            stackGroup: "eur",
            showInLegend: false,
            fill: "#5090dc",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "EURQ2",
            yName: "Q2 - Europe",
            legendItemName: "Q2",
            stackGroup: "eur",
            showInLegend: false,
            fill: "#ffa03a",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "EURQ3",
            yName: "Q3 - Europe",
            legendItemName: "Q3",
            stackGroup: "eur",
            showInLegend: false,
            fill: "#459d55",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "EURQ4",
            yName: "Q4 - Europe",
            legendItemName: "Q4",
            stackGroup: "eur",
            showInLegend: false,
            fill: "#34bfe1",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "ASIAQ1",
            yName: "Q1 - Asia",
            legendItemName: "Q1",
            stackGroup: "asia",
            showInLegend: false,
            fill: "#5090dc",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "ASIAQ2",
            yName: "Q2 - Asia",
            legendItemName: "Q2",
            stackGroup: "asia",
            showInLegend: false,
            fill: "#ffa03a",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "ASIAQ3",
            yName: "Q3 - Asia",
            legendItemName: "Q3",
            stackGroup: "asia",
            showInLegend: false,
            fill: "#459d55",
          },
          {
            type: "bar",
            xKey: "year",
            yKey: "ASIAQ4",
            yName: "Q4 - Asia",
            legendItemName: "Q4",
            stackGroup: "asia",
            showInLegend: false,
            fill: "#34bfe1",
          },
        ],
      });

      function getData() {
        return [
          {
            year: new Date().getFullYear() - 2,
            NAQ1: 14,
            EURQ1: 16,
            ASIAQ1: 14,
            NAQ2: 14,
            EURQ2: 16,
            ASIAQ2: 14,
            NAQ3: 14,
            EURQ3: 16,
            ASIAQ3: 14,
            NAQ4: 14,
            EURQ4: 16,
            ASIAQ4: 14,
          },
          {
            year: new Date().getFullYear() - 1,
            NAQ1: 13,
            EURQ1: 14,
            ASIAQ1: 16,
            NAQ2: 15,
            EURQ2: 14,
            ASIAQ2: 13,
            NAQ3: 15,
            EURQ3: 14,
            ASIAQ3: 16,
            NAQ4: 13,
            EURQ4: 15,
            ASIAQ4: 15,
          },
        ];
      }
    
        return (
            <div className="mx-4 sm:mx-10 md:m-10 p-6 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
                <Header category="Chart" title="Apple's Revenue" />
                <AgCharts className="h-96" options={options} />;
            </div>
        )
}
 
export default Bar;