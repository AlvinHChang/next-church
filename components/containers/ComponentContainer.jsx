import PropTypes from 'prop-types';
import styles from './ComponentContainer.module.css';

function ComponentContainer({ children }) {
  return (
    <div className={styles.componentContainer}>
      {children}
    </div>
  );
}

ComponentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComponentContainer;
