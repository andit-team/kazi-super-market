import axios from 'axios'
import Swal from "sweetalert2";

async function fileupload(file){
    const data = new FormData()
    data.append('image', file)
    let url = "https://api.imgbb.com/1/upload?key=dbe026b9378783fd76fb76f8dea82edb";

    const result = await axios.post(url, data, {}).then( res => {
        if (res.data.success) {
            return res
        }else{
            return ''
        }
    }).catch(err => {
        return ''    
    })

    if (result.data.success) {
        return result
    };
    return ''
}

function  WarningMsg(msg) {
    Swal.fire({
        position: "bottom-end",
        icon: "warning",
        title: msg,
        showConfirmButton: false,
        timer: 2500,
    });
}
function  SuccessMsg(msg) {
    Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: msg,
        showConfirmButton: false,
        timer: 2500,
    });
}

function textSort(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};

export const helper = {
    fileupload,
    WarningMsg,
    SuccessMsg,
    textSort
};