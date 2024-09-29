import Button from "../components/Button";
import Stacked from "../components/Charts/Stacked";
import { useStateContext } from "../contexts/StateContext";
import { earningData } from "../data/dummy";
import { FaCircle } from "react-icons/fa";
import AssistantImage from "../components/AssistantImage";
import EcommerceLineChart from "../components/Charts/EcommerceLineChart";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12 overflow-hidden">
      <div className="bg-white dark:bg-secondary-dark-bg px-6 sm:px-16 lg:px-32">
        <div className="flex items-center justify-between h-48 text-zinc-600 dark:text-gray-200 font-semibold">
          <div>
            <p className="text-lg md:text-xl pt-4 md:pt-2">Earning</p>
            <p className="text-zinc-700 dark:text-gray-200 text-xl md:text-3xl my-2 md:my-4">
              $63,448.78
            </p>
            <Button
              bgColor={currentColor}
              text="Download"
              color="white"
              borderRadius="10px"
              size="sm"
            />
          </div>
          <div className="pb-14">
            <AssistantImage />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10 px-2">
        {earningData.map((item, i) => (
          <div
            className="w-44 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 px-6 pb-6 pt-9 rounded-2xl hover:-translate-y-3 transition-all duration-500"
            key={i}
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-90 p-4 rounded-full"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm ${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-gray-400 text-sm mt-1">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-secondary-dark-bg text-zinc-600 dark:text-gray-200 mt-10 mx-4 xs:mx-8 md:mx-20 py-10 px-8 rounded-md">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <p className="text-xl font-semibold">Revenue Updates</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-zinc-600 dark:text-gray-200">
              <FaCircle size={8} />
              <span>Expense</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <FaCircle size={8} />
              <span>Budget</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col xl:flex-row xl:gap-0 gap-16 sm:px-5">
          <div className="w-full flex items-start justify-center flex-wrap lg:flex-nowrap gap-10 xl:pr-5 xl:border-r border-zinc-200">
            <div className="pt-6 flex items-center lg:items-start flex-wrap gap-4 lg:gap-0 flex-row lg:flex-col">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-zinc-700 dark:text-gray-200 text-2xl font-bold">
                    $93,438
                  </h2>
                  <span className="font-semibold text-xs bg-green-400 text-white px-1 py-[6px] rounded-full">
                    23%
                  </span>
                </div>
                <p className="text-zinc-500 dark:text-gray-400 text-sm font-semibold mt-2">
                  Budget
                </p>
              </div>
              <div className="my-4">
                <h2 className="text-zinc-700 dark:text-gray-200 text-2xl font-bold">
                  $48,438
                </h2>
                <p className="text-zinc-500 dark:text-gray-400 text-sm font-semibold mt-2">
                  Expense
                </p>
              </div>
              <Button
                bgColor={currentColor}
                text="Download Reports"
                color="white"
                borderRadius="10px"
                size="xs"
              />
            </div>
            <EcommerceLineChart />
          </div>
          <div className="w-full flex justify-center">
            <Stacked />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
