import React from 'react'
import { StyledLoader } from './StyledLoader';

export const Loader = () => {
    return (
        <StyledLoader className="lds-ellipsis"><div></div><div></div><div></div><div></div></StyledLoader>
    )
}
