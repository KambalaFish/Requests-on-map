import cn from 'classnames';
import { appcontainerTable } from '@styles/layout/containers.module.scss';
import {
  table,
  tableCaption,
  tableHead,
  tableBody,
  tableCell,
  tableCellHead,
} from '@styles/components/table.module.scss';
import { TableRow } from '@components/Table/TableRow';
import { useAppSelector } from '@hooks/useAppSelector';
import { selectAllOrderIds } from '@redux/selectors/transportationOrder.selectors';
import { TransportationOrderId } from '@interfaces/TransportationOrdersState';

interface TableProps {
  chosenOrderId: TransportationOrderId;
  setOrder(id: TransportationOrderId): void;
}
const Table = ({ chosenOrderId, setOrder }: TableProps) => {
  const requestIds = useAppSelector(selectAllOrderIds);
  return (
    <table className={cn(table, appcontainerTable)}>
      <caption className={tableCaption}>Таблица 1 - Набор заявок на перевозку</caption>
      <thead className={tableHead}>
        <tr>
          <th className={cn(tableCell, tableCellHead)}>Номер заявки</th>
          <th className={cn(tableCell, tableCellHead)}>Координаты ОТ lat</th>
          <th className={cn(tableCell, tableCellHead)}>Координаты ОТ lng</th>
          <th className={cn(tableCell, tableCellHead)}>Координаты ДО lat</th>
          <th className={cn(tableCell, tableCellHead)}>Координаты ДО lng</th>
        </tr>
      </thead>
      <tbody className={tableBody}>
        {requestIds.map((id) => {
          return (
            <TableRow
              key={id}
              id={id}
              isChosen={id === chosenOrderId}
              onClick={() => setOrder(id)}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export { Table };
