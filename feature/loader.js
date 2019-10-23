let ts = Date.now();
let dateObj = new Date(ts);

export const getDate = () => {
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    console.log(month, date);
};
