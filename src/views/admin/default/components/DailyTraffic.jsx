import BarChart from "components/charts/BarChart";
import { barChartOptionsDailyTraffic } from "variables/charts";
import { MdArrowDropUp } from "react-icons/md";
import Card from "components/card";

import { useContext } from "react";

import DataContext from "layouts/admin/datacontext";

const DailyTraffic = () => {
  const { dailyTraffic, dailyTrafficVisitors } = useContext(DataContext);

  const dailyTrafficData = [
    {
      name: "Daily Traffic",
      data: dailyTraffic ? dailyTraffic : [],
    },
  ];

  return (
    <Card extra="pb-7 p-[20px]">
      <div className="flex flex-row justify-between">
        <div className="ml-1 pt-2">
          <p className="text-sm font-medium leading-4 text-gray-600">
            Daily Traffic
          </p>
          <p className="text-[34px] font-bold text-navy-700 dark:text-white">
            {String(dailyTrafficVisitors) ? dailyTrafficVisitors : null}
            &nbsp;
            <span className="text-sm font-medium leading-6 text-gray-600">
              Visitors
            </span>
          </p>
        </div>
        <div className="mt-2 flex items-start">
          <div className="flex items-center text-sm text-green-500">
            <MdArrowDropUp className="h-5 w-5" />
            <p className="font-bold">
              {" "}
              +{dailyTrafficVisitors ? dailyTrafficVisitors : null}%{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full pt-10 pb-0">
        <BarChart
          chartData={dailyTrafficData}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>
    </Card>
  );
};

export default DailyTraffic;
