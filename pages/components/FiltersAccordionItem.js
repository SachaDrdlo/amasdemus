import React from "react";
import styles from '../../styles/components/Filters.module.scss';

const FiltersAccordionItem = ({
  showFilters,
  ariaExpanded,
//   fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <li className={styles.filters_list_el} key={item.question}>
      <div className={`${styles.filter} ${showFilters}`}>
        <button
            aria-expanded={ariaExpanded}
            aria-controls={`filter${index + 1}_filters`}
            data-qa="filter__title-button"
            onClick={onClick}
        >
            {item.title}
        </button>
        <p
            id={`faq${index + 1}_filters`}
            data-qa="filter__filters"
            className={`${styles.filter_boxes} `}
        >
            {item.filters}
        </p>
      </div>
  </li>
);

export default FiltersAccordionItem;