export const convertDate = (d) =>{
    const date = new Date(d);

    // Extract the year, month, and day
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    // Return the formatted date
    return `${month}/${day}/${year}`;
}