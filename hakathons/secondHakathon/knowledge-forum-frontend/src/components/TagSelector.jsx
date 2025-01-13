/* eslint-disable react/prop-types */
const TagSelector = ({ tags, selectedTags, onTagSelect }) => (
  <div className="mb-4">
    <p className="font-semibold">Select Tags:</p>
    <div className="grid grid-cols-3 gap-2">
      {tags.map((tag) => (
        <label
          key={tag._id}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selectedTags.includes(tag._id)}
            onChange={() => onTagSelect(tag._id)}
          />
          <span>{tag.name}</span>
        </label>
      ))}
    </div>
  </div>
);

export default TagSelector;
