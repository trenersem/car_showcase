'use client'

import Image from 'next/image'
import React, { MouseEventHandler } from 'react'

interface ICustomButton {
    title: string,
    btnType?: 'button' | 'submit',
    containersStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
}
const CustomButton = ({title, btnType, containersStyle, handleClick }: ICustomButton) => {
  return (
    <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containersStyle}`}
        onClick={handleClick}
    >
        <span className={`flex1`}>
            {title}
        </span>
      
    </button>
  )
}

export default CustomButton
