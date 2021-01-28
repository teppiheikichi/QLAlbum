import {Album}  from "./album.js";
export class DsAlbum {
  danhSachAb = [];
  constructor(array) {
    this.danhSachAb = array;
  }

  //Them
  themAlbum(album) {
    let isExist = this.danhSachAb.findIndex((item)=> item.tenAlbum === album.tenAlbum)
    if(isExist != -1){
        alert("Trùng tên rồi bạn nhé")
        return false;
    }else{
        this.danhSachAb.push(album);
        this.luuDanhSach()
        return true;
    }
  }

  //Sua
  suaAlbum(tenAlbum) {
    //inpulet tenAlbum = document.getElementById("tenAlbum").valuet : tenAlbum => thang muon sua ?

    //Vi tri trong mang
    //FindIndex tra ra -1 la tim khong thay , khac -1 tim thay
    let index = this.danhSachAb.findIndex((item) => item.tenAlbum === tenAlbum);

    if(index != -1){
        let linkHinh = document.getElementById("linkAnh").value
        let moTa = document.getElementById("moTa").value
        let tenAlbum = document.getElementById("tenAlbum").value
        let theLoai = document.querySelector("select").options[document.querySelector("select").selectedIndex].text;

        //Validate
        let isExist = this.danhSachAb.findIndex((item)=> item.tenAlbum === tenAlbum)
        //Kiem tra co hay chua co : khac -1 , chua co : -1
        if(isExist != -1){
            alert("Trùng tên rồi bạn nhé");
            return;
        }else{
            const temp= new Album(linkHinh,moTa,theLoai,tenAlbum)

            //Co cai mang co vitri cua phan tu trongmang luon r
            this.danhSachAb[index].linkAnh = temp.linkAnh;
            this.danhSachAb[index].moTa = temp.moTa;
            this.danhSachAb[index].theLoai = temp.theLoai;
            this.danhSachAb[index].tenAlbum = temp.tenAlbum;
            this.luuDanhSach()
        }
    }
  }

  //Xoa
  xoaAlbum(tenAlbum) {
    //Tim trong mang theo ten => vitri trong mang cua no

    //Vi tri trong mang
    //FindIndex tra ra -1 la tim khong thay , khac -1 tim thay
    let index = this.danhSachAb.findIndex((item) => item.tenAlbum === tenAlbum);

    if (index != -1) {
      this.danhSachAb.splice(index, 1);
      this.luuDanhSach()
      console.log(this.danhSachAb)
    }
  }

  //Luu danh sach
  luuDanhSach(){
    let data =JSON.stringify(this.danhSachAb)
    localStorage.setItem("danhSach",data)
  }
  //Lay danh sach
  layDanhSach(){
      if(localStorage.getItem("danhSach")){
        let ds = JSON.parse(localStorage.getItem("danhSach"))

        this.danhSachAb = ds
      }else{
          this.danhSachAb = []
      }
  }
}
