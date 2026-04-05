import React from "react";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  mode?: "manual" | "auto";
}

export const Filter: React.FC<Props> = ({
  filter,
  setFilter,
  mode = "manual",
}) => {
  const [inputValue, setInputValue] = React.useState(filter);

  const handleChange = (value: string) => {
    setInputValue(value);

    if (mode === "auto") {
      setFilter(value);
    }
  };

  return (
    <div className="filter-container">
      <input
        className="filter-input"
        type="text"
        placeholder="Search organization members..."
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      {mode === "manual" && (
        <button className="search-button" onClick={() => setFilter(inputValue)}>
          Search
        </button>
      )}
    </div>
  );
};
