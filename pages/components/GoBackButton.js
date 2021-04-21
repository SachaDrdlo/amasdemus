import { useRouter } from 'next/router'
import React from 'react'

const GoBackButton = () => {


    const router = useRouter();
    console.log(router);

    return (
        <div className="arrow-container">
            <a className='arrow-container-button' onClick={() => router.back()}>
                <img src="../../img/icons/arrow.svg" alt="" />
                <p>Retour</p>
            </a>
        </div>
    )
}

export default GoBackButton
