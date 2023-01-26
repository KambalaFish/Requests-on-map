import type { IPolyline, LatLngBound } from '@interfaces/TransportationOrdersState';
export const calculateLatLngBound = (polyline: IPolyline): LatLngBound | null => {
  let mostEastern: number | null = null,
    mostNorthern: number | null = null,
    mostWestern: number | null = null,
    mostSouthern: number | null = null;
  polyline.forEach((tuples) => {
    tuples.forEach(([latitude, longitude]) => {
      if (!mostNorthern || latitude > mostNorthern) {
        mostNorthern = latitude;
      }
      if (!mostSouthern || latitude < mostSouthern) {
        mostSouthern = latitude;
      }
      if (!mostEastern || longitude > mostEastern) {
        mostEastern = longitude;
      }
      if (!mostWestern || longitude < mostWestern) {
        mostWestern = longitude;
      }
    });
  });
  if (!mostEastern || !mostNorthern || !mostWestern || !mostSouthern) return null;
  return [
    [mostSouthern, mostWestern],
    [mostNorthern, mostEastern],
  ];
};
