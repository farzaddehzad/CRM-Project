import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const rows = [
  { id: 1, name: 'Company A', active: 'Yes', industry: 'Technology' },
  { id: 2, name: 'Company B', active: 'No', industry: 'Finance' },
  { id: 3, name: 'Company C', active: 'Yes', industry: 'Healthcare' },
  { id: 4, name: 'Company D', active: 'No', industry: 'Retail' },
  { id: 5, name: 'Company E', active: 'Yes', industry: 'Education' },
];

export default function SimpleTable() {
  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        Företag
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Namn</TableCell>
              <TableCell align="right">Aktiv</TableCell>
              <TableCell align="right">Bransch</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.active}</TableCell>
                <TableCell align="right">{row.industry}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}