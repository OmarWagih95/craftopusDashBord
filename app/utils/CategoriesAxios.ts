import axios from "axios";

export async function deleteCategory(data:any){
    console.log(data);
    
    axios.delete(`api/categories/`,data)
}