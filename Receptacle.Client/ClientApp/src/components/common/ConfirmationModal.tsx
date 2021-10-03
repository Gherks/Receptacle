import React, { MouseEventHandler } from 'react';

export default function ConfirmationModal(props: {
    id: string,
    title: string,
    content: string,
    onConfirmationClicked: MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" dangerouslySetInnerHTML={{ __html: props.content }}/>
                    <div className="modal-footer">
                        <button type="button" onClick={props.onConfirmationClicked} data-bs-dismiss="modal" className="btn btn-primary">Yes</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

