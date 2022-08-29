$( document ).ready(function() {
    $('.accordion .card-header').click(function (){
    
      $('.accordion .card-header').not(this).removeClass('triggered')
      $(this).toggleClass('triggered')
      
      $('.card-header.triggered').next('.card-body').slideDown('slow')
      $('.card-header:not(.triggered)').next('.card-body').slideUp('slow')
    });
  
    if($('main').find('.rnk-comp-seo-topo').length == 1){
      $('body').addClass('bg-category');
    }
  
    function openFiltersMenu() {
      $(".mz-search__trigger").on("click", function() {
          $("body").addClass("qd-sn-on"),
          $(".search-single-navigator,.search-multiple-navigator").addClass("qd-sn-on")
      }),
      $(".mz-components-overlay, .search-single-navigator,.search-multiple-navigator").on("click", function() {
          $("body").removeClass("qd-sn-on"),
          $(".search-single-navigator,.search-multiple-navigator").removeClass("qd-sn-on")
      })
    }
    openFiltersMenu();
  
    function hideExtendedMenu() {
      $(".mz-search__navigation ul").each(function() {
          var e, t, o, n, i, a;
          e = $(this),
          (t = e.find(">li")).length <= 10 || (a = t.filter(":gt(9)").stop(!0, !0).hide(),
          o = $('<a class="qd-viewMoreMenu">Mostrar mais</a>'),
          e.after(o),
          n = $('<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">Mostrar mais filtros</a></li>'),
          e.append(n),
          i = function() {
              a.stop(!0, !0).slideToggle(0, function() {
                  t.filter(":visible").length > 10 ? (o.addClass("minus").text("Mostrar menos filtros"),
                  n.addClass("minus").find("a").text("Mostrar menos filtros")) : (o.removeClass("minus").text("Mostrar mais filtros"),
                  n.removeClass("minus").find("a").text("Mostrar mais filtros"))
              })
          }
          ,
          n.bind("click.qd_viewMore", i),
          o.bind("click.qd_viewMore", i))
      });
      var e = $(".mz-search__navigation, .search-multiple-navigator");
      e.find("h3, h4, h5").click(function(t) {
          var o = $(this);
          ($(t.target).is(e.find("h3")) || $(t.target).is(e.find("h4")) || $(t.target).is(e.find("h5"))) && (o.find("+ ul").stop(!0, !0).slideToggle(0, function() {
              o.toggleClass("qd-seach-active-menu")
          }),
          o.find("+ div").stop(!0, !0).slideToggle(0, function() {
              o.toggleClass("qd-seach-active-menu")
          }))
      })
    }
    hideExtendedMenu();
  
    function addOrderBySelect() {
      $(".mz-search__submenu a").click(function(e) {
          e.preventDefault();
          var t = $(this).attr("data-order-parameter");
          location.search = (location.search.replace(/O=[^&]+/g, "") + "&" + t).replace("?&", "?").replace(/&{2,}/g, "&")
      }),
      (location.search.match(/O=[^&]+/g, "") || [""]).pop().length
    };
    addOrderBySelect();
  
    function scrollSuaveAncoraIOS() {
      $('.anchor-list a').click(function (e) {
        e.preventDefault();
  
        if ($(this).attr('href')) {
          let id = $(this).attr('href');
          console.log('id = ', id);
          let container = $(id).offset().top - 110;
          console.log('id = ', container);
          $('html, body').animate(
            {
              scrollTop: container,
            },
            500,
          );
        }
      });
    };
    scrollSuaveAncoraIOS();    
// >>>> Abrir métodos de pagamentos
    function openPaymentMethod() {
        const buttonPaymentMethod = document.querySelector('.mz-product__payment-method--link');
        if(buttonPaymentMethod) {
            buttonPaymentMethod.addEventListener('click', function(ev){
                ev.preventDefault();
                document.querySelector('.mz-product__payment-method').classList.add('is--active');
                document.querySelector('.mz-product__payment-method--content_credit-card').classList.add('is--active');
                document.querySelector('.mz-product__payment-method--options_item-credit-card').classList.add('active');
                document.querySelector('body').classList.add('has--no-scroll');
            });
        };
    };
    openPaymentMethod()

    function closePaymentMethod() {
        const buttonClosePaymentMethod = document.querySelector('.mz-product__payment-method--container_close');
        if(buttonClosePaymentMethod) {
            buttonClosePaymentMethod.addEventListener('click', function(ev){
                ev.preventDefault();
                document.querySelector('.mz-product__payment-method').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--options_item-pix').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-picpay').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-ame').classList.remove('active');
                document.querySelector('.mz-product__payment-method--content_pix').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_picpay').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_ame').classList.remove('is--active');
                document.querySelector('body').classList.remove('has--no-scroll');
            });
        };
    };
    closePaymentMethod()

    function openPaymentMethodItemItem() {
        const buttonPaymentMethodItemOne = document.querySelector('.mz-product__payment-method--options_item-credit-card');
        const buttonPaymentMethodItemTwo = document.querySelector('.mz-product__payment-method--options_item-pix');
        const buttonPaymentMethodItemTree = document.querySelector('.mz-product__payment-method--options_item-picpay');
        const buttonPaymentMethodItemFuor = document.querySelector('.mz-product__payment-method--options_item-ame');
        if(buttonPaymentMethodItemOne) {
            // MÉTODO DE PAGAMENTO >> CARTÃO DE CRÉDITO
            buttonPaymentMethodItemOne.addEventListener('click', function(ev){
                ev.preventDefault();
                document.querySelector('.mz-product__payment-method--content_credit-card').classList.add('is--active');
                document.querySelector('.mz-product__payment-method--content_pix').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_picpay').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_ame').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--options_item-credit-card').classList.add('active');
                document.querySelector('.mz-product__payment-method--options_item-pix').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-picpay').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-ame').classList.remove('active');
            });
            // MÉTODO DE PAGAMENTO >> PIX
            buttonPaymentMethodItemTwo.addEventListener('click', function(ev){
                ev.preventDefault();
                document.querySelector('.mz-product__payment-method--content_credit-card').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_pix').classList.add('is--active');
                document.querySelector('.mz-product__payment-method--content_picpay').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_ame').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--options_item-credit-card').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-pix').classList.add('active');
                document.querySelector('.mz-product__payment-method--options_item-picpay').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-ame').classList.remove('active');
            });
            // MÉTODO DE PAGAMENTO >> PICPAY
            buttonPaymentMethodItemTree.addEventListener('click', function(ev){
                ev.preventDefault();
                document.querySelector('.mz-product__payment-method--content_credit-card').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_pix').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_picpay').classList.add('is--active');
                document.querySelector('.mz-product__payment-method--content_ame').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--options_item-credit-card').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-pix').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-picpay').classList.add('active');
                document.querySelector('.mz-product__payment-method--options_item-ame').classList.remove('active');
            });
            // MÉTODO DE PAGAMENTO >> AME
            buttonPaymentMethodItemFuor.addEventListener('click', function(ev){
                ev.preventDefault();
                document.querySelector('.mz-product__payment-method--content_credit-card').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_pix').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_picpay').classList.remove('is--active');
                document.querySelector('.mz-product__payment-method--content_ame').classList.add('is--active');
                document.querySelector('.mz-product__payment-method--options_item-credit-card').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-pix').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-picpay').classList.remove('active');
                document.querySelector('.mz-product__payment-method--options_item-ame').classList.add('active');
            });
        };
    }
    openPaymentMethodItemItem()
});
const buyTogetherPrice  = async () => {
const $component = $('#divCompreJunto');
const skuProduct = window.skuJson.skus[0].sku;
const priceProduct = window.skuJson.skus[0].bestPriceFormated;
const priceBuyTogether = await fetch(`/api/catalog_system/pub/products/crossselling/showtogether/${skuProduct}`).then(res => res.json()).then(data => data[0].items[0].sellers[0].commertialOffer.Price);
let priceBuyTogetherFormated =  `${priceBuyTogether.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`;
priceBuyTogetherFormated = priceBuyTogetherFormated
$component.find('.itemA').append(`<p class="price-buy-together">${priceProduct}</p>`);
$component.find('.itemB').append(`<p class="price-buy-together">${priceBuyTogetherFormated}</p>`);
};
buyTogetherPrice();

// $(document).ready(function() {
//     openPaymentMethod();
//     closePaymentMethod();
//     openPaymentMethodItemItem()
// })


//   <script src="/arquivos/rnk-js-geral.js?v=2022-02-07-001"></script>
