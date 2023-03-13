import './CalendarBody.css';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import React, { useState } from 'react';

const columns = [
  { key: 'mon', name: 'Mon' },
  { key: 'tue', name: 'Tue' },
  { key: 'wed', name: 'Wed' },
  { key: 'thu', name: 'Thu' },
  { key: 'fri', name: 'Fri' },
  { key: 'sat', name: 'Sat' },
  { key: 'sun', name: 'Sun' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function App() {
  return <DataGrid columns={columns} rows={rows} />;
}

export default App;
