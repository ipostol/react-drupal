import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { createRoot } from 'react-dom/client';
import styles from './styles.module.css';

const components = {
  calendar: () => (
    <div className={styles.general}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' },
        ]}
      />
    </div>
  ),
};

window.__REACT__ = {
  render: (id, component, props) => {
    if (document.getElementById(id)) {
      const root = createRoot(document.getElementById(id));

      const Component = components[component];

      if (Component) {
        root.render(<Component {...props} />);
      } else {
        console.warn('not found component with name: ', component);
      }
    } else {
      console.warn('invalid id');
    }
  },
};
