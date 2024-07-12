import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AccordionForCharts from './AccordionForCharts';
import Filters from './Filters';

const Tabsrow = ({ data, setMainData }) => {
    return (
        <div className='tabsClass'>
            <Tabs>
                <Tab eventKey="chart" title="Charts">
                    <Filters setMainData={setMainData} />
                    <AccordionForCharts data={data} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Tabsrow;
