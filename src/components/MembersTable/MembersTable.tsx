import styles from './members.module.scss';
import { membersData } from '../../testData/members';
import { flexRender } from '@tanstack/react-table'
import useMembersTable from '../../utils/hooks/useMembersTable';


const MembersTable = () => {

  const table = useMembersTable({ membersData })

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
                      <div onClick={header.column.getToggleSortingHandler()}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
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