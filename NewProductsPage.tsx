import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";
import "./NewProductsPage.css";

const CATEGORIES = [
  "全選",
  "狗狗主食",
  "貓咪主食",
  "犬貓零食",
  "生活用品",
  "貓砂系列",
];

const BRANDS = [
  { id: "wm", name: "汪喵星球", icon: "brand-logo--dcs" },
  { id: "gb", name: "怪獸部落", icon: "brand-logo--gb" },
  { id: "hm", name: "HeroMama", icon: "brand-logo--hm" },
];

const CRITERIA_ROWS = [
  { type: "success" as const, label: "已符合", text: "全館滿 1 萬折 １千元" },
  { type: "warn" as const, label: "未符合", text: "全館滿 1 萬折 １千元" },
  { type: "extra" as const, label: "再湊 NT$753", text: "全館滿 1 萬折 １千元" },
];

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二",
    weights: ["80g", "500g"],
    skus: [
      { name: "安心雞", price: "10,000", remaining: 5, qty: 0 },
      { name: "櫻桃鴨", price: "10,000", remaining: null, qty: 0 },
      { name: "草飼牛", price: "10,000", remaining: 5, qty: 0 },
    ],
  },
  {
    id: "2",
    name: "二二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二",
    weights: ["80g", "500g"],
    skus: [
      { name: "安心雞", price: "10,000", remaining: 3, qty: 0 },
      { name: "櫻桃鴨", price: "10,000", remaining: 2, qty: 0 },
      { name: "草飼牛", price: "10,000", remaining: null, qty: 0 },
    ],
  },
  {
    id: "3",
    name: "三二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二",
    weights: ["80g", "500g"],
    skus: [
      { name: "安心雞", price: "10,000", remaining: 5, qty: 0 },
      { name: "櫻桃鴨", price: "10,000", remaining: 5, qty: 0 },
      { name: "草飼牛", price: "10,000", remaining: 5, qty: 0 },
    ],
  },
];

