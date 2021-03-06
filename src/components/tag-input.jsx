import React, { useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';

const TagInput = (props) => {
  const [tags, setTags] = useState([]);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    props.selectedTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (event) => {
    if (event.target.value !== '') {
      if (!tags.includes(event.target.value)) {
        setTags([...tags, event.target.value]);
        props.selectedTags([...tags, event.target.value]);
        event.target.value = '';
      } else {
        alert('ya esta');
        event.target.value = '';
      }
    }
  };

  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              <ClearIcon />
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
        placeholder="Hit 'Enter' to add new tags..."
      />
    </div>
  );
};

export default TagInput;
