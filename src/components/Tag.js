import React, { useEffect, useRef, useState } from "react";

function Tag(props) {
    const [state, setState] = useState({
        itemKey: '',
        tags: [],
        focused: false,
        input: ''
    })

  function handleInputChange(e) {
    setState({
        ...state,
        input: e.target.value
    });
  }

  function handleInputKeyDown(e) {
    if (e.keyCode === 13) {
      const {value} = e.target;

      setState(state => ({
        itemKey: props.children,
        tags: [...state.tags, value],
        input: ''
      }));
    }

    props.addTags(state.tags, state.itemKey);
  }

  function removeTag(tag) {
    var newTags = state.tags.filter(item => item !== tag)
    setState({
        ...state,
        tags: newTags
    })
  }

    return (
      <div>
        <ul className="taglist flex">
          {state.tags.map((tag,i) =>
            <li key={i} className="tag p-2 bg-pink-100 rounded mx-2">
              {tag}
              <button onClick={() => removeTag(tag)} className="px-1 text-pink-500">X</button>
            </li>
          )}
        </ul>
        <input className="taginput p-2" placeholder="Add a tag" value={state.input} onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
      </div>
    );

}

export default Tag
