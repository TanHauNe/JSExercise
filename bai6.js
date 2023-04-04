var Holidays = require('date-holidays');
var hd = new Holidays('VN');
let holiday = hd.getHolidays(2024);

tetNguyenDan = holiday.filter((i) => i.name == 'Tết Nguyên Đán');

let date_1 = new Date(tetNguyenDan[0].date);
let date_2 = new Date();

const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
};

console.log(days(date_1, date_2) + ' days to Tet holiday');
