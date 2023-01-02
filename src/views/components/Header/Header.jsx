import React from 'react';
import scss from "./index.module.scss"

export function Header({ tasks }) {

  return (
    <div className={scss.count}>
      <p>
        count
      </p>
      <p>
        {tasks.length}
      </p>
    </div>
  )
}