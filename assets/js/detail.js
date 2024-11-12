import { getById } from './services.js';
import { getParams, renderBreacumb } from './utils.js';

const detailEle = document.getElementById('detail-product');
console.log('detailEle: ', detailEle);

const breadcrumEle = document.getElementById('breadcrum');

const id = getParams('id');
const product = await getById('products', id);
// console.log(id);
console.log(product);

renderBreacumb(breadcrumEle ,product);

function renderDetail(target, data) {
	const productDetail = document.createElement('div');
	productDetail.classList.add('container', 'pt-4');
	productDetail.innerHTML = /*html*/ `

        <sestion class="detail-heading-wrap">
            <div class="container">
            <div class="detail-heading-inner">
                <h1 class="prd-heading">Ghế massage Toshiko T9</h1>

                <div class="prd-heading-rate">
                <a href="#detailRate">
                    <div class="ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    </div>
                    <span class="prd-heading-rate-label">36 đánh giá</span>
                </a>


                </div>
                <!-- <a href="#" class="heading-compare compareLink" data-value="4"><i class="fa-light fa-circle-plus"></i>
            So sánh</a> -->
            </div>
            </div>
        </sestion>

        <section class="detail-wrap">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 col-12 	detail-gallery-col">
                       <img src="${data?.thumbnail}" alt="${data.title}" />
                       <!-- slider -->
                    </div>
                    <div class="col-lg-5 col-md-10 col-12 detail-action-col">
                    <div class="detail-info-inner">
                        <div class="detail-info-top">
                            <div class="detail-price-flashSale">
                                <input type="hidden" id="prdPrice" value="19990000">
                                <h2 class="detail-price-present">
                                    <span class="dpp">${(data?.price).toLocaleString()} $</span>
                                    <span class="option-price"></span>
                                </h2>
                                <del class="detail-old-price">33,500,000đ</del>
                                <p class="detail-sale-percent">(-41%)</p>
                            </div>

                            <div id="countdown-detail">
                                <input id="lastDay" type="hidden" data-date="11-11-2024">
                                <p>Kết thúc sau:</p>
                                <ul>
                                <li><span id="days">3</span></li>
                                <span>:</span>
                                <li><span id="hours">7</span></li>
                                <span>:</span>
                                <li><span id="minutes">23</span></li>
                                <span>:</span>
                                <li><span id="seconds">13</span></li>
                                </ul>
                            </div>

                        </div>

                        <!--  -->
                        <div class="detail-box">
                        <div class="detail-attr stock-infor">
                            <p>Còn ${data.stock} sản phẩm</p>
                            <div>
                                <span>Chọn số lượng: </span>
                                ${" "}
                                <input type="number" min=1 max=${
									data.stock
								} value="1"/>
                            </div>
                        </div>

                        <div class="detail-sale">
                            <p class="sale-title">Khuyến mãi</p>
                            <ul>
                            <li><span>1</span>Quà tặng 1</li>
                            <li><span>2</span>Quà tặng 2</li>
                            <li><span>3</span>Trả góp lãi suất 0% (nhắn tin để được tư vấn)</li>
                            <li><span>4</span>Lỗi 1 đổi 1 trong vòng 15 ngày đầu</li>
                            </ul>
                        </div>

                        <input id="productId" type="hidden" name="productId" value="4">
                        <input type="hidden" id="dataOption" value="">
                        <div class="detail-action">
                            <button class="buynow addtocart" fdprocessedid="23jabq">Mua ngay</button>
                            <button class="installment-button" fdprocessedid="1zzbgc">Trả góp lãi suất
                            0%</button>
                        </div>
                        <div class="advisory-form" id="prd-advisory-form">
                            <div class="advisory-form-inner">
                            <div class="af-top">
                                <h3><i class="fa-solid fa-headphones-simple"></i> Tư vấn miễn phí</h3>
                            </div>
                            <div class="af-bottom">
                                <input type="text" class="form-control" name="phone" id="phone"
                                placeholder="Số điện thoại của bạn" fdprocessedid="gkun9e">
                                <input type="hidden" name="name" id="name" value="unknown">
                                <input type="hidden" name="email" id="email" value="unknown">
                                <button fdprocessedid="ayhytf">Gửi</button>
                            </div>
                            </div>
                        </div>
                        <!--<p class="call-to-buy">Gọi đặt mua <a-->
                        <!--        href="tel:19001891">-->
                        <!--        19001891</a>-->
                        <!--</p>-->


                        </div>
                        <!--  -->
                    </div>
                </div>
            </div>

                <!--  -->
                <div class="row justify-content-center  my-4 w-100">
                    <div class="detail-specifications detail-specifications-side">
                    <h2>Thông tin chi tiết ${data?.title}</h2>
                    <ul>
                        <li>
                            ${data?.description}
                        </li>
                    </ul>

                    <button class="viewmore-specifications" data-bs-toggle="modal" data-bs-target="#detailModal"
                        data-tab="nav-specifications-tab" fdprocessedid="92fnul">Xem chi tiết thông số
                        <!-- <i class="fa-solid fa-play"></i> -->
                        >
                    </button>
                    </div>
                </div>
            </div>
        </section>

  `;
	target.appendChild(productDetail);
}

renderDetail(detailEle, product);

// {
	/* <div class="col col-md-6">
<img src="${data.thumbnail}" alt="${data.title}" />
</div>
<div class="col col-md-6">
<h2>${data.title}</h2>
<p>Giá: ${data.price}</p>
<p>Còn ${data.stock} sản phẩm</p>
<div>
  <span>Chọn số lượng: </span> <input type="number" min=1 max=${data.stock} value="1"/>
</div>
<p>Danh mục: ${data.category}</p>
<p>Chi tiết: ${data.description}</p>
<button class="btn btn-danger">Mua ngay</button>
</div> */
// }
