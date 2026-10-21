const FilterBar = ({ query, status, onQueryChange, onStatusChange }) => (
  <div className="filter-bar">
    <div className="filter-field">
      <label htmlFor="event-search">Tìm kiếm</label>
      <input
        id="event-search"
        type="text"
        value={query}
        onChange={onQueryChange}
        placeholder="Nhập tên sự kiện"
      />
    </div>
    <div className="filter-field">
      <label htmlFor="event-status">Tình trạng</label>
      <select
        id="event-status"
        value={status}
        onChange={(event) => onStatusChange(event.target.value)}
      >
        <option value="all">Tất cả</option>
        <option value="available">Còn chỗ</option>
        <option value="full">Đã đầy</option>
      </select>
    </div>
  </div>
);

export default FilterBar;
