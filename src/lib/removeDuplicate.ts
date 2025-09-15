const removeDuplicate = (items: Array<any>, key: string): Array<any> => {
    if (items.length === 0) return [];

    const uniqueItemskey: Array<any> = [];
    const uniqueItems: Array<number> = [];
   
    items.forEach(item => {
        if (!uniqueItemskey.includes(item[key])) {
            uniqueItems.push(item);
            uniqueItemskey.push(item[key]);
        }
    });
    return uniqueItems;
};

export default removeDuplicate;