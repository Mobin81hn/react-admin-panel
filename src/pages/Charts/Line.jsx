import LineChart from "../../components/Charts/LineChart";
import Header from "../../components/Header";

const Line = () => {
    return ( 
        <div className="mx-4 sm:mx-10 md:m-10 p-6 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Chart" title="Temperature Readings" />
            <LineChart/>
        </div>
     );
}
 
export default Line;