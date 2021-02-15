

const inner_listgoods = document.querySelector('.inner_listgoods'),  
	li = inner_listgoods.querySelectorAll("li"),   
	cartput_button = inner_listgoods.querySelectorAll(".btn_cart2"),
	cart_type1 = document.querySelector(".cart_type1"),
	bg_loading = document.querySelector(".bg_loading"),
	cartPut = document.querySelector("#cartPut"),
	cartPut_name = cartPut.querySelector(".name"),
	cartPut_price = cartPut.querySelector(".dc_price"),
	cartPut_sum_price = cartPut.querySelector(".num"),
	cancel = cartPut.querySelector(".txt_type");


	
var product_name = [];  //상품명 리스트
var product_price = []; //상품 가격 리스트
var product_desc = [];  //상품 한줄소개 리스트

for (i=0; i<li.length; i++){           // 리스트 값에 저장해주는 반복문
	product_name[i] = li[i].querySelector(".name"); 
	product_price[i] = li[i].querySelector(".price");
	product_desc[i] = li[i].querySelector(".desc");
}


for (var i = 0; i < li.length; i++) {    // 클릭했을 때 그 인덱스 맞는 값을 넣어주는 반복문
    (function(idx) {
        cartput_button[idx].onclick = function() {
            cart_type1.classList.add('show');
			bg_loading.classList.add ('show');
			cartPut_name.innerHTML = product_name[idx].innerHTML;
			cartPut_price.innerHTML = product_price[idx].innerHTML;
			cartPut_sum_price.innerHTML = product_price[idx].innerHTML;

        }

    })(i);
}

cancel.addEventListener('click', function(){   // 취소버튼 클릭시 사라지게 하는 반복문
	cart_type1.classList.remove('show');
	bg_loading.classList.remove('show');

});


