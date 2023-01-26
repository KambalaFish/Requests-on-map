import { TransportationOrdersState } from '@interfaces/TransportationOrdersState';
import { Status } from '@interfaces/Status';

export const trOrdersInitialState: TransportationOrdersState = {
  ids: ['№1', '№2', '№3', '№4', '№5'],
  byIds: {
    '№1': {
      coords: {
        from: {
          lat: 59.84660399,
          lng: 30.29496392,
        },
        to: {
          lat: 59.82934196,
          lng: 30.42423701,
        },
      },
      polylineStatus: Status.idle,
      polylineError: '',
      polyline: [],
      latLngBound: null,
    },
    '№2': {
      coords: {
        from: {
          lat: 59.82934196,
          lng: 30.42423701,
        },
        to: {
          lat: 59.82761295,
          lng: 30.41705607,
        },
      },
      polylineStatus: Status.idle,
      polylineError: '',
      polyline: [],
      latLngBound: null,
    },
    '№3': {
      coords: {
        from: {
          lat: 59.83567701,
          lng: 30.38064206,
        },
        to: {
          lat: 59.84660399,
          lng: 30.29496392,
        },
      },
      polylineStatus: Status.idle,
      polylineError: '',
      polyline: [],
      latLngBound: null,
    },
    '№4': {
      coords: {
        from: {
          lat: 59.84660399,
          lng: 30.29496392,
        },
        to: {
          lat: 59.82761295,
          lng: 30.41705607,
        },
      },
      polylineStatus: Status.idle,
      polylineError: '',
      polyline: [],
      latLngBound: null,
    },
    '№5': {
      coords: {
        from: {
          lat: 59.83567701,
          lng: 30.38064206,
        },
        to: {
          lat: 59.84660399,
          lng: 30.29496392,
        },
      },
      polylineStatus: Status.idle,
      polylineError: '',
      polyline: [],
      latLngBound: null,
    },
  },
};
