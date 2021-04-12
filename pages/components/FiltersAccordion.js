import React, { useState } from "react";
import AccordionItem from "./FiltersAccordionItem";
import styles from '../../styles/components/Filters.module.scss';

const FiltersAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const filters = [
    {
      title: "Type",
      filters:
        "Triple - blonde, ...",
    },
    {
      title: "Provenance",
      filters:
        "Nord, Pas de Calais, Belgique",
    },
    {
      title: "Notes / Saveurs",
      filters: "Caramel, houblon, céréales, ...",
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