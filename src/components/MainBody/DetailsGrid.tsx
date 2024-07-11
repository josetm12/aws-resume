import React from 'react';

interface Item {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

type ItemArray = Item[];

interface ItemListProps {
  items: ItemArray;
}

const DetailsGrid: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-3 pt-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="w-full flex flex-row justify-between text-sm font-light"
        >
          <div className="item-details">
            <h3 className="text-lg font-medium leading-none">{item.title}</h3>
            <span className=" leading-none">{item.description}</span>
          </div>
          <div className="item-dates">
            {item.startDate} - {item.endDate === '' ? 'Current' : item.endDate}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DetailsGrid;
