const componentFooter = document.getElementById('component-footer'); // rating

const footerElement = document.createElement('div');
    footerElement.innerHTML = /*html*/ `
        <div class="container">
			<div class="footer-inner">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-12 footer-col d-none d-lg-block d-xl-block">
												<div class="footer-col-inner">
								<ul class="footer-menu">
																		<li><a href="https://toshiko.vn/chinh-sach-van-chuyen" rel="nofollow">Chính sách vận chuyển</a></li>
																		<li><a href="https://toshiko.vn/chinh-sach-bao-hanh" rel="nofollow">Chính sách bảo hành</a></li>
																		<li><a href="https://toshiko.vn/chinh-sach-doi-tra" rel="nofollow">Chính sách đổi trả</a></li>
																		<li><a href="https://toshiko.vn/chinh-sach-bao-mat" rel="nofollow">Chính sách bảo mật</a></li>
																</ul>
								<div class="viewmore-menu">
									<p class="viewmore-menu-title">Xem thêm <i class="fa-solid fa-sort-down"></i></p>
									<ul class="footer-menu">
																				<li><a href="https://toshiko.vn/huong-dan-dat-hang" rel="nofollow">Hướng dẫn đặt hàng</a></li>
																				<li><a href="https://toshiko.vn/huong-dan-thanh-toan" rel="nofollow">Hướng dẫn thanh toán</a></li>
																				<li><a href="https://toshiko.vn/huong-dan-tra-gop" rel="nofollow">Hướng dẫn trả góp</a></li>
																		</ul>
								</div>
							</div>
										</div>
					<div class="col-lg-3 col-md-6 col-12 footer-col ">
												<div class="footer-col-inner">
								<ul class="footer-menu">
																		<li><a href="https://toshiko.vn/gioi-thieu-toshiko-viet-nam" rel="follow">Giới thiệu</a></li>
																		<li><a href="https://toshiko.vn/tin-tuc" rel="follow">Tin tức</a></li>
																		<li><a href="https://toshiko.vn/cua-hang" rel="nofollow">Tìm Showroom (56 Shop)</a></li>
																</ul>
							</div>
										</div>
					<div class="col-lg-3 col-md-6 col-12 footer-col">
						<div class="footer-col-inner">
							<div class="footer-title">Tổng đài hỗ trợ</div>
							<ul class="footer-menu">
																								<li>Gọi mua:<a class="ft-call" href="tel:19001891">
											19001891</a>
										<span class="footer-time">(08:00 - 22:00)</span>
									</li>
									<li>Bảo hành:<a class="ft-call" href="tel:1800558879">
											1800558879</a>
										<span class="footer-time">(08:00 - 22:00)</span>
									</li>
									<li>Khiếu nại:<a class="ft-call" href="tel:0818888866">
											0818888866</a>
										<span class="footer-time">(08:00 - 22:00)</span>
									</li>
														</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-12 footer-col">
						<div class="viewmore-menu viewmore-menu-mobile d-lg-none">
														<p class="viewmore-menu-title">Các thông tin khác <i class="fa-solid fa-sort-down"></i></p>
								<ul class="footer-menu">
                                                                <li><a href="https://toshiko.vn/chinh-sach-van-chuyen">Chính sách vận chuyển</a></li>
                                                                <li><a href="https://toshiko.vn/chinh-sach-bao-hanh">Chính sách bảo hành</a></li>
                                                                <li><a href="https://toshiko.vn/chinh-sach-doi-tra">Chính sách đổi trả</a></li>
                                                                <li><a href="https://toshiko.vn/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
                                                                <li><a href="https://toshiko.vn/huong-dan-dat-hang">Hướng dẫn đặt hàng</a></li>
                                                                <li><a href="https://toshiko.vn/huong-dan-thanh-toan">Hướng dẫn thanh toán</a></li>
                                                                <li><a href="https://toshiko.vn/huong-dan-tra-gop">Hướng dẫn trả góp</a></li>
                                                        </ul>
												</div>
						<div class="footer-col-inner">
							<ul class="footer-social">
																								<li><a rel="nofollow" target="_blank" href="https://www.facebook.com/vn.toshiko/"><img loading="lazy" src="https://toshiko.vn/public/assets/images/facebook-icon.png" alt="facebook icon"></a></li>
									<li><a rel="nofollow" target="_blank" href="https://www.youtube.com/c/ToshikoVi%E1%BB%87tNam"><img loading="lazy" src="https://toshiko.vn/public/assets/images/youtube-icon.png" alt="youyubr icon"></a>
									</li>
									<li><a rel="nofollow" target="_blank" href="#"><img loading="lazy" src="https://toshiko.vn/public/assets/images/zalo-icon.png" alt="zalo icon"></a>
									</li>
														</ul>
						</div>
						<div class="footer-certification">
														<a rel="nofollow" target="_blank" href="http://online.gov.vn/Home/WebDetails/73194?AspxAutoDetectCookieSupport=1">
									<img loading="lazy" src="https://toshiko.vn/storage/images/%E1%BA%A2nh%20policy/bo-cong-thuong.png" alt="bct img">
								</a>
																				<a rel="nofollow" target="_blank" href="#">
									<img loading="lazy" src="https://toshiko.vn/storage/images/%E1%BA%A2nh%20policy/dmca_protected_sml_120m.png" alt="dmca img">
								</a>
												</div>
					</div>
				</div>
			</div>
		</div>
`;
componentFooter.appendChild(footerElement);
