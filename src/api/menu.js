const getAllfood = async()=>{
    const response =await instance.get('/food')
    console.log("category function", response.data);
}
    return response.data




    export {getAllfood}