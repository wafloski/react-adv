import React, { useState, useContext, useEffect } from 'react';

const WizardContext = React.createContext({
    currentPage: 1,
    changePage: () => {},
    pageIndexes: [],
    updatePageIndexes: () => {}
});

const ProgressBar = () => {
    const { currentPage, pageIndexes } = useContext(WizardContext);

    const outerWrapperStyle = {
        width: "100%",
        height: "20px",
        backgroundColor: "grey"
    }

    const innerWrapperStyle = {
        width: "100%",
        height: "20px",
        backgroundColor: "green",
        transition: "transform .5s ease-out",
        transform: `scaleX(${currentPage / pageIndexes.length})`,
        transformOrigin: "0% 50%"
    };

    return (
        <div style={outerWrapperStyle}>
            <div style={innerWrapperStyle}></div>
        </div>
    )
}

const Page = ({children, pageIndex}) => {
    const {currentPage, updatePageIndexes} = useContext(WizardContext);

    useEffect(() => {
        updatePageIndexes(pageIndex);
    })

    return currentPage === pageIndex ? children : null;
};

const Controls = () => {
    const {changePage, currentPage, pageIndexes} = useContext(WizardContext);

    return (
        <div>
            <button
                disabled={currentPage === 1}
                onClick={() => changePage(currentPage - 1)}
                className="button is-primary is-small"
            >
                Previous
            </button>
            <button
                disabled={currentPage === pageIndexes.length}
                onClick={() => changePage(currentPage + 1)}
                className="button is-warning is-small"
            >
                Next
            </button>
            { currentPage === pageIndexes.length &&
                <button
                    className="button is-warning is-danger"
                >
                    Submit
                </button>
            }
        </div>
    );
};

const Wizard = ({children}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageIndexes, setPageIndexes] = useState([]);

    const updatePageIndexes = pageIndex => {
        if (pageIndexes.includes(pageIndex)) {
            return;
        }

        setPageIndexes([...pageIndexes, pageIndex]);
    };

    const changePage = newPageIndex => {
        setCurrentPage(newPageIndex);
    };

    return (
        <WizardContext.Provider value={{
            currentPage,
            changePage,
            pageIndexes,
            updatePageIndexes
        }}>
            {children}
        </WizardContext.Provider>
    )
};

export { Page, Controls, Wizard, ProgressBar };