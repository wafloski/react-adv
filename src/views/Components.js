import React, { useState, useReducer } from "react";

const Components = () => {
    const [inputsContent, setInputContent] = useReducer(
(state, newState) => ({ ...state, ...newState }),
        {
            searchInputContent: "",
            itemInputContent: ""
        }
    );

    const [itemsList, setItemsList] = useState(
        [{
            id: "1",
            content: "dsayhdkjsahjk hkjdhsajkfhldshfdkjshfdks jkhfdsh fjkhdsf h"
        }]
    );

    const handleInputChange = e => {
        setInputContent({
            [e.target.name]: e.target.value
        });
    };

    const addNewItem = () => {
        const newElement = {
            content: inputsContent.itemInputContent,
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
                name="searchInputContent"
                placeholder="search items"
                onChange={handleInputChange}
                value={inputsContent.searchInputContent}
            />
            <hr />
            <input
                autoComplete="off"
                className="input"
                name="itemInputContent"
                placeholder="create new item"
                onChange={handleInputChange}
                value={inputsContent.itemInputContent}
            />
            <button
                onClick={addNewItem}
                className="button is-warning"
            >
                Add item
            </button>
            {
                itemsList
                    .filter(item =>
                        item.content.toLowerCase().includes(
                            inputsContent.searchInputContent.toLowerCase()
                        )
                    )
                    .map(item => (
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
