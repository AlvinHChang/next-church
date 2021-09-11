import PropTypes from 'prop-types';
import styles from './PageContainer.module.css';

function PageContainer({ children }) {
  return (
    <div className={styles.pageContainer}>
      {children}
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
