import React, {FunctionComponent} from "react";

export const Button: FunctionComponent = (props) => {
    return (
        <button
            className="button"
            id={props.id}
            type="submit"
            onClick={props.onClickFun}>
            {props.label}
        </button>
    );
}

