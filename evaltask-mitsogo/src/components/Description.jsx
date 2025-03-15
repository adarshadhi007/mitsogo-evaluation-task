import React from 'react';

import { DescrptionMessages } from '../common/constants';

import "../assets/css/description.css";

function Description() {
    return (
        <div className='description-parent'>
            {DescrptionMessages?.map((item, index) => {
                return (
                    <>
                        <div className='description-child'>
                            <h4>{item?.title}</h4>
                            <p>
                                {item?.message}
                            </p>
                        </div>
                        {index < 2 && <div className='hero-seperator'></div>}
                    </>

                )
            })}

        </div>
    );
}

export default Description;