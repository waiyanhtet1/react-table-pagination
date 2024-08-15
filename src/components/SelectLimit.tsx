type SelectLimitProps = {
  onLimitChange: (value: string) => void;
};

const SelectLimit = ({ onLimitChange }: SelectLimitProps) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(e) => onLimitChange(e.target.value)}
      style={{
        width: 50,
        height: 40,
      }}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  );
};

export default SelectLimit;
