import React from "react";
import "./CartPageMobile.css";

export const CartPageMobile: React.FC = () => {
  return (
    <div className="cart-mobile">
      {/* Header */}
      <header className="cart-mobile-header">
        <button className="cart-mobile-menu" aria-label="選單">
          <span className="icon-hamburger" />
        </button>
        <div className="cart-mobile-logo">
          <div className="cart-mobile-logo-icon" />
          <div className="cart-mobile-logo-text">
            <span className="logo-cn">殺羊人集團</span>
            <span className="logo-en">Shephenlloch</span>
          </div>
        </div>
        <div className="cart-mobile-header-right">
          <span className="cart-mobile-logout">登出</span>
          <span className="cart-mobile-username">{`{user_name}`}</span>
          <button className="cart-mobile-icon-btn" aria-label="會員">
            <span className="icon-user" />
          </button>
          <button className="cart-mobile-icon-btn cart-mobile-cart-wrap" aria-label="購物車">
            <span className="icon-cart" />
            <span className="cart-mobile-badge">99</span>
          </button>
        </div>
      </header>

      {/* 經銷商 */}
      <section className="cart-mobile-dealer">
        <span className="cart-mobile-dealer-label">經銷商</span>
        <div className="cart-mobile-dealer-select">
          <span className="cart-mobile-dealer-placeholder">請選擇</span>
          <span className="icon-arrow-down" />
        </div>
      </section>

      {/* 品牌橫向選單 */}
      <section className="cart-mobile-brands">
        <div className="cart-mobile-brand-card cart-mobile-brand-card--active">
          <div className="cart-mobile-brand-logo cart-mobile-brand-logo--wm" />
          <div className="cart-mobile-brand-info">
            <span className="cart-mobile-brand-name">汪喵星球</span>
            <span className="cart-mobile-brand-en">DOG CAT STAR</span>
          </div>
        </div>
        <div className="cart-mobile-brand-card">
          <div className="cart-mobile-brand-logo cart-mobile-brand-logo--monster" />
          <div className="cart-mobile-brand-info">
            <span className="cart-mobile-brand-name">怪獸部落</span>
            <span className="cart-mobile-brand-en">L&MON</span>
          </div>
          <span className="icon-arrow-right" />
        </div>
      </section>

      {/* 分類篩選 */}
      <section className="cart-mobile-categories">
        <button type="button" className="cart-mobile-cat cart-mobile-cat--active">全部</button>
        <button type="button" className="cart-mobile-cat">狗狗主食</button>
        <button type="button" className="cart-mobile-cat">貓咪主食</button>
        <button type="button" className="cart-mobile-cat">犬貓零食</button>
        <button type="button" className="cart-mobile-cat">生活</button>
      </section>

      {/* 品牌優惠 */}
      <section className="cart-mobile-offer-header">
        <h2 className="cart-mobile-offer-title">品牌優惠</h2>
        <div className="cart-mobile-offer-badge">
          <span className="cart-mobile-offer-s">S</span>
          <span className="cart-mobile-offer-yellow">上萬好康等你發現!</span>
        </div>
        <p className="cart-mobile-offer-desc">看看哪些商品能用券?</p>
        <button type="button" className="cart-mobile-offer-select-all">選取全部</button>
      </section>

      {/* 優惠券卡片 */}
      <section className="cart-mobile-coupon-card">
        <div className="cart-mobile-coupon-left">
          <span className="cart-mobile-coupon-discount">9.5折</span>
          <span className="cart-mobile-coupon-type">滿件折</span>
        </div>
        <div className="cart-mobile-coupon-right">
          <span className="cart-mobile-coupon-ending">即將結束</span>
          <p className="cart-mobile-coupon-desc">【零食小包優惠】小包 滿10包送2包!</p>
          <span className="cart-mobile-coupon-expiry">使用期限: 2024-11-12 12:00</span>
          <span className="icon-arrow-right cart-mobile-coupon-arrow" />
        </div>
      </section>
      <button type="button" className="cart-mobile-more-coupon">更多優惠券詳情 &gt;</button>

      {/* 商品卡片 */}
      <article className="cart-mobile-product">
        <div className="cart-mobile-product-image" />
        <div className="cart-mobile-product-body">
          <h3 className="cart-mobile-product-name">一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二</h3>
          <ul className="cart-mobile-product-promos">
            <li className="cart-mobile-promo cart-mobile-promo--met">
              <span className="icon-check-green" /> 已符合 全館滿1萬折1千元
            </li>
            <li className="cart-mobile-promo cart-mobile-promo--not">
              <span className="icon-circle-dash" /> 未符合 全館滿1萬折1千元
            </li>
            <li className="cart-mobile-promo cart-mobile-promo--near">
              <span className="icon-warn" /> 再湊 NT$753 全館滿1萬折1千元
            </li>
          </ul>
          <div className="cart-mobile-product-qty">
            <button type="button" className="cart-mobile-qty-btn">−</button>
            <span className="cart-mobile-qty-value">1</span>
            <button type="button" className="cart-mobile-qty-btn">+</button>
          </div>
        </div>
      </article>

      {/* 底部結帳條 */}
      <footer className="cart-mobile-footer">
        <div className="cart-mobile-footer-left">
          <button type="button" className="cart-mobile-detail-btn">明細へ <span className="icon-arrow-up" /></button>
          <span className="cart-mobile-saved">已省下 $&#123;Var&#125;</span>
          <p className="cart-mobile-total">
            訂購總額 <strong className="cart-mobile-total-amount">$1,023</strong> (含運$&#123;Var&#125;)
          </p>
        </div>
        <button type="button" className="cart-mobile-checkout-btn">
          <span className="icon-cart-white" /> 前往結帳
        </button>
      </footer>
    </div>
  );
};
