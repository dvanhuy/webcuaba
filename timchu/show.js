var dnvhtml = `
<div class="close_button" onclick="closeFrame()">✗</div>
<div class="timkiemcn"><input type="text" id="timkiem" placeholder="Tìm kiếm ..."></div>
<div class="buttoncn"><input type="button" id="search" value="Tìm chữ này" onclick="search()"></div>
<div class="mess"></div>
<div class="keyboard">
    <div onclick="document.getElementById('timkiem').value+='A'">A</div>
    <div onclick="document.getElementById('timkiem').value+='B'">B</div>
    <div onclick="document.getElementById('timkiem').value+='C'">C</div>
    <div onclick="document.getElementById('timkiem').value+='D'">D</div>
    <div onclick="document.getElementById('timkiem').value+='E'">E</div>
    <div onclick="document.getElementById('timkiem').value+='F'">F</div>
    <div onclick="document.getElementById('timkiem').value+='G'">G</div>
    <div onclick="document.getElementById('timkiem').value+='H'">H</div>
    <div onclick="document.getElementById('timkiem').value+='I'">I</div>
    <div onclick="document.getElementById('timkiem').value+='J'">J</div>
    <div onclick="document.getElementById('timkiem').value+='K'">K</div>
    <div onclick="document.getElementById('timkiem').value+='L'">L</div>
    <div onclick="document.getElementById('timkiem').value+='M'">M</div>
    <div onclick="document.getElementById('timkiem').value+='N'">N</div>
    <div onclick="document.getElementById('timkiem').value+='O'">O</div>
    <div onclick="document.getElementById('timkiem').value+='P'">P</div>
    <div onclick="document.getElementById('timkiem').value+='Q'">Q</div>
    <div onclick="document.getElementById('timkiem').value+='R'">R</div>
    <div onclick="document.getElementById('timkiem').value+='S'">S</div>
    <div onclick="document.getElementById('timkiem').value+='T'">T</div>
    <div onclick="document.getElementById('timkiem').value+='U'">U</div>
    <div onclick="document.getElementById('timkiem').value+='V'">V</div>
    <div onclick="document.getElementById('timkiem').value+='W'">W</div>
    <div onclick="document.getElementById('timkiem').value+='X'">X</div>
    <div onclick="document.getElementById('timkiem').value+='Y'">Y</div>
    <div onclick="document.getElementById('timkiem').value+='Z'">Z</div>
    <div onclick="document.getElementById('timkiem').value+=' '"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSrOsCiAbkx7V31SyDuTsAiyW-l_MZlP1yA&usqp=CAU"></div>
    <div
        onclick="document.getElementById('timkiem').value = document.getElementById('timkiem').value.slice(0, -1)">
        <img src="https://static-00.iconduck.com/assets.00/backspace-icon-512x429-83ij2eee.png">
    </div>
</div>`;

var dnvcss = `
.containerdinhnamvan {
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background-color: white;
    border: 1px solid black;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.containerdinhnamvan #timkiem {
    margin: auto;
    width: 70%;
    height: 60px;
    padding: 10px 20px;
    font-size: 40px;
}

.containerdinhnamvan .timkiemcn {
    text-align: center;
    margin-top: 20px;
}

.containerdinhnamvan .buttoncn {
    text-align: center;
    margin-top: 20px;
}

.containerdinhnamvan .buttoncn input {
    width: 300px;
    height: 100px;
    font-size: 40px;
    background-color: red;
    font-weight: bold;
    color: white;
}

.containerdinhnamvan .mess {
    text-align: center;
    font-size: 40px;
}

.containerdinhnamvan .close_button {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 40px;
    color: red;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
}

.containerdinhnamvan .close_button:hover {
    background-color: red;
    color: white;
}

.keyboard {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(7, auto);
}

.keyboard>div {
    border: 1px solid black;
    height: 60px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
    user-select: none;
}

.keyboard>div:hover {
    background-color: rgb(255, 61, 61);
    color: white;
}

.keyboard img {
    width: 50%;
    height: 50%;
}`;

var dnvcontainer = document.createElement('div');
dnvcontainer.className = "containerdinhnamvan";
dnvcontainer.innerHTML = dnvhtml;
dnvcontainer.innerHTML += '<style>' + dnvcss + '</style>';

document.body.appendChild(dnvcontainer);


function search() {
    try {
        var searchtext = document.getElementById("timkiem").value;
        document.getElementsByClassName("containerdinhnamvan")[0].style.display = "none";
        find(searchtext);
        document.getElementsByClassName("containerdinhnamvan")[0].remove();
    } catch (error) {
        console.log("lỗi searchtext");
    }

};

function closeFrame() {
    try {
        document.getElementsByClassName("containerdinhnamvan")[0].remove();
    } catch (error) {
        console.log(error);
    }
};