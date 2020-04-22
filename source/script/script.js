$(function () {
    $("form > select").on("change", function (event) {
        var select = document.getElementById("operadores");
        var table = $(".table");

        var result_and = "<tr class='result_row'><td>V</td><td>V</td><td>V</td></tr>" + "<tr class='result_row'><td>V</td><td>F</td><td>F</td></tr>" + 
        "<tr class='result_row'><td>F</td><td>V</td><td>F</td></tr>" + "<tr class='result_row'><td>F</td><td>F</td><td>F</td></tr>";

        var result_or = "<tr class='result_row'><td>V</td><td>V</td><td>V</td></tr>" + "<tr class='result_row'><td>V</td><td>F</td><td>V</td></tr>" + 
        "<tr class='result_row'><td>F</td><td>V</td><td>V</td></tr>" + "<tr class='result_row'><td>F</td><td>F</td><td>F</td></tr>";

        var result_so = "<tr class='result_row'><td>V</td><td>V</td><td>V</td></tr>" + "<tr class='result_row'><td>V</td><td>F</td><td>F</td></tr>" + 
        "<tr class='result_row'><td>F</td><td>V</td><td>V</td></tr>" + "<tr class='result_row'><td>F</td><td>F</td><td>V</td></tr>";

        var result_if_and_only_if = "<tr class='result_row'><td>V</td><td>V</td><td>V</td></tr>" + "<tr class='result_row'><td>V</td><td>F</td><td>F</td></tr>" + 
        "<tr class='result_row'><td>F</td><td>V</td><td>F</td></tr>" + "<tr class='result_row'><td>F</td><td>F</td><td>V</td></tr>";


        option = select.options[select.selectedIndex].value;
        
        console.log("Você efetuou o evento: " + event.type);


        if (option === "and") {
            $(".result_row").remove();
            $(".result_consulta").text("p ^ q");
            table.append(result_and);
            return true;
        } else if (option === "or") {
            $(".result_row").remove();
            $(".result_consulta").text("p v q");
            table.append(result_or);
            return true;
        } else if (option === "entao") {
            $(".result_row").remove();
            $(".result_consulta").text("p -> q");
            table.append(result_so);
            return true;
        } else if (option === "se_somente_se") {
            $(".result_row").remove();
            $(".result_consulta").text("p <-> q");
            table.append(result_if_and_only_if);
            return true;
        } else if (option === "clear") {
            $(".result_row").remove();
        }
    });
});