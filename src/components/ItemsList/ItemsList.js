import React from 'react';
import styles from './ItemsList.module.scss';
import cx from 'classnames';
// import withCollapse from '../../hoc/withCollapse';
import Collapse from "../../providers/Collapse";

const items = [
  '1st',
  '2nd',
  '3rd',
  '4th',
  '5th'
];

const ItemsList = () => {
    const listClass = isCollapsed =>
        cx(styles.list, {
            [styles.isCollapsed]: isCollapsed
        });

    return (
        <Collapse
            render={({ isCollapsed, toggle }) => (
                <>
                    <button className="button is-dark is-large" onClick={toggle}>show/collapse</button>
                    <ul className={listClass(isCollapsed)}>
                        {items.map(item => (
                            <li className="notification is-primary">{item}</li>
                        ))}
                    </ul>
                </>
            )}
        />
    )
}

export default ItemsList;
