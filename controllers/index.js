import {Album} from "../models/album.js";
import {DsAlbum} from "../models/dsAlbum.js"

const danhSach = new DsAlbum();
let tenAlbumGlobal = ""
danhSach.layDanhSach()


window.xoaAlbum = (tenAB)=>{
    danhSach.xoaAlbum(tenAB)
    danhSach.layDanhSach()
    renderHTML();
}

window.suaAlbum = (tenAB)=>{
    //Do du lieu len input

    let album = danhSach.danhSachAb.find((item)=>item.tenAlbum == tenAB)

    document.getElementById("linkAnh").value = album.linkAnh
    document.getElementById("moTa").value =album.moTa
    document.getElementById("tenAlbum").value =album.tenAlbum
    document.querySelector("select").options[document.querySelector("select").selectedIndex].text = album.theLoai
    tenAlbumGlobal = tenAB
}


//Show layout render HTMl

const renderHTML = () =>{
    let content = "";
    danhSach.danhSachAb.forEach(album => {
        content+= `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <div class="reponsive-img"
                style="background-image: url(${album.linkAnh});">
              </div>
              <div class="card-body">
                <h3>${album.tenAlbum}</h3>
                <p class="card-text">${album.moTa}</p>
                <p class="card-text">Thể loại: ${album.theLoai}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-success text-white btn-sm btn-outline-secondary mr-2" onclick="suaAlbum('${(album.tenAlbum)}')">Chỉnh
                      sửa</button>
                    <button type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary" onclick="xoaAlbum('${(album.tenAlbum)}')" >Xóa</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
    });
    document.getElementById("content").innerHTML = content
}
renderHTML()

const addLayOut = (album) =>{
    let content = "";
        content+= `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <div class="reponsive-img"
                style="background-image: url(${album.linkAnh});">
              </div>
              <div class="card-body">
                <h3>${album.tenAlbum}</h3>
                <p class="card-text">${album.moTa}</p>
                <p class="card-text">Thể loại: ${album.theLoai}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-success text-white btn-sm btn-outline-secondary mr-2">Chỉnh
                      sửa</button>
                    <button type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary" onclick="xoaAlbum('${(album.tenAlbum)}')">Xóa</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
    document.getElementById("content").innerHTML += content
}

document.getElementById("btnThemAlbum").addEventListener("click", ()=>{
    let linkHinh = document.getElementById("linkAnh").value
    let moTa = document.getElementById("moTa").value
    let tenAlbum = document.getElementById("tenAlbum").value
    let theLoai = document.querySelector("select").options[document.querySelector("select").selectedIndex].text;
    let album = new Album(linkHinh,moTa,theLoai,tenAlbum);
    //Them
    let isExist = danhSach.themAlbum(album);
    if(isExist){
        console.log(danhSach.danhSachAb)
        addLayOut(album)
    }
})

document.getElementById("btnCapNhatAlbum").addEventListener("click",()=>{
    danhSach.suaAlbum(tenAlbumGlobal)
    danhSach.layDanhSach()
    renderHTML();
})