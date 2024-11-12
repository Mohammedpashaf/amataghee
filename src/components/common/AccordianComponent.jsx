import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordianComponent = (props) => {
  const [activeAccordions, setActiveAccordions] = useState([]);

  const toggleAccordion = (index) => {
    if (activeAccordions.includes(index)) {
      setActiveAccordions(activeAccordions.filter((i) => i !== index));
    } else {
      setActiveAccordions([...activeAccordions, index]);
    }
  };

  

  const AccordionItem = ({ item, index, level = 0 }) => {
    const isActive = activeAccordions.includes(index);
    const paddingClass = level === 0 ? "px-6" : "px-10";

    return (
      <div className={`border-b ${level === 0 ? "border-gray-200" : "border-gray-100"}`}>
        <button
          className={`w-full ${paddingClass} py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 ${level === 0 ? "bg-white" : "bg-gray-50"}`}
          onClick={() => toggleAccordion(index)}
          aria-expanded={isActive}
          aria-controls={`accordion-content-${index}`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-lg font-semibold ${isActive ? "text-blue-600" : "text-gray-700"}`}>
              {item.question}
            </span>
            {isActive ? (
              <FaMinus className="text-blue-600" />
            ) : (
              <FaPlus className="text-gray-400" />
            )}
          </div>
        </button>
        <div
          id={`accordion-content-${index}`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? "max-h-96" : "max-h-0"}`}
          aria-hidden={!isActive}
        >
          <div className={`${paddingClass} py-4`}>
            <p className="text-gray-600">{item.answer}</p>
            {item.subQuestions && (
              <div className="mt-4">
                {item.subQuestions.map((subItem, subIndex) => (
                  <AccordionItem
                    key={subIndex}
                    item={subItem}
                    index={`${index}-${subIndex}`}
                    level={level + 1}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto my-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {props.data.map((item, index) => (
          <AccordionItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AccordianComponent;