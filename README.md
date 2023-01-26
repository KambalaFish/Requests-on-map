# Requests on map

When you select a row representing an order in a table, the selected row will be highlighted, 
and two dots representing origin and destination in the form of markers will be displayed on a map.
Route between two dots will be connected with polyline of the track built with help 
of OSRM Route service. When you select an order from a table the map will be zoomed 
to fit the entire route bounds at most closest scale possible.

In order to run this app locally:

```sh
npm i
```

```sh
npm run dev
```