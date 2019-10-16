import React, { Component } from 'react';
import styles from './ItemsList.module.scss';
import cx from 'classnames';

const items = [
  '1st',
  '2nd',
  '3rd',
  '4th',
  '5th'
];

class ItemsList extends Component {
    render() {
        const listClass = cx(styles.list, {
            [styles.isCollapsed]: this.state.isCollapsed
        });

        return (
            <>
                <button className="button is-dark is-large" onClick={this.toggle}>collapse</button>
                <ul className={listClass}>
                    { items.map (item => (
                        <li className="notification is-primary">{ item }</li>
                    ))}
                </ul>
                <p>item is {this.state.isCollapsed.toString()}</p>
            </>
        );
    }
}

export default ItemsList;
