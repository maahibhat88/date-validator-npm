module.exports.isDateValid = (fromDate,toDate) => {

    let reg = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if(!reg.exec(fromDate)){
        return "Invalid From date, format should be DD/MM/YYYY";
    }else if(!reg.test(toDate)){
        return "Invalid To date, format should be DD/MM/YYYY";
    }
    let splitFromDate = fromDate.split("/");
    let fd = splitFromDate[0];
    let fm = splitFromDate[1];
    let fy = splitFromDate[2];

    let splitToDate = toDate.split("/");
    let td = splitToDate[0];
    let tm = splitToDate[1];
    let ty = splitToDate[2];

    if (fd > td || fm > tm || fy > ty) {
        return true;
    }
    return false;
}

