import { createSignal } from 'solid-js';


import './Notes.css'

export default function Notes() {

    // const [content, setContent] = createSignal('');
    // small change

    let testText;

    return (
        <textarea
            class='text-area'
            // value={content()}
            onChange={(e)=>{console.log(e.target.value)}}

            //create onChange function to handle input
            //function will probably be async
            // onChange={handleContentChange}

            // onChange={(e) => setName(e.currentTarget.value)}s
            // placeholder="Enter a name..."
        />
    )
}