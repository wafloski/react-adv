import React, { useState } from "react";

const Components = () => {
    const [inputContent, setInputContent] = useState("write your task");

    const [itemsList, setItemsList] = useState(
        [{
            id: "1",
            content: "dsayhdkjsahjk hkjdhsajkfhldshfdkjshfdks jkhfdsh fjkhdsf h"
        }]
    );

    const handleInputChange = e => {
        setInputContent(e.target.value);
    };

    const addNewItem = () => {
        const newElement = {
            content: inputContent,
            id: itemsList.length + 1
        };

        setItemsList([newElement, ...itemsList]);
    };

    const removeItem = id => {
        const newItemsList = itemsList.filter(item => item.id !== id);

        setItemsList(newItemsList);
    };

    return (
        <>
            <h2 className="title is-3">Components</h2>
            <input
                autoComplete="off"
                className="input"
                name="name"
                onChange={handleInputChange}
                value={inputContent}
            />
            <input
                autoComplete="off"
                className="input"
                name="name"
                onChange={handleInputChange}
                value={inputContent}
            />
            <button
                onClick={addNewItem}
                className="button is-warning"
            >
                Add item
            </button>
            {
                itemsList.map(item => (
                    <div key={item.id} className="notification is-info">
                        <button className="delete" onClick={() => removeItem(item.id)}></button>
                        {item.content}
                    </div>
                ))
            }

        </>
    )
};

export default Components;
