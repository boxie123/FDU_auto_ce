let question = document.getElementsByClassName("formstyle subject clearfix jqtransformdone")
var i = 0
while (i < question.length) {
    let option1 = question[i].getElementsByClassName("option jqTransformHidden")[0]
    option1.click()
    i++
}