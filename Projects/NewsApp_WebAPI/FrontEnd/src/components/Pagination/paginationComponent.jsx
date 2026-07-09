import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination.jsx"

export default function PaginationComponent(props) {
    const handleClick=props.handleClick;
    const currentPage=props.page;
    const totalPages=props.totalPages;
    const pagesArr=Array.from({length:totalPages},(v,i)=>i+1);



    return(

        <>
            <Pagination className={"p-10"}>
                <PaginationContent>
                    <PaginationItem >
                        <PaginationPrevious
                            onClick={() => {
                        if (currentPage > 1) {
                            handleClick(currentPage - 1)
                        }
                            }} >
                        </PaginationPrevious>
                    </PaginationItem>

                    {pagesArr.map((page,index)=>
                        <PaginationItem key={index}>
                            <PaginationLink href="#" onClick={()=>handleClick(page)} isActive={page===currentPage}>{page}</PaginationLink>
                        </PaginationItem>)
                    }
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={()=> {if (currentPage<totalPages) handleClick(currentPage+1)}} href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </>
    )
}
