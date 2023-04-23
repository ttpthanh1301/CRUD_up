// // class Product{
// //     constructor(id,name,price,detail,color){

// //         this.id;
// //         this.name;
// //         this.price;
// //         this.detail;
// //         this.color;
// //     }

// // }

// // var submitBtn=document.querySelector('.form-submit');

// // var editBtns = document.querySelectorAll('.btn-edit');
// // var nameElement = document.querySelector('#name');
// // console.log(nameElement.value)
// // var priceElement = document.querySelector('#price');
// // var detailElement = document.querySelector('#detail');
// // var colorElement = document.querySelector('#color');
// // // let productCreate = new Product(id, nameElement,priceElement,detailElement,colorElement);
// // let editId='';
// // let products = [];
// // // products.push(productCreate);
// // class Validator{
// //     renderProduct(products){
// //         let productTableTbody = document.querySelector('#tbody');
// //         let productTableTbodyHtml = '';
// //         for( let product of products) {
// //             productTableTbodyHtml += `<tr id="row${product.id}">
// //             <td>${product.id}</td>
// //             <td>${product.name}</td>
// //             <td>${product.price}</td>
// //             <td>${product.detail}</td>
// //             <td>${product.color}</td>

// //             <td>
// //               <button class="btn btn-edit" data-id="${product.id}">Edit</button>
// //               <button class="btn btn-delete" data-id="${product.id}" >Delete</button>
// //             </td>
// //           </tr>`;
// //         }
// //         productTableTbody.innerHTML = productTableTbodyHtml;

// //     }
// // }
// // let validator = new Validator();
// // let productCreate = new Product(3, 'huyhq', 'h@gmail.com', 2,2);
// // products.push(productCreate);
// // validator.renderProduct(products);
// // submitBtn.onclick=function(){
// //     if(editId){
// //         let productEditIndex =products.findIndex((item) => item.id == editId);
// //         let productEdit = products[productEditIndex];
// //         productEdit.name = nameElement.value;
// //         productEdit.price = priceElement.value;
// //         productEdit.detail = detailElement.value;
// //         productEdit.color = colorElement.value;
// //         validator.renderProduct(products);
// //         resetForm();
// //     }else{
// //         let id = parseInt(Math.random() * 100);
// //         let productCreate = new Product(id, nameElement.value, priceElement.value, detailElement.value, colorElement.value);
// //         products.push(productCreate);
// //         validator.renderProduct(products);
// //         resetForm();
// //     }
// // };
// // function resetForm(){
// //     nameElement.value='';
// //     priceElement.value = '';
// //     detailElement.value = '';
// //     colorElement.value = '';
// //     editId= '';
// // }
// // load html => load js => thuc thi



// class ValidateInput {
//     constructor(formData) {
//         this.formData = formData;
//         this.errors = [];
//     }

//     require(mess = 'khong duoc de trong') {
//         for (const [key, value] of this.formData.entries()) {
//             console.log(key, value);
//             if (!Boolean(value)) {
//                 // true
//                 let errorMess = `${key} ${mess}`;
//                 this.errors.push([key, errorMess]);
//             }
//         }
//         return this.errors;
//     }
// }
// let formData = new FormData(document.querySelector('#form-data'));

// let errors = new ValidateInput(formData).require('ban nen nhap');

// // [['name',['khong de trong', 'gia tri lon hon 10']] ,['name','khong de trong']  ]

// submitBtn.addEventListener('click', function () {
//     if (editId) {
//         let productEditIndex = products.findIndex((item) => item.id == editId);
//         let productEdit = products[productEditIndex];
//         productEdit.name = nameEl.value;
//         productEdit.price = pricelEl.value;
//         productEdit.detail = detailEl.value;
//         productEdit.color = colorEl.value;
//         app.renderProduct(products);
//         resetForm();
//         // clear
//     } else {
//         let id = parseInt(Math.random() * 100);

//         let formData = new FormData(document.querySelector('#form-data'));

//         let errors = new ValidateInput(formData).require('ban nen nhap');
//         resetError();
//         if (errors.length > 0) {
//             for (let [key, mess] of errors) {
//                 document.querySelector(`.error-${key}`).innerHTML = mess;
//             }
//             return;
//         }

//         let productCreate = new Product(id, nameEl.value, pricelEl.value, detailEl.value, colorEl.value);
//         products.push(productCreate);
//         app.renderProduct(products);
//         resetForm();
//     }
// });
// function resetError() {
//     document.querySelectorAll('.error').forEach((item) => (item.innerHTML = ''));
// }
// function resetForm() {
//     nameEl.value = '';
//     priceEl.value = '';
//     detailEl.value = '';
//     colorEl.value = '';
//     editId = '';
// }


// editBtns.forEach((item) => {
//     item.addEventListener('click', function () {
//         editId = this.getAttribute('data-id');
//         let productEditIndex = products.findIndex((item) => item.id == editId);
//         let productEdit = products[productEditIndex];
//         nameEl.value = productEdit.name;
//         priceEl.value = productEdit.price;
//         detailEl.value = productEdit.detail;
//         colorEl.value = productEdit.color;
//     });
// });

