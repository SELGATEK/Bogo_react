import { toast } from "react-toastify";

export const ImgUrl =  `http://3.108.250.128:3000/`

export const TOAST_SUCCESS = (msg) => toast.success(msg);
export const TOAST_ERROR = (msg) => toast.error(msg);
export const TOAST_WARNING = (msg) => toast.warn(msg);



export const reArrangeObj= (originalObject)=> {
    const time = [];
  
    const daysOfWeek = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", ];
  
    daysOfWeek.forEach((day) => {
        const dayState = originalObject[`${day}State`];
        time.push({ day, isActive:dayState?.status, startTime: dayState?.openTime, endTime: dayState?.closeTime, });
    });
  
    return time;
  }
  

export const convert_Obj_formData=(jsonData)=>{
    const formData = new FormData();

for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
        const value = jsonData[key];

        if (Array.isArray(value)) {
            // Handle arrays, like "gallery" and "hoursOfOperation"
            for (const item of value) {
                for (const itemKey in item) {
                    formData.append(`${key}[${value.indexOf(item)}].${itemKey}`, item[itemKey]);
                }
            }
        } else if (typeof value === 'object') {
            // Handle nested objects (if any)
            for (const subKey in value) {
                formData.append(`${key}.${subKey}`, value[subKey]);
            }
        } else {
            // Handle non-array, non-object values
            formData.append(key, value);
        }
    }
}
 return formData;

}


export const convertToAmPm = (timeStr) => {
    const [hours, minutes] = timeStr.split(':');
    let amPm = 'AM';
    let hours12 = parseInt(hours, 10);

    if (hours12 >= 12) {
      amPm = 'PM';
      if (hours12 > 12) {
        hours12 -= 12;
      }
    }

    return `${hours12}:${minutes} ${amPm}`;
  };

  
  export const convert12HourTo24Hour = (time12h) => {  
    const time = new Date("1970-01-01 " + time12h); 
    const hours = time.getHours();
    const minutes = time.getMinutes();
   
    const time24h = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  
    return time24h;
  }



  export const getVoucherDetail = (voucherId, businessData) => {
    for (const business of businessData) {
      for (const voucher of business.vouchers) {
        if (voucher.id === voucherId) {
          return voucher;
        }
      }
    }
    return null;  
  }

  