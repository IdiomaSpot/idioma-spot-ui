import { DataGrid } from '@mui/x-data-grid';
import { getStatus } from '../../../../utils/paymentUtils';
import './PaymentTable.scss';

const columns = [
  { field: 'paymentId', headerName: 'ID', width: 180 },
  { field: 'externalReference', headerName: 'Referencia de pago', width: 280 },
  { field: 'description', headerName: 'Clase', width: 110 },
  { field: 'title', headerName: 'Nivel-Horario', width: 110 },
  {
    field: 'unitPrice',
    headerName: 'Pago',
    type: 'number',
    width: 60,
  },
  {
    field: 'status',
    headerName: 'Estado',
    width: 130,
    renderCell: (value) => {
      const statusObj = value?.value ? getStatus(value.value) : { name: 'No disponible' };
      return (
        <span className="space dot">
          {statusObj.name}
          {statusObj?.icon}
        </span>
      );
    },
  },
  {
    field: 'createdAt',
    headerName: 'Fecha de pago',
    type: 'dateTime',
    width: 150,
    valueGetter: (value) => value && new Date(value),
  },
  {
    field: 'fullName',
    headerName: 'Pagado por',
    type: 'number',
    width: 110,
    valueGetter: (value, row) =>
      `${row.user.name || ''} ${row.user.surname || ''}`,
  },
  {
    field: 'user.email',
    headerName: 'Email',
    width: 110,
    valueGetter: (value, row) => `${row.user.email || ''}`,
  },
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
