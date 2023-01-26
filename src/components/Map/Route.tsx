import { OrderId } from '@interfaces/TransportationOrdersState';
import { Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { useAppSelector } from '@hooks/useAppSelector';
import {
  selectLatLngBound,
  selectPolyline,
  selectOrderCoordsById,
} from '@redux/selectors/transportationOrder.selectors';
import { useEffect } from 'react';
interface RouteProps extends OrderId {}

const Route = ({ trOrderId }: RouteProps) => {
  const coords = useAppSelector((s) => selectOrderCoordsById(s, trOrderId));
  const latLngBound = useAppSelector((s) => selectLatLngBound(s, trOrderId));
  const polyline = useAppSelector((s) => selectPolyline(s, trOrderId));
  const map = useMap();

  useEffect(() => {
    if (latLngBound) {
      map.fitBounds(latLngBound);
    }
  }, [latLngBound, map]);

  if (!coords) {
    return null;
  }

  let path = null;
  if (polyline?.length > 0) {
    path = <Polyline positions={polyline} />;
  }

  return (
    <>
      <Marker position={coords.from}>
        <Popup>From</Popup>
      </Marker>
      <Marker position={coords.to}>
        <Popup>To</Popup>
      </Marker>
      {path}
    </>
  );
};

export { Route };
