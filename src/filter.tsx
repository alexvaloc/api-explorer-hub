import React from "react";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  mode?: "manual" | "auto";
  placeholder?: string;
  hint?: string;
}

export const Filter: React.FC<Props> = ({
  filter,
  setFilter,
  mode = "manual",
  placeholder = "Type to search...",
  hint,
}) => {
  const [inputValue, setInputValue] = React.useState(filter);

  React.useEffect(() => {
    setInputValue(filter);
  }, [filter]);

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
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      {mode === "manual" && (
        <button className="search-button" onClick={() => setFilter(inputValue)}>
          Search
        </button>
      )}
      {hint && <p className="filter-hint">{hint}</p>}
    </div>
  );
};
