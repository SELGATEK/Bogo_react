export const reArrangeObj= (originalObject)=> {
    const time = [];
  
    const daysOfWeek = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", ];
  
    daysOfWeek.forEach((day) => {
        const dayState = originalObject[`${day}State`];
        time.push({ day, isActive:dayState.status, startTime: dayState.openTime, endTime: dayState.closeTime, });
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