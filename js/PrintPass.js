const name = document.getElementById('name');
const email = document.getElementById('email');
const mob = document.getElementById('mob');
const validity = document.getElementById('valid');
const destination = document.getElementById('destination');
const payment = document.getElementById('payment');

name.innerHTML = localStorage.getItem('Name')
email.innerHTML = localStorage.getItem('email')
mob.innerHTML = localStorage.getItem('mobno')
destination.innerHTML = localStorage.getItem('Destination')
payment.innerHTML = "Rs " + localStorage.getItem('Payment') + "/-"


var valid = localStorage.getItem('Expire')
if (valid == 1) {
    validity.innerHTML = localStorage.getItem('Expire') + " Month"
}
else {
    validity.innerHTML = localStorage.getItem('Expire') + " Months"
}




document.getElementById('pdf').onclick = function () {
    var doc = new jsPDF('l', 'pt', [610, 310]);
    var res = doc.autoTableHtmlToJson(document.getElementById('table'));
    // console.log(res)
    var height = doc.internal.pageSize.height;
    doc.setFontType('bold');
    doc.text("Bus Pass", 250, 30);
    doc.line(250, 35, 350, 35);
    doc.setFontType('normal');
    doc.autoTable(res.columns, res.data, {
        // startX: 150,
        styles: { fontSize: 11 },
        margin: { left: 200 },
        startY: 50,
        theme: 'plain'
    });

    doc.save('Bus Pass.pdf');
}

function done() {
    if (window.confirm("Your Pass has been Registered!")) {
        window.location.href = "BusPass.html";
    }
}



