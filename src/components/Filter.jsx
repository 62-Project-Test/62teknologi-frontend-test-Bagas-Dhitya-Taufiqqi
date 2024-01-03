const Filter = ({ filter, onFilterChange, options }) => (
  <label className="ml-2">
    Filter:
    <select
      className="ml-1 p-1"
      onChange={(e) => onFilterChange(e.target.value)}
      value={filter}
    >
      {options?.map((option) => (
        <option key={option?.value} value={option?.value}>
          {option?.label}
        </option>
      ))}
    </select>
  </label>
);

export default Filter;
