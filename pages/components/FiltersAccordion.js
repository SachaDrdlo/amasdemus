import React, { useState } from "react";
import AccordionItem from "./FiltersAccordionItem";
import styles from '../../styles/components/Filters.module.scss';

const FiltersAccordion = ({ types, locations, flavours }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(types);
  const filters = [
    {
      title: "Type",
      filters:
       `${types}`
    },
    {
      title: "Provenance",
      filters:
      `${locations}`
    },
    {
      title: "Notes / Saveurs",
      filters: `${flavours}`
    }
  ];

  const renderedFilters = filters.map((item, index) => {
    const showFilters = index === activeIndex ? `${styles.filter_showfilters}` : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        key={index}
        showFilters={showFilters}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <ul className={styles.filters_list}>{renderedFilters}</ul>
  );
};

export default FiltersAccordion;