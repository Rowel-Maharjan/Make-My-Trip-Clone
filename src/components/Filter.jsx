import React from 'react';
import { Checkbox } from './ui/checkbox';

const Filter = ({ title, filters, onFilterChange }) => {
    return (
        <div className="mb-8">
            <div className="text-black font-bold text-base">{title}</div>
            {filters.map((item, index) => (
                <div key={index} className="flex mt-2 gap-2 items-center">
                    <Checkbox
                        onCheckedChange={(checked) => {
                            onFilterChange(item.value, checked);
                        }}
                    />
                    <span className="text-[#4a4a4a] font-normal text-sm">{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Filter;
