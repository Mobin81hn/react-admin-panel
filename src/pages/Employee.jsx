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
import { useState } from "react";
import { employeesData } from "../data/dummy";
import { useStateContext } from "../contexts/StateContext";

const Employee = () => {
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
      <Header category="Page" title="Employees" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 , background: currentMode === "Dark" ? "gray" : "white" , color: "white"}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Employee</TableCell>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Designation</TableCell>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Country</TableCell>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Hire Date</TableCell>
              <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">Reports To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeesData
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((row,i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">
                    <div className="flex items-center gap-2 ml-10">
                      <img
                        src={row.EmployeeImage}
                        alt="Product-image"
                        className="w-16 h-16 rounded-full ml-14"
                      />
                      <span>{row.Name}</span>
                    </div>
                  </TableCell>
                  <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">{row.Title}</TableCell>
                  <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">{row.Country}</TableCell>
                  <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">{row.HireDate}</TableCell>
                  <TableCell style={{color: currentMode === "Dark" ? "white" : "black"}} align="center">{row.ReportsTo}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        style={{color: currentMode === "Dark" ? "white" : "black"}}
        rowsPerPageOptions={[10, 25, 100]}
        count={employeesData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Employee;
