import React, {FunctionComponent} from "react";

export const InputBox: FunctionComponent = (props) => {
    return (
        <div>
            <input
                type="number"
                placeholder={props.placeHolder}
                id={props.id}
                onChange={props.updateValue}
            />
        </div>
    );
}


