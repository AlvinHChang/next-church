import PropTypes from 'prop-types';
import styles from './List.module.css';

function List(props) {
  const { children, title } = props;
  return (
    <div className={styles.listContainer}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
}

function Item(props) {
  const { children } = props;
  return (
    <div className={styles.itemContainer}>
      {children}
    </div>
  );
}

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  title: PropTypes.string,
};

List.defaultProps = {
  title: '',
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

List.Item = Item;

export default List;
