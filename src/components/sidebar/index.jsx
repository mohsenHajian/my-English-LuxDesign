import React from "react";
import "./sidebar-style.scss";

const Sidebar = () => {
  return (
    <aside className="aside d-flex flex-column p-4">
      <h4>فیلتر ها</h4>
      <select className="select">
        <option selected>دسته بندی </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select className="select">
        <option selected>برند</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="form-check form-switch py-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          فقط کالا های موجود
        </label>
      </div>
      
    </aside>
  );
};

export default Sidebar;
