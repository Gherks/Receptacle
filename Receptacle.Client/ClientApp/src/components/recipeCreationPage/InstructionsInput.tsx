import React, { ChangeEventHandler } from 'react';

export default function InstructionsInput(props: { instructions: string, onChange: ChangeEventHandler<HTMLTextAreaElement>}) {
    return (
        <>
            <div className="mb-2" >
                <textarea
                    id="instructions"
                    name="instructions"
                    className="form-control"
                    value={props.instructions}
                    onChange={props.onChange}
                    placeholder="Enter instructions here"
                    aria-label="instructions"
                    style={{ height: "200px" }}>
                </textarea>
            </div>
            <div className="mb-2">
                <div className="card card-body">
                    Markdown text based upon instructions entered above will end up here
                </div>
            </div>
            <p>
                <a className="link-primary" href="https://www.markdownguide.org/cheat-sheet/">Markdown Cheat Sheet</a>
            </p>
        </>
    );
};
