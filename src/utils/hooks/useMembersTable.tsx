import React from "react";
import { TeamMember } from "../../lib/types/TeamMember"
import CellName from "../../components/CellName/CellName";
import CellActions from "../../components/CellActions/CellActions";
import {
    createColumnHelper,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
  } from '@tanstack/react-table';


type useMembersTableProps = {
  membersData: TeamMember[]
}

const useMembersTable = ({ membersData } : useMembersTableProps) => {
  
  const [sorting, setSorting] = React.useState<SortingState>([])
  const columnHelper = createColumnHelper<TeamMember>()
  const [data] = React.useState(() => membersData)
  
    const columns = [
      columnHelper.accessor('name', {
        header: () => 'Nazwa',
        cell: ({  row: { original } }) => (
          <CellName name={original.name} profileImg={original.profileImg} />
        ),
        footer: info => info.column.id,
        size: '25%',
        sortingFn: 'text'
      }),
      columnHelper.accessor('email', {
        header: () => 'Email',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
        size: '25%',
        sortingFn: 'text'
      }),
      columnHelper.accessor('phoneNumber', {
        header: () => 'Telefon',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
        size: '25%',
        sortingFn: 'alphanumeric'
      }),
      columnHelper.accessor('isActive', {
        header: 'Status',
        cell: info => info.renderValue() ? 'Active' : 'Blocked',
        footer: info => info.column.id,
        size: '5%'
      }),
      columnHelper.accessor('date', {
        header: 'Data utworzenia',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
        size: 'min-content',
        sortingFn: 'datetime',
      }),
      columnHelper.accessor('actions', {
        header: () => <div style={{textAlign: 'center'}}>Actions</div>,
        cell: info => <CellActions />,
        footer: info => info.column.id,
        size: '5%',
        enableSorting: false
      })
    ]
  
  
    const table = useReactTable({
      data,
      columns,
      state: {
        sorting,
      },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      debugTable: true,
    })

    return table

}

export default useMembersTable;