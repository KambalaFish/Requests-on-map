import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@styles/global.scss';
import { appcontainer } from '@styles/layout/containers.module.scss';
import { Table } from '@components/Table';
import { Map } from '@components/Map';
import type { TransportationOrderId } from '@interfaces/TransportationOrdersState';
const App = (): React.ReactElement => {
  const [chosenOrder, setOrder] = useState<TransportationOrderId>('');
  return (
    <BrowserRouter>
      <div className={appcontainer}>
        <Table chosenOrderId={chosenOrder} setOrder={setOrder} />
        <Map trOrderId={chosenOrder} />
      </div>
    </BrowserRouter>
  );
};

export default App;
