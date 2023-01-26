import cn from 'classnames';
import type { TransportationOrderId } from '@interfaces/TransportationOrdersState';
import {
  tableCell,
  tableCellId,
  tableRow,
  tableRowChosen,
} from '@styles/components/table.module.scss';
import { useAppSelector } from '@hooks/useAppSelector';
import {
  selectPolylineStatus,
  selectOrderCoordsById,
} from '@redux/selectors/transportationOrder.selectors';
import { Status } from '@interfaces/Status';
import { useDispatch } from 'react-redux';
import { loadPolylinePathAction } from '@redux/actions/transportationOrders.actions';

interface TableRowProps {
  id: TransportationOrderId;
  isChosen: boolean;
  onClick(): void;
}

const TableRow = ({ id, isChosen, onClick }: TableRowProps) => {
  const coords = useAppSelector((s) => selectOrderCoordsById(s, id));
  const {
    from: { lat: fromLat, lng: fromLng },
    to: { lat: toLat, lng: toLng },
  } = coords;
  const polylineStatus = useAppSelector((s) => selectPolylineStatus(s, id));
  const dispatch = useDispatch();
  const rowClickHandler = () => {
    onClick();
    if (polylineStatus === Status.idle) {
      dispatch(loadPolylinePathAction({ trOrderId: id, coords }));
    }
  };
  return (
    <tr
      onClick={rowClickHandler}
      className={cn(tableRow, { [tableRowChosen]: isChosen })}
    >
      <td className={cn(tableCell, tableCellId)}>{id}</td>
      <td className={tableCell}>{fromLat}</td>
      <td className={tableCell}>{fromLng}</td>
      <td className={tableCell}>{toLat}</td>
      <td className={tableCell}>{toLng}</td>
    </tr>
  );
};

export { TableRow };
