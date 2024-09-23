const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];
products.map(ListItem);

function ListItem(item) {
    return [item.title, item.id].join(" ");
}

export default ListItem