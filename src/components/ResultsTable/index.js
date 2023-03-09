import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    IconButton
} from "@mui/material";

import columns from "./columns";

import Icons from "../Icons";

import ImagePlaceHolder from "../ImagePlaceholder";


const ResultsTable = (props) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    useEffect(() => {
        if(props.searchQuery.length > 0) {
            setPage(0);
        }
    }, [props.searchQuery])

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <Grid container style={{ paddingBottom: "80px" }}>
            <Grid item xs={1} />
        
            <Grid item xs={10}>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id.toString()}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                    
                            {props.data
                            .slice(page* rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((d, i) => {

                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={d.cca3}>
                                        <TableCell>
                                            <ImagePlaceHolder imgData={d.flags.svg} imageType="small" />
                                        </TableCell>
                                        <TableCell>
                                            {d.name.common}
                                        </TableCell>
                                        <TableCell>
                                            {d.region}
                                        </TableCell>
                                        <TableCell>
                                            {d.population.toLocaleString()}
                                        </TableCell>
                                        <TableCell>
                                            {d.languages !== undefined && (
                                                <>
                                                    {Object.entries(d.languages).map((val, i) => (
                                                        <li key={val.toString()} style={{ marginLeft: "-20px "}}>
                                                            {val[1]}
                                                        </li>
                                                    ))}
                                                </>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <Link to={`/country/${d.name.common}`} state={d}> 
                                                <IconButton>
                                                    <Icons.ArrowRightSmall />
                                                </IconButton>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={props.data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
};

export default ResultsTable;