
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import './AppStyling.css'

function createData(name, Age, Course, Batch, change) {
  return { name, Age, Course, Batch, change };
}

const rows = [
  createData('John', 26, 'MERN', 'October',<NavLink to='#'>Edit</NavLink>),
  createData('Doe', 25, 'MERN', 'November',<NavLink to='#'>Edit</NavLink>),
  createData('Blden', 25, 'MERN', 'September',<NavLink to='#'>Edit</NavLink>),
  createData('Barar', 22, 'MERN', 'September',<NavLink to='#'>Edit</NavLink>),
  createData('Christ', 23, 'MERN', 'October',<NavLink to='#'>Edit</NavLink>),
  createData('Elent', 24, 'MERN', 'November',<NavLink to='#'>Edit</NavLink>),
  createData('Harshita Sharma', 24, 'MERN', 'October',<NavLink to='#'>Edit</NavLink>),
];

export default function BasicTable() {
  return (
      <div>
          <h1>Student details</h1>
          <button className='btn'> ADD STUDENT DETAILS</button>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Batch</TableCell>
                <TableCell align="right">Change</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.Age}</TableCell>
                <TableCell align="right">{row.Course}</TableCell>
                <TableCell align="right">{row.Batch}</TableCell>
                <TableCell align="right">{row.change}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}

        
