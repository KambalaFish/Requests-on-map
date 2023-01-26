import { appcontainerMap } from '@styles/layout/containers.module.scss';
import { map, mapBody } from '@styles/components/map.module.scss';
import cn from 'classnames';
import { MapContainer, TileLayer } from 'react-leaflet';
import type { OrderId } from '@interfaces/TransportationOrdersState';
import { Route } from '@components/Map/Route';
import { MapInfo } from '@components/Map/MapInfo';

interface MapProps extends OrderId {}

const Map = ({ trOrderId }: MapProps) => {
  return (
    <div className={cn(appcontainerMap, map)}>
      <MapInfo trOrderId={trOrderId} />
      <MapContainer
        className={mapBody}
        center={[59.930933, 30.325678]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Route trOrderId={trOrderId} />
      </MapContainer>
    </div>
  );
};

export { Map };
