import React, { memo } from 'react'

const Item = memo((props) => {
    const { item } = props

    console.log('item render call')
    return (
      <div>
        {item}
      </div>
    )
});


class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [{id: 1, title: '2'}, {id: 2, title: '3'}] }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    const newItems = this.state.items;
    newItems.forEach(item => item.title = 'wang')
    this.setState({ items: newItems })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        {
          this.state.items.map((item) => (
            <Item key={item} item={item} />
          ))

        }
      </div>
    )
  }
}

export default List
