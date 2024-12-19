import ItemList from "./ItemList";

const ItemCategory= ({data,showItems,setShowIndex,index,showIndex}) => {

    const handleClick=()=>{
        setShowIndex(showIndex === index ? null : index);
    }
    return(
        <div>
            <div  className="mx-auto my-4 shadow-lg p-4 w-6/12 text-left bg-slate-100 border-b-2 cursor-pointer">
                <div className=" flex justify-between"  onClick={handleClick}>
                    <span>{data.title}({data.itemCards.length})</span>
                    <span>{showItems ? "-" : "+"}</span> 
                </div>
                <div className="">
                    {showItems && <ItemList items={data.itemCards} />}
                </div>
            </div>
        </div>
    )
}
export default ItemCategory;