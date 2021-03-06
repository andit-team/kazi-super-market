import axios from 'axios'
import Swal from "sweetalert2";
import { integer } from 'vuelidate/lib/validators';

async function fileupload(file,thumb=null){
    if(typeof file === 'object' && file !== null){
        if ('manuallyAdded' in file) {
            return file.img;
        }
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
            // console.log(result);
            if(thumb){
                return result.data.data.image.url;
            }
            var imgdata = {
                'id'   : result.data.data.id,
                'url'   : result.data.data.image.url,
                'title'   : result.data.data.title,
                'size'   : result.data.data.size,
                'type'  : result.data.data.image.mime,
                'delete_url'    : result.data.data.delete_url
            }
            return imgdata
        };
    }
    if(typeof file === 'string' && file !== null){
        return file
     }
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
    if(str){
        if(typeof n == 'number'){
            return (str.length > n) ? str.substr(0, n-1) + '...' : str;
        }
    }
};
function getBanarSrc(slug){
   let banners =  JSON.parse(localStorage.getItem('banners'))
   if(banners){
    var d = banners.filter(el => {
        return el.slug == slug
    })
    return d[0]
   }
   return false
};

function AuthHeader(){
    let config = {
        headers : {
            'Content-Type'  : 'application/json',
            'authorization' : "authorization "+JSON.parse(localStorage.getItem('_token'))
        }
    }
    return config
}
function dateFormat(timestamp){
    // return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};

export const helper = {
    AuthHeader,
    fileupload,
    WarningMsg,
    SuccessMsg,
    textSort,
    getBanarSrc,
    dateFormat
};