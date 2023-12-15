import React from 'react';
import styles from './members.module.scss';
import { membersData } from '../../testData/members';
import {
  ColumnDef,
  ColumnHelper,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { TeamMember } from '../../lib/types/TeamMember';

type MembersTableProps = {
  membersTableData: string,
}


const MembersTable = () => {

  const [sorting, setSorting] = React.useState<SortingState>([])
  const columnHelper = createColumnHelper<TeamMember>()

  const columns = [
    columnHelper.accessor('name', {
      header: () => <div className={styles.cName}>NAME</div>,
      cell: info => <div className={styles.cName}>{info.renderValue()}</div>,
      footer: info => info.column.id,
      size: '25%',
    }),
    columnHelper.accessor('email', {
      header: () => 'Email',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
      size: '25%',
    }),
    columnHelper.accessor('phoneNumber', {
      header: () => 'Telefon',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
      size: '25%',
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
      size: '5%'
    }),
    columnHelper.accessor('date', {
      header: 'Data utworzenia',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
      size: 'min-content'
    }),
    columnHelper.accessor('actions', {
      header: () => 'Actions',
      cell: info => <button onClick={() => {}}>Action</button>,
      footer: info => info.column.id,
      size: 'min-content',
      enableSorting: false
    })
  ]


  // console.log(columns);

  const [data, setData] = React.useState(() => membersData)

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

  return (
    <div className={styles.membersTableContainer}>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th 
                    key={header.id} 
                    colSpan={header.colSpan}
                    style={{ 
                      width: header.column.columnDef.size, 
                      minWidth: header.column.columnDef.minSize }}
                  
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map(row => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default MembersTable