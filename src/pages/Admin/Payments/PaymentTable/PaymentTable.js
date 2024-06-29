import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'paymentId', headerName: 'ID', width: 180 },
  { field: 'externalReference', headerName: 'Referencia de pago', width: 280 },
  { field: 'description', headerName: 'Clase', width: 110 },
  {
    field: 'unitPrice',
    headerName: 'Pago',
    type: 'number',
    width: 60,
  },
  { field: 'status', headerName: 'Estado', width: 130 },
  { field: 'studentId', headerName: 'Estudiante', type: 'number', width: 90 },
];

export default function PaymentTable({ rows }) {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 25 },
          },
        }}
        pageSizeOptions={[25, 50, 100]}
      />
    </div>
  );
}
