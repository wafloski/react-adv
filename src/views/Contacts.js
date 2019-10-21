import React from 'react';

import * as Multistep from '../components/Multistep/Multistep';

const Contacts = () => (
    <div>
        <p>Contacts</p>
        <Multistep.Wizard>
            <Multistep.Page pageIndex={1} >page 1</Multistep.Page>
            <Multistep.Page pageIndex={2} >page 2</Multistep.Page>
            <Multistep.Page pageIndex={3} >page 3</Multistep.Page>
            <Multistep.Controls />
        </Multistep.Wizard>
    </div>
);

export default Contacts;