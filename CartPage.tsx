import React from "react";
import "./CartPage.css";

export const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      {/* Header */}
      <header className="cart-header">
        <div className="cart-header-left">
          <div className="cart-logo-block">
            <div className="cart-logo" />
            <div className="cart-header-title">牧羊人經銷平台｜台灣站</div>
          </div>

          <nav className="cart-nav">
            <button className="cart-nav-item">新品專區</button>
            <button className="cart-nav-item cart-nav-item--active">
              寵食品牌
            </button>
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
                <span>99</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="cart-main-container">
        <div className="cart-main-inner">
          {/* 上方经销商 + 清空 */}
          <div className="cart-toolbar">
            <div className="cart-dealer-select">
              <span className="label">經銷商</span>
              <div className="select">
                <span className="select-placeholder">請選擇</span>
                <span className="icon-arrow-down" />
              </div>
            </div>
            <button className="btn-text">清空購物車</button>
          </div>

          {/* 品牌 Tab */}
          <div className="cart-brand-tabs">
            <div className="cart-brand-tab cart-brand-tab--active">
              <div className="brand-logo brand-logo--dcs" />
              <div>
                <div className="brand-name">汪喵星球</div>
                <div className="brand-sub">待結帳商品 12</div>
              </div>
            </div>
            <div className="cart-brand-tab">
              <div className="brand-logo brand-logo--lm" />
              <div>
                <div className="brand-name">汪喵星球</div>
                <div className="brand-sub">待結帳商品 12</div>
              </div>
            </div>
            <div className="cart-brand-tab">
              <div className="brand-logo brand-logo--ln" />
              <div>
                <div className="brand-name">超凝小姐</div>
                <div className="brand-sub">待結帳商品 12</div>
              </div>
            </div>
            <div className="cart-brand-tab">
              <div className="brand-logo brand-logo--hm" />
              <div>
                <div className="brand-name">HeroMama</div>
                <div className="brand-sub">待結帳商品 12</div>
              </div>
            </div>
            <div className="cart-brand-tab">
              <div className="brand-logo brand-logo--aq" />
              <div>
                <div className="brand-name">角落水族</div>
                <div className="brand-sub">待結帳商品 12</div>
              </div>
            </div>
          </div>

          <div className="cart-content-row">
            {/* 左侧：商品 & 贈品 */}
            <section className="cart-left">
              {/* 商品卡片（简化版本，两笔示例） */}
              <article className="cart-item-card">
                <div className="cart-item-header">
                  <div className="cart-item-title">汪喵星球</div>
                  <button className="icon-trash" />
                </div>

                <div className="cart-item-body">
                  <div className="cart-item-image" />
                  <div className="cart-item-info">
                    <div className="cart-item-main">
                      <div className="cart-item-name">
                        犬用 Fantastic 95% 鮮肉無膠主食罐
                      </div>
                      <div className="cart-item-tag">
                        小罐 80g｜田園火雞
                      </div>
                    </div>
                    <div className="cart-item-right">
                      <div className="cart-item-unit-price">$320</div>
                      <div className="cart-item-qty">
                        <button className="qty-btn">-</button>
                        <div className="qty-input">100</div>
                        <button className="qty-btn">+</button>
                      </div>
                      <div className="cart-item-total">
                        <span className="currency">$</span>
                        <span className="amount">3200</span>
                      </div>
                      <button className="icon-close" />
                    </div>
                  </div>
                </div>

                <div className="cart-promo-block cart-promo-block--success">
                  <span className="icon-check-success" />
                  <span className="promo-label-success">已符合</span>
                  <span className="promo-text">
                    買主食罐送凍乾試吃包 x 10（只送一次）
                  </span>
                </div>

                <div className="cart-promo-block cart-promo-block--warn">
                  <span className="icon-warn" />
                  <span className="promo-label-gray">再湊 1 件</span>
                  <span className="promo-text">
                    主食罐四箱折 200 元
                  </span>
                </div>
              </article>

              {/* 第二个商品卡可复用同结构，这里略写一笔 */}
              <article className="cart-item-card">
                <div className="cart-item-body">
                  <div className="cart-item-image" />
                  <div className="cart-item-info">
                    <div className="cart-item-main">
                      <div className="cart-item-name">
                        犬用 Fantastic 95% 鮮肉無膠主食罐
                      </div>
                      <div className="cart-item-tag">
                        小罐 80g｜田園火雞
                      </div>
                    </div>
                    <div className="cart-item-right">
                      <div className="cart-item-unit-price">$320</div>
                      <div className="cart-item-qty">
                        <button className="qty-btn">-</button>
                        <div className="qty-input">100</div>
                        <button className="qty-btn">+</button>
                      </div>
                      <div className="cart-item-total">
                        <span className="currency">$</span>
                        <span className="amount">3200</span>
                      </div>
                      <button className="icon-close" />
                    </div>
                  </div>
                </div>
              </article>

              {/* 贈品區（对应设计中的「贈品」卡片） */}
              <section className="gift-card">
                <div className="gift-header">
                  <h2>贈品</h2>
                  <div className="gift-tip">
                    <span>*贈品贈完為止</span>
                    <span className="icon-help" />
                  </div>
                </div>

                <div className="gift-block gift-block--unselected">
                  <div className="gift-block-header">
                    <div className="gift-icon" />
                    <div className="gift-title">
                      買罐頭箱裝 / 凍乾主食500g，贈零食 1 包 (可累贈)
                    </div>
                    <button className="gift-choose">
                      選贈品 <span className="icon-arrow-right" />
                    </button>
                  </div>
                  <div className="gift-images-row">
                    <div className="gift-thumb" />
                    <div className="gift-thumb" />
                    <div className="gift-thumb" />
                  </div>
                </div>

                <div className="gift-block gift-block--selected">
                  <div className="gift-block-header">
                    <div className="gift-icon" />
                    <div className="gift-title">買就送 凍乾零食10包</div>
                    <button className="gift-choose">
                      選贈品 <span className="icon-arrow-right" />
                    </button>
                  </div>
                  <div className="gift-images-row">
                    <div className="gift-thumb" />
                    <div className="gift-thumb" />
                    <div className="gift-thumb" />
                    {/* 其餘縮圖略 */}
                  </div>
                  <div className="gift-selected-item">
                    <span className="icon-check-selected" />
                    <div className="gift-selected-text">
                      <div className="gift-selected-name">
                        汪喵星球 機能優格丁｜犬貓優格丁
                      </div>
                      <div className="gift-selected-desc">營養雙莓22g</div>
                    </div>
                    <div className="gift-selected-qty">x1</div>
                  </div>
                </div>
              </section>
            </section>

            {/* 右侧：優惠券 + 金額摘要 + 配送方式 */}
            <aside className="cart-right">
              {/* 優惠券卡片 */}
              <section className="card coupon-card">
                <div className="card-header-row">
                  <h2>優惠券</h2>
                  <button className="btn-link-with-icon">
                    查看優惠 <span className="icon-arrow-right" />
                  </button>
                </div>

                <div className="coupon-row">
                  <div className="coupon-status">
                    <span className="icon-check-green" />
                    <span className="status-text green">折抵優惠</span>
                    <span className="status-count green">4</span>
                  </div>
                  <div className="coupon-saved">
                    <span className="label">已省下</span>
                    <span className="value red">$50</span>
                  </div>
                </div>

                <div className="coupon-input-row">
                  <div className="textfield">
                    <span className="placeholder">請輸入折扣碼</span>
                  </div>
                  <button className="btn-outline-primary">使用</button>
                </div>
              </section>

              {/* 交易金額摘要 */}
              <section className="card summary-card">
                <h2>交易金額摘要</h2>
                <div className="summary-list">
                  <div className="summary-row">
                    <span>商品總計</span>
                    <span>$1,645</span>
                  </div>
                  <div className="summary-row">
                    <div className="summary-left-with-icon">
                      <span>優惠折扣</span>
                      <span className="icon-arrow-down-small" />
                    </div>
                    <span>-$187</span>
                  </div>
                  <div className="summary-row">
                    <span>加價購</span>
                    <div className="summary-price-with-origin">
                      <span className="origin">$120</span>
                      <span className="now">$90</span>
                    </div>
                  </div>
                  <div className="summary-row">
                    <div className="summary-left-with-icon">
                      <span>運費</span>
                      <span className="icon-arrow-down-small" />
                    </div>
                    <div className="shipping-chip-row">
                      <span className="chip-red">
                        差 $100 免運
                      </span>
                      <span>$60</span>
                    </div>
                  </div>
                  <div className="summary-row">
                    <span>點數/好友推薦</span>
                    <span>-$82</span>
                  </div>
                  <div className="summary-row">
                    <span>稅額</span>
                    <span>-</span>
                  </div>

                  <div className="summary-divider" />

                  <div className="summary-row summary-row-total">
                    <div className="total-left">
                      <span>訂購總額</span>
                    </div>
                    <div className="total-right">
                      <span className="chip-green">已省下 $269</span>
                      <span className="total-amount">$1,376</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 配送方式 */}
              <section className="card shipping-card">
                <div className="card-header-row">
                  <div className="shipping-title">
                    <h2>配送方式</h2>
                    <button className="link-gray underline">
                      配送須知
                    </button>
                  </div>
                  <div className="shipping-status">
                    <span className="icon-check-green" />
                    <span>達免運</span>
                  </div>
                </div>

                <div className="shipping-option">
                  <div className="shipping-option-main">
                    <div className="shipping-option-title">
                      7-11 常溫超商取貨
                    </div>
                    <div className="shipping-tags-row">
                      <span className="tag-gray">常溫</span>
                      <span className="shipping-desc">
                        消費金額 1~499，運費 80；差 200 運費 10
                      </span>
                    </div>
                  </div>
                  <button className="btn-link-with-icon">
                    編輯 <span className="icon-arrow-right" />
                  </button>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>

      {/* 下方優惠折扣條 */}
      <div className="footer-coupon-bar">
        <div className="footer-coupon-inner">
          <div className="footer-coupon-left">
            <span className="icon-ticket" />
            <span className="footer-coupon-title">優惠折扣</span>
          </div>
          <button className="btn-link-with-icon">
            查看或使用優惠 <span className="icon-arrow-right" />
          </button>
        </div>
      </div>

      {/* 最底部結帳條 */}
      <footer className="cart-footer">
        <div className="cart-footer-inner">
          <div className="cart-footer-summary">
            <div className="footer-summary-top">
              <button className="footer-detail">
                明細
                <span className="icon-arrow-up" />
              </button>
              <span className="chip-outline-green">
                已省下 $269
              </span>
            </div>
            <div className="footer-summary-bottom">
              <span className="footer-label">訂購總額</span>
              <span className="footer-amount">
                <span className="currency-small">$</span>
                <span className="amount-large">1,376</span>
              </span>
              <span className="footer-note">(含運$60)</span>
            </div>
          </div>

          <button className="btn-primary-large">
            <span className="icon-cart-white" />
            <span>前往結帳</span>
          </button>
        </div>
      </footer>
    </div>
  );
};