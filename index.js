import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-virtualized';

class SectionList extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    renderRow: PropTypes.func.isRequired,
    rowHeight: PropTypes.number.isRequired,
    renderSection: PropTypes.func.isRequired,
    sectionHeight: PropTypes.number.isRequired,
  }

  flattenList = sections => {
    const list = sections.reduce((acc, el) => {
      const section = el.section;

      acc.push({
        data: section,
        isHeader: true,
        index: acc.length,
      });

      el.data.forEach(item => {
        acc.push({
          data: item,
          isHeader: false,
          index: acc.length,
        });
      });

      return acc;
    }, []);

    return list;
  };

  render() {
    const list = this.flattenList(this.props.list);

    return (
      <List
        width={this.props.width}
        height={this.props.height}
        rowCount={list.length}
        rowRenderer={props => {
          const item = list[props.index];

          const renderer = item.isHeader
            ? this.props.renderSection
            : this.props.renderRow;

          return renderer({ ...props, item: item.data });
        }}
        rowHeight={props => {
          const item = list[props.index];

          return item.isHeader
            ? this.props.sectionHeight
            : this.props.rowHeight;
        }}
      />
    );
  }
}

export default SectionList;
