import PieChart from "components/charts/PieChart";
import { pieChartOptions } from "variables/charts";
import Card from "components/card";
import { useContext } from "react";

import DataContext from "layouts/admin/datacontext";
const PieChartCard = () => {
  const { pieValue, yourFiles, system } = useContext(DataContext);

  const pieChartData = pieValue ? pieValue : [];

  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Your Pie Chart
          </h4>
        </div>
      </div>

      <div className="my-auto flex h-[220px] w-full items-center justify-center">
        <PieChart options={pieChartOptions} series={pieChartData} />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-brand-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">Your Files</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700  dark:text-white">
            {yourFiles}%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#6AD2FF]" />
            <p className="ml-1 text-sm font-normal text-gray-600">System</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            {system}%
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PieChartCard;