export const NewProductsPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("全選");

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="new-products-page">
      {/* Header - 與 CartPage 一致，新品專區為 active */}
      <header className="cart-header">
        <div className="cart-header-left">
          <button
            type="button"
            className="cart-header-hamburger"
            aria-label="開啟選單"
            onClick={openMobileMenu}
          >
            <span className="cart-header-hamburger-bar" />
            <span className="cart-header-hamburger-bar" />
            <span className="cart-header-hamburger-bar" />
          </button>

          <div className="cart-logo-block">
            <div className="cart-logo" />
            <div className="cart-header-title">牧羊人經銷平台｜台灣站</div>
          </div>

          <nav className="cart-nav" aria-label="主導覽">
            <Link to="/new-products" className="cart-nav-item cart-nav-item--active">
              新品專區
            </Link>
            <Link to="/" className="cart-nav-item">
              寵食品牌
            </Link>
            <button className="cart-nav-item cart-nav-item--with-arrow">
              人食品牌
              <span className="icon-arrow" />
            </button>
          </nav>
        </div>

        <div className="cart-header-right">
          <div className="cart-user-info">
            <button className="link-primary">登出</button>
            <span className="user-name">{`{user_name}`}</span>
          </div>
          <div className="cart-header-icons">
            <div className="icon-circle">
              <span className="icon-user" />
            </div>
            <div className="icon-circle cart-icon-with-badge">
              <span className="icon-cart" />
              <div className="cart-badge">
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile 選單 */}
      <div
        className={`cart-mobile-menu-overlay ${mobileMenuOpen ? "cart-mobile-menu-overlay--open" : ""}`}
        aria-hidden={!mobileMenuOpen}
        onClick={closeMobileMenu}
      />
      <aside
        className={`cart-mobile-menu-drawer ${mobileMenuOpen ? "cart-mobile-menu-drawer--open" : ""}`}
        aria-label="導覽選單"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="cart-mobile-menu-header">
          <span className="cart-mobile-menu-title">選單</span>
          <button
            type="button"
            className="cart-mobile-menu-close"
            aria-label="關閉選單"
            onClick={closeMobileMenu}
          >
            <span className="icon-close" />
          </button>
        </div>
        <nav className="cart-mobile-menu-nav">
          <div className="cart-mobile-menu-section">
            <div className="cart-mobile-menu-section-title">商品分類</div>
            <Link to="/new-products" className="cart-mobile-menu-item cart-mobile-menu-item--active" onClick={closeMobileMenu}>
              新品專區
            </Link>
            <Link to="/" className="cart-mobile-menu-item" onClick={closeMobileMenu}>
              寵食品牌
            </Link>
            <button type="button" className="cart-mobile-menu-item cart-mobile-menu-item--with-children">
              人食品牌
              <span className="icon-arrow-right" />
            </button>
          </div>
          <div className="cart-mobile-menu-section">
            <div className="cart-mobile-menu-section-title">帳戶</div>
            <button type="button" className="cart-mobile-menu-item">
              登出
            </button>
          </div>
        </nav>
      </aside>

      {/* 主內容 */}
      <main className="new-products-main">
        {/* 紅色促銷 Banner */}
        <section className="new-products-banner">
          <div className="new-products-banner-inner">
            <span className="new-products-banner-icon">+</span>
            <div className="new-products-banner-text">
              <h2 className="new-products-banner-title">新品立即購</h2>
              <p className="new-products-banner-sub">全民瘋搶+1。全新商品輕鬆Get</p>
            </div>
            <div className="new-products-banner-discount" aria-hidden />
          </div>
        </section>

        {/* 分類 Tab */}
        <div className="new-products-tabs-wrap">
          <div className="new-products-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`new-products-tab ${activeCategory === cat ? "new-products-tab--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 商品區塊：依品牌分 section */}
        <div className="new-products-content">
          {BRANDS.map((brand) => (
            <section key={brand.id} className="new-products-section">
              <header className="new-products-section-header">
                <div className="new-products-section-brand">
                  <div className={`brand-logo-small ${brand.icon}`} />
                  <span className="new-products-section-name">{brand.name}</span>
                </div>
                <span className="new-products-section-views">超過 1 萬人+ 瀏覽</span>
                <button type="button" className="new-products-section-expand">
                  展開
                  <span className="new-products-section-expand-arrow" aria-hidden />
                </button>
              </header>

              <div className="new-products-grid">
                {MOCK_PRODUCTS.map((product) => (
                  <article key={product.id} className="new-products-card">
                    <div className="new-products-card-parent">
                      <div className="new-products-card-image" />
                      <h3 className="new-products-card-title">{product.name}</h3>
                    </div>
                    <div className="new-products-card-criteria">
                      {CRITERIA_ROWS.map((row, i) => (
                        <div key={i} className={`new-products-criteria-row new-products-criteria-row--${row.type}`}>
                          <span className="new-products-criteria-icon" aria-hidden />
                          <span className="new-products-criteria-label">{row.label}</span>
                          <span className="new-products-criteria-text">{row.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="new-products-card-weights">
                      {product.weights.map((w) => (
                        <button
                          key={w}
                          type="button"
                          className={`new-products-weight-chip ${w === "80g" ? "new-products-weight-chip--active" : ""}`}
                        >
                          {w}
                        </button>
                      ))}
                    </div>
                    <div className="new-products-card-variants">
                      {product.skus.map((sku, i) => (
                        <div key={i} className="new-products-variant-row">
                          <span className="new-products-variant-name">{sku.name}</span>
                          <div className="new-products-variant-right">
                            <div className="new-products-variant-price-block">
                              <span className="new-products-variant-price">
                                <span className="new-products-variant-currency">$</span>
                                <span className="new-products-variant-amount">{sku.price}</span>
                              </span>
                              {sku.remaining != null ? (
                                <span className="new-products-variant-caption">剩餘數量：{sku.remaining}</span>
                              ) : (
                                <span className="new-products-variant-caption">已售完</span>
                              )}
                            </div>
                            <div className={`new-products-qty-input ${sku.remaining == null ? "new-products-qty-input--disabled" : ""}`}>
                              <button type="button" className="new-products-qty-btn" disabled={sku.remaining == null} aria-label="減少">−</button>
                              <span className="new-products-qty-value">{sku.qty}</span>
                              <button type="button" className="new-products-qty-btn" disabled={sku.remaining == null} aria-label="增加">+</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* 優惠券條（與寵食品牌頁相同） */}
      <div className="footer-coupon-bar">
        <div className="footer-coupon-inner">
          <div className="footer-coupon-left">
            <span className="footer-coupon-icon" aria-hidden />
            <span className="footer-coupon-title">優惠折扣</span>
          </div>
          <button type="button" className="footer-coupon-link">
            查看或使用優惠
            <span className="footer-coupon-arrow" aria-hidden />
          </button>
        </div>
      </div>

      {/* 最底部結帳條（與寵食品牌頁相同） */}
      <footer className="cart-footer">
        <div className="cart-footer-inner">
          <div className="cart-footer-left">
            <div className="cart-footer-summary">
              <div className="footer-summary-top">
                <button type="button" className="footer-detail">
                  明細
                  <span className="icon-arrow-up" />
                </button>
                <span className="chip-outline-green">已省下 $0</span>
              </div>
              <div className="footer-summary-bottom">
                <span className="footer-label">訂購總額</span>
                <span className="footer-amount">
                  <span className="currency-small">$</span>
                  <span className="amount-large">0</span>
                </span>
                <span className="footer-note">(含運$0)</span>
              </div>
            </div>
          </div>
          <div className="cart-footer-right">
            <Link to="/cart" className="btn-checkout-large">
              <span className="btn-checkout-icon" aria-hidden />
              <span>前往結帳</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
