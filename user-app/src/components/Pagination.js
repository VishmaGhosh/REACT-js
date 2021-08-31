import React, { useState, useEffect } from 'react'

function Pagination({ showData, onPagination }) {
    const [count, setCount] = useState(1);
    console.log(count);
    const [noOfButtons, setNoOfButtons] = useState(20)

    useEffect(() => {
        const value = showData * count;
        onPagination(value - showData, value);
    }, [count])

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (count === 1) {
                setCount(1);
            } else { setCount(count - 1) }
        } else if (type === "next") {
            if (count === noOfButtons) {
                setCount(50);
            } else { setCount(count + 1) }

        }
    }

    return (
        <div>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center" >
                    <li class="page-item" onClick={() => { onButtonClick("prev") }}><a class="page-link" href="#">Previous</a></li>
                    
                    {
                        new Array(noOfButtons).fill("").map((ele,i)=>(
                            <li class={`page-item ${i+1=== count?"active":null}`}><a class="page-link" href="#" onClick={()=>{setCount(i+1)}}>{i+1}</a></li>
                        ))
                    }
                    <li class="page-item" onClick={() => { onButtonClick("next") }}><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
