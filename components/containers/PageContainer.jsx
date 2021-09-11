import PropTypes from 'prop-types';
import styles from './PageContainer.module.css';

function PageContainer({ children, topBottomPadding }) {
  return (
    <div className={topBottomPadding && styles.padding}>
      <div className={styles.pageContainer}>
        {children}
      </div>
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  topBottomPadding: PropTypes.bool,
};

PageContainer.defaultProps = {
  topBottomPadding: false,
};

export default PageContainer;
