import styles from './CategoryNav.module.scss';

interface CategoryNavProps {
  categories: string[];
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
  className: string;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryClick, 
  className 
}) => {

  return (
    <nav className={`${styles[`${className}-nav`]} ${className}`}>
      {categories.map((category) => (
        <button
        key={category}
        className={`${styles[`${className}-button`]} 
        ${category === selectedCategory ? styles[`${className}-button--active`] : ''}`}
        onClick={() => onCategoryClick(category)}>

          {category}

        </button>
      ))}
    </nav>
  );
};

export default CategoryNav;


