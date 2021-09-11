import PropTypes from 'prop-types';
import styles from './GenericSection.module.css';

function GenericSection({ children, color }) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}

GenericSection.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

GenericSection.defaultProps = {
  color: 'inherit',
};

export default GenericSection;
