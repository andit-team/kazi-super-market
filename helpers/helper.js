import axios from 'axios'

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

export const helper = {
    fileupload
};