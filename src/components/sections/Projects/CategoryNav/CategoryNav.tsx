import React from 'react';
import styles from './CategoryNav.module.scss';

interface CategoryNavProps {
  categories: string[];
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, selectedCategory, onCategoryClick }) => {
  return (
    <nav className={styles['projects__nav']}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles['projects__nav-button']} ${category === selectedCategory ? styles['projects__nav-button--active'] : ''}`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav;
