import React from 'react';
import styles from './ItemsList.module.scss';
import cx from 'classnames';
import withCollapse from '../../hoc/withCollapse';

const items = [
  '1st',
  '2nd',
  '3rd',
  '4th',
  '5th'
];

const ItemsList = ({ isCollapsed, toggle }) => {
    const listClass = cx(styles.list, {
        [styles.isCollapsed]: isCollapsed
    });

    return (
        <>
            <button className="button is-dark is-large" onClick={toggle}>collapse</button>
            <ul className={listClass}>
                {items.map(item => (
                    <li className="notification is-primary">{item}</li>
                ))}
            </ul>
        </>
    )
}

export default withCollapse(ItemsList);
