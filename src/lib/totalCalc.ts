
export default function totalCalc(colection: Array<any>, key: string): number {
    if(colection.length==0) return 0;
    let total:number=0;

    colection.forEach((item)=>{
        total+=item[key];
    });

    return total;
}