// function initsDeleteHandle() {
//     let deleteBtns = document.querySelectorAll('.btn-delete');
//     deleteBtns.forEach((item) => {
//         item.addEventListener('click', function () {
//             let isDelete = confirm('xac nhan xoa');
//             if (isDelete) {
//                 let id = item.getAttribute('data-id'); // lay id
//                 let productIndex = products.findIndex((item) => item.id == id); // lay vi tri
//                 console.log(products);
//                 products.splice(productIndex, 1); // xoa 1 phan tu trong mang bat dau tu vi tri
//                 console.log(products);
//                 // document.querySelector(`#row${id}`).remove();
//                 app.renderProduct(products); // hien thi lai danh sach
//             }
//         });
//     });
// }


// load html => load js => thuc thi

class Product {
    constructor(id, name, price, detail, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.detail = detail;
        this.color = color;
    }
}
class App {
    renderProduct(products) {
        let productTableTbody = document.querySelector('#tbody');
        let productTableBodyHtml = '';
        for (let product of products) {
            productTableBodyHtml += `<tr id="row${product.id}">
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.detail}</td>
            <td>${product.color}</td>
            
            <td>
              <button class="btn btn-edit" data-id="${product.id}">Edit</button>
              <button class="btn btn-delete" data-id="${product.id}" >Delete</button>
            </td>
          </tr>`;
        }
        productTableTbody.innerHTML = productTableBodyHtml;
        initsDeleteHandle();
    }
}
let products = [];
let app = new App();
let productCreate = new Product(1, 'Quả chuối', '2000 đồng', 'glucozo', 'Yellow');
products.push(productCreate);
app.renderProduct(products);
//lấy thông tin
let submitBtn = document.querySelector('#submit');
let editBtns = document.querySelectorAll('.btn-edit');

let nameEl = document.querySelector('#name');
let priceEl = document.querySelector('#price');
let detailEl = document.querySelector('#detail');
let colorEl = document.querySelector('#color');

let editId = '';

class ValidateInput {
    constructor(formData) {
        this.formData = formData;
        this.errors = [];
    }

    require(mess = 'khong duoc de trong') {
        for (const [key, value] of this.formData.entries()) {
            console.log(key, value);
            if (!Boolean(value)) {
                // true
                let errorMess = `${key} ${mess}`;
                this.errors.push([key, errorMess]);
            }
        }
        return this.errors;
    }
}

// [['name',['khong de trong', 'gia tri lon hon 10']] ,['name','khong de trong']  ]

submitBtn.addEventListener('click', function () {
    if (editId) {
        let productEditIndex = products.findIndex((item) => item.id == editId);
        let productEdit = products[productEditIndex];
        productEdit.name = nameEl.value;
        productEdit.price = priceEl.value;
        productEdit.detail = detailEl.value;
        productEdit.color = colorEl.value;
        app.renderProduct(products);
        resetForm();
        // clear
    } else {
        let id = parseInt(Math.random() * 100);
    
        let formData = new FormData(document.querySelector('#form-data'));
    
        let errors = new ValidateInput(formData).require('đâu!!!!!');
        resetError();
        if (errors.length > 0) {
          for (let [key, mess] of errors) {
            document.querySelector(`.${key}-error`).innerHTML  = mess;
          }
          return;
        }
    
        let productCreate = new Product(id, nameEl.value, priceEl.value, detailEl.value, colorEl.value)
        products.push(productCreate);
        app.renderProduct(products);
        resetForm();
      }
});
function resetError() {
    document.querySelectorAll('.error').forEach((item) => (item.innerHTML = ''));
}
function resetForm() {
    nameEl.value = '';
    priceEl.value = '';
    detailEl.value = '';
    colorEl.value = '';
    editId = '';
}

function initseditHandle(){
    let editBtns = document.querySelectorAll('.btn-edit');
    editBtns.forEach((item) => {
      item.addEventListener('click', function () {
        editId = this.getAttribute('data-id');
        let productEditIndex = products.findIndex((item) => item.id == editId);
        let productEdit = products[productEditIndex];
        nameEl.value = productEdit.name;
        priceEl.value = productEdit.price;
        detailEl.value = productEdit.detail;
        colorEl.value = productEdit.color;
      });
    });
  }


function initsDeleteHandle() {
    let deleteBtns = document.querySelectorAll('.btn-delete');
    deleteBtns.forEach((item) => {
        item.addEventListener('click', function () {
            let isDelete = confirm('xac nhan xoa');
            if (isDelete) {
                let id = item.getAttribute('data-id'); // lay id
                let productIndex = products.findIndex((item) => item.id == id); // lay vi tri
                console.log(products);
                products.splice(productIndex, 1); // xoa 1 phan tu trong mang bat dau tu vi tri
                console.log(products);
                // document.querySelector(`#row${id}`).remove();
                app.renderProduct(products); 
            }
        });
    });
}


