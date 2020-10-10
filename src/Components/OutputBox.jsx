import React, {FunctionComponent} from "react";

export const OutputBox: FunctionComponent = (props) => {
    return (
        <div>
            <input
                value={props.output}
                placeholder={props.placeHolder}
                id={props.id}
                readOnly
            />
        </div>
    );
}
