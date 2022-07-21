import { useState } from "react";

const FilterModal = ({ filters, onFilterChange, onClose, variant }) => {
  const [filter, setFilter] = useState(filters);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterChange(filter);
    onClose();
  };

  return (
    <FilterModal variant={variant}>
      <h2>Filters</h2>
    </FilterModal>
  );
};

export default FilterModal;
