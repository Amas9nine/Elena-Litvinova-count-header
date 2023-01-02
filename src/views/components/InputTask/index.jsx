import React from 'react';
import { useState } from 'react';

import styles from './index.module.scss';

export const InputTask = ({ title, onRemove, id, onEdit }) => {
    const [checked, setCheked] = useState(false);
    const [onMode, setOnMode] = useState(false);
    const [value, setValue] = useState(title);

    const eventCheck = (event) => {
        setCheked(event.target.checked)
    }

    const eventValue = (event) => {
        setValue(event.target.value)
    }

    const onRemoved = () => {
        onRemove(id)
    }

    const onSubmit = () => {
        setOnMode(false);
        onEdit(id, value);
    }

    return (
        <div className={styles.inputTask}>
            <label className={styles.inputTaskLabel}>
                <input
                    checked={checked}
                    type="checkbox"
                    className={styles.inputTaskCheckbox}
                    onChange={eventCheck}
                />
                {
                    onMode ? (
                        <form onSubmit={onSubmit}>
                            <input
                                value={value}
                                type="text"
                                onChange={eventValue}
                            />
                        </form>
                    ) : (
                        <h3 className={checked ? styles.checked : ""}>{title}</h3>
                    )
                }
            </label>
            {
                onMode ? (
                    <button
                        onClick={() => {
                            setOnMode(false)
                            onEdit(id, value)
                        }}
                        aria-label="Edit"
                        className={styles.inputTaskEdit}
                    />
                ) : (
                    <button
                        onClick={
                            () => {
                                setOnMode(true)
                            }
                        }
                        aria-label="Edit"
                        className={styles.inputTaskEdit}
                    />
                )
            }
            <button
                onClick={onRemoved}
                aria-label="Remove"
                className={styles.inputTaskRemove}
            />
        </div >
    );
}

/* For Edit mode
<input
    className={styles.inputTaskTitleEdit}
/>

<button
    aria-label="Save"
    className={styles.inputTaskSave}
/>
*/