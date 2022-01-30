// const onToggleIncrease = (id) => {
//     //=====================
//     //version 1

//     this.setState({
//       //copy state
//       ...this.state,

//       data: this.state.data.map((item) => {
//         //search item with item.id === id and if find
//         if (item.id === id) {
//           return {
//             ...item,
//             // change increase -> to !increase
//             increase: !item.increase,
//           };
//         }
//         //if doesnt find -> return item without changes
//         return item;
//       }),
//     });

//     //=====================
//     //version 2

//     // this.setState(({ data }) => {
//     //   const index = data.findIndex((item) => item.id === id);
//     //   //find item in data
//     //   const oldItem = data[index];
//     //   //make copy item and change value 'increase' to '!increase'
//     //   const newItem = { ...oldItem, increase: !oldItem.increase };
//     //   //make copy data and insert newItem
//     //   const newData = [
//     //     ...data.slice(0, index),
//     //     newItem,
//     //     ...data.slice(index + 1),
//     //   ];
//     //   //return data (with changes)
//     //   return {
//     //     data: newData,
//     //   };
//     // });
//   };
