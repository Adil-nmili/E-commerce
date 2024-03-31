<?php
    $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $orders = [
        [
            "name" => "adil",
            "ext" => 12543,
            "city" => "Marrakech",
            "Start Date" => "21/09/2023",
            "Completion" => "37%"
        ],
        [
            "name" => "nmili",
            "ext" => 1243,
            "city" => "Marrakech",
            "Start Date" => "21/10/2023",
            "Completion" => "35%"
        ],
        [
            "name" => "oussama",
            "ext" => 124003,
            "city" => "Marrakech",
            "Start Date" => "01/10/2023",
            "Completion" => "31%"
        ],
        [
            "name" => "mustapha",
            "ext" => 24003,
            "city" => "tanger",
            "Start Date" => "11/10/2023",
            "Completion" => "32%"
        ],
        [
            "name" => "fatima ezzahra",
            "ext" => 124,
            "city" => "casablanca",
            "Start Date" => "15/10/2023",
            "Completion" => "30%"
        ],
        [
            "name" => "nouhaila",
            "ext" => 1203,
            "city" => "Marrakech",
            "Start Date" => "20/10/2023",
            "Completion" => "21%"
        ],
        [
            "name" => "saad",
            "ext" => 1524,
            "city" => "Marrakech",
            "Start Date" => "23/10/2023",
            "Completion" => "23%"
        ],
    ];
?>

<div class="shadow shadow-md rounded">
    <div class="head bg-primary d-flex p-2 justify-content-between rounded">
        <div>
            <h5 class="text-capitalize m-0">orders</h5>
            <p class="text-capitalize text-light m-0">details and history</p>
        </div>
        <div class="d-flex align-items-center gap-5 pe-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-download text-light pointer" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-date-fill pointer text-light" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2"/>
            <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a13 13 0 0 1 1.313-.805h.632z"/>
            </svg>
        </div>
    </div>
    <div class="d-flex justify-content-between p-2 ">
        <div class="d-flex gap-2 align-items-center">
            <select class=" border border-secondary rounded px-3 py-1" name="entities" id="entities">
            <?php
                foreach($numbers as $num) {
                    echo "<option value=$num>$num</option>";
                }
            ?>
            </select>
            <h6 class="text-capitalize">entries per page</h6>
        </div>
        <form class="d-flex" role="search">
            <input class="form-control me-2 border-secondary" type="search" placeholder="Search..." aria-label="Search">
        </form>
    </div>
    <table class="table table-dlight border my-3 table-striped">
            <thead>
                <th class=" col-3 text-capitalize">name</th>
                <th class="col-1 border text-capitalize">ext</th>
                <th class=" col-3 text-capitalize">city</th>
                <th class="border text-capitalize">start date</th>
                <th class="text-capitalize">completion</th>
            </thead>
            <tbody>
                <?php
                    foreach($orders as $order){
                        echo "<tr>";
                        foreach($order as $key => $value) {
                            echo "<td class='text-capitalize'> $value </td>";
                        }
                        echo "</tr>";
                    }
                ?>
            </tbody>
    </table>
    <div class="d-flex align-items-center justify-content-between p-2 my-2">
        <h6 class="text-capitalize">showing 1 to 10 of 100 entries</h6>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <?php 
                    foreach($numbers as $num1) {
                        echo"<li class='page-item'><a class='page-link' href='#'>$num1</a></li>";
                    }
                ?>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
