import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

function UpdateButton({
    postId,
    testareaToggle,
    setBodyData,
    body,
    prevstate
}) 
{
    function handleClick() {
        if(prevstate){
            //TODO: call update post mutation.
        }else{
            setBodyData(body);
        }
        testareaToggle(!prevstate)
    }
    return (
        <Button
            onClick={handleClick}
            color="blue"
            floated="right">
            <Icon name={prevstate?"save":"pencil alternate"} style={{ margin: 0 }} />
        </Button>
    )
}

export default UpdateButton
