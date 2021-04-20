import { useRouter } from 'next/router'
import React from 'react'

const GoBackButton = () => {


    const router = useRouter();
    console.log(router);

    return (
        <div className="arrow-container">
                <a onClick={() => router.back()}>
                    <img className='arrow-container-button' src="../../img/icons/arrow.svg" alt="" />
                </a>
        </div>
    )
}

export default GoBackButton
