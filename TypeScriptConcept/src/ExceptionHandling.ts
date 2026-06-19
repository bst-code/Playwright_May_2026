
//Compile time | Checked exception

//const a:number = "Bala" //throws error since string value cant be stored in variable where its data type is number
const a:number = 90

// RunTime exception | unchecked Exception 

const ages :number[] = [20,30,40,45,48,48] //[0,---5]


function getAge():void
{
    try{
        console.log(ages[1].toString());
    }catch(error){
       // console.log(error);
        
        console.log("Please provide value less than ", ages.length);
        
    }
    finally
    {
        console.log("Always runs")
    }
    
}

getAge()