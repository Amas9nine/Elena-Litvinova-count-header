import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

import styles from './index.module.scss';

export const InputPlus = ({ onAdd }) => {
    const [value, setValue] = useState("");

    const callMemo = useCallback(() => {
        onAdd(value);
        setValue("")
    }, [value])

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            callMemo();
        }
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={styles.inputPlus}>
            <input
                value={value}
                type="text"
                className={styles.inputPlusValue}
                placeholder="Type here..."
                onKeyDown={onKeyDown}
                onChange={onChange}
            />
            <button
                onClick={() => {
                    callMemo();
                }}
                aria-label="Add"
                className={styles.inputPlusButton}
            />
        </div>
    );
}
