export default function orderByProps(obj, order) {
    const orderedProps = [];
    const remainingProps = [];

    for (const prop in obj) {
        if (order.includes(prop)) {
            orderedProps.push({ key: prop, value: obj[prop] });
        } else {
            remainingProps.push({ key: prop, value: obj[prop] });
        }
    }

    orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
    remainingProps.sort((a, b) => a.key.localeCompare(b.key));

    return orderedProps.concat(remainingProps);
}