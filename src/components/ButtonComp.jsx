
import React from 'react'
import { Button } from 'rsuite'

const ButtonComp = ({title}) => {
    return (
        <div>
            <Button style={{ backgroundColor: '#00715d' }}  appearance="primary">
                {title}
            </Button>
        </div>
    )
}

export default ButtonComp