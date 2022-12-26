import MonthTable from "./cat_table/MonthTable";
import DayTable from "./cat_table/DayTable";
import StatisticTable from "./cat_table/StatisticTable";
import Pagination from "./Pagination";
import TableHeadBar from "./TableHeadBar";

const data = {
  cur_page : 5,
  pagination : 15
}

const DataTable = ({ pathname }) => {
  return (
    <div className="w-full rounded overflow-hidden">
    <TableHeadBar pathname={pathname} />

    {
      pathname === '/datas' ? 
      <MonthTable /> :
      pathname === '/datas/today' ? 
      <DayTable pathname={pathname} />
      : 
      <StatisticTable />
    }
    <Pagination curPage = {data.cur_page} pagination={data.pagination} />

    </div>
  )
}

export default DataTable