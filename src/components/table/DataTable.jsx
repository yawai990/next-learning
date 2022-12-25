import Pagination from "./Pagination";
import TableHeadBar from "./TableHeadBar";
import Table from "./Table";

const DataTable = () => {
  return (
    <div className="w-full rounded overflow-hidden">
      <TableHeadBar />
      <Table />
      <Pagination />
    </div>
  )
}

export default DataTable