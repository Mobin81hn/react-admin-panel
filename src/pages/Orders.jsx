import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Header from "../components/Header";
import { ordersData } from "../data/dummy";
import { useState } from "react";
import { useStateContext } from "../contexts/StateContext";

const Orders = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { currentMode } = useStateContext();

  const handleChangePage = (event, newPage) => {
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="mx-4 sm:mx-10 md:m-10 p-6 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Orders" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 , background: currentMode === "Dark" ? "gray" : "white" , color: "white"}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Image</TableCell>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Item</TableCell>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Customer Name</TableCell>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Total Amount</TableCell>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.OrderID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <img
                      src={row.ProductImage}
                      alt="Product-image"
                      className="w-16 h-16 rounded-md mx-auto"
                    />
                  </TableCell>
                  <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">{row.OrderItems}</TableCell>
                  <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">{row.CustomerName}</TableCell>
                  <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">${row.TotalAmount}</TableCell>
                  <TableCell align="center">
                    <span
                      className={`${
                        row.Status === "complete"
                          ? "bg-green-400"
                          : row.Status === "canceled"
                          ? "bg-pink-400"
                          : row.Status === "pending"
                          ? "bg-orange-400"
                          : row.Status === "active"
                          ? "bg-blue-500"
                          : row.Status === "rejected" && "bg-red-600"
                      } text-white px-2 py-[6px] rounded-full capitalize`}
                    >
                      {row.Status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        style={{color: currentMode === "Dark" ? "white" : "black"}}
        rowsPerPageOptions={[10, 25, 100]}
        count={ordersData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Orders;
