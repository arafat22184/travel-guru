// components/DatePickerWithIcon.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerWithIcon = ({ label }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative w-72">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="YYYY-MM-DD"
          dateFormat="yyyy-MM-dd"
          className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <FaCalendarAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default DatePickerWithIcon;
