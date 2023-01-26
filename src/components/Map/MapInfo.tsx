import cn from 'classnames';
import {
  mapInfo,
  mapInfoError,
  mapMessage,
  mapMessageError,
} from '@styles/components/map.module.scss';
import { spinner } from '@styles/components/spinner.module.scss';
import { useAppSelector } from '@hooks/useAppSelector';
import {
  selectPolylineError,
  selectPolylineStatus,
} from '@redux/selectors/transportationOrder.selectors';
import { Status } from '@interfaces/Status';
import { OrderId } from '@interfaces/TransportationOrdersState';

interface MapInfoProps extends OrderId {}
export const MapInfo = ({ trOrderId }: MapInfoProps) => {
  const polylineStatus = useAppSelector((s) => selectPolylineStatus(s, trOrderId));
  const polylineError = useAppSelector((s) => selectPolylineError(s, trOrderId));

  let content = null;

  if (polylineStatus == Status.loading) {
    content = (
      <>
        <div className={spinner} />
        <div className={mapMessage}>Загрузка маршрута...</div>
      </>
    );
  }
  const isError = polylineStatus == Status.failed;

  if (isError) {
    content = <div className={cn(mapMessage, mapMessageError)}>{polylineError}</div>;
  }
  return <div className={cn(mapInfo, { [mapInfoError]: isError })}>{content}</div>;
};
