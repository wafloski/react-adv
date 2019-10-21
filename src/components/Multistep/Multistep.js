import React, { useState, useContext } from 'react';

const WizardContext = React.createContext({
   currentPage: 1,
   changePage: () => {},
});

const Page = ({children, pageIndex}) => {
    const {currentPage} = useContext(WizardContext);

    return currentPage === pageIndex ? children : null;
};

const Controls = () => {
    const {changePage, currentPage} = useContext(WizardContext);

    return (
        <div>
            <button onClick={() => changePage(currentPage - 1)}>Previous</button>
            <button onClick={() => changePage(currentPage + 1)}>Next</button>
        </div>
    );
};

const Wizard = ({children}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = newPageIndex => {
        setCurrentPage(newPageIndex);
    };

    return (
        <WizardContext.Provider value={{
            currentPage,
            changePage
        }}>
            {children}
        </WizardContext.Provider>
    )
};

export { Page, Controls, Wizard };