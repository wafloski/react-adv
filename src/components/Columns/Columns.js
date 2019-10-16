import React from 'react';
import cx from 'classnames';
import styles from './Columns.module.scss';
import withCollapse from '../../hoc/withCollapse';
import withAuth from '../../hoc/withAuth';

const Columns = ({ isCollapsed, toggle, isAuthorised, toggleAuth }) => {
    const rowClass = cx("columns", {
        [styles.isCollapsed]: isCollapsed
    });

    return (
        <div className="columns">
            <div className="column">
                <button className="button is-dark" onClick={toggle}>collapse</button>
                <h2 className="title is-2">authorised: { isAuthorised.toString() } </h2>
                <button className="button is-warning" onClick={toggleAuth}>{ isAuthorised ? 'logout' : 'login'}</button>
                { isAuthorised ? (
                    <div className={rowClass}>
                        <div className="column">
                            <div className="notification is-primary">
                                First column
                            </div>
                        </div>
                        <div className="column">
                            <div className="notification is-primary">
                                Second column
                            </div>
                        </div>
                        <div className="column">
                            <div className="notification is-primary">
                                Third column
                            </div>
                        </div>
                        <div className="column">
                            <div className="notification is-primary">
                                Fourth column
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>you must sign in to see this content</p>
                ) }
            </div>
        </div>
    )
};

export default withAuth(withCollapse(Columns));
