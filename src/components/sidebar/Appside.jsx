 
const  Appside = () =>  {
 return (<>
 <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="assets/images/logo.svg" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt="" height={17} />
                  </span>
                </a>
                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets/images/logo-light.svg" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-light.png" alt="" height={19} />
                  </span>
                </a>
              </div>
              <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                <i className="fa fa-fw fa-bars" />
              </button>
              {/* App Search*/}
              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="bx bx-search-alt" />
                </div>
              </form>
              <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
                <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" >
                  <span key="t-megamenu">Mega Menu</span>
                  <i className="mdi mdi-chevron-down" /> 
                </button>
                <div className="dropdown-menu dropdown-megamenu">
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="font-size-14 mt-0" key="t-ui-components">UI Components</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <a href="" key="t-lightbox">Lightbox</a>
                            </li>
                            <li>
                              <a href="" key="t-range-slider">Range Slider</a>
                            </li>
                            <li>
                              <a href="" key="t-sweet-alert">Sweet Alert</a>
                            </li>
                            <li>
                              <a href="" key="t-rating">Rating</a>
                            </li>
                            <li>
                              <a href="" key="t-forms">Forms</a>
                            </li>
                            <li>
                              <a href="" key="t-tables">Tables</a>
                            </li>
                            <li>
                              <a href="" key="t-charts">Charts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="font-size-14 mt-0" key="t-applications">Applications</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <a href="" key="t-ecommerce">Ecommerce</a>
                            </li>
                            <li>
                              <a href="" key="t-calendar">Calendar</a>
                            </li>
                            <li>
                              <a href="" key="t-email">Email</a>
                            </li>
                            <li>
                              <a href="" key="t-projects">Projects</a>
                            </li>
                            <li>
                              <a href="" key="t-tasks">Tasks</a>
                            </li>
                            <li>
                              <a href="" key="t-contacts">Contacts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="font-size-14 mt-0" key="t-extra-pages">Extra Pages</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <a href="" key="t-light-sidebar">Light Sidebar</a>
                            </li>
                            <li>
                              <a href="" key="t-compact-sidebar">Compact Sidebar</a>
                            </li>
                            <li>
                              <a href="" key="t-horizontal">Horizontal layout</a>
                            </li>
                            <li>
                              <a href="" key="t-maintenance">Maintenance</a>
                            </li>
                            <li>
                              <a href="" key="t-coming-soon">Coming Soon</a>
                            </li>
                            <li>
                              <a href="" key="t-timeline">Timeline</a>
                            </li>
                            <li>
                              <a href="" key="t-faqs">FAQs</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="row">
                        <div className="col-sm-6">
                          <h5 className="font-size-14 mt-0" key="t-ui-components">UI Components</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <a href="" key="t-lightbox">Lightbox</a>
                            </li>
                            <li>
                              <a href="" key="t-range-slider">Range Slider</a>
                            </li>
                            <li>
                              <a href="" key="t-sweet-alert">Sweet Alert</a>
                            </li>
                            <li>
                              <a href="" key="t-rating">Rating</a>
                            </li>
                            <li>
                              <a href="" key="t-forms">Forms</a>
                            </li>
                            <li>
                              <a href="" key="t-tables">Tables</a>
                            </li>
                            <li>
                              <a href="" key="t-charts">Charts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-5">
                          <div>
                            <img src="assets/images/megamenu-img.png" alt="" className="img-fluid mx-auto d-block" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" >
                  <i className="mdi mdi-magnify" />
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="true" >
                  <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height={16} />
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a href="" className="dropdown-item notify-item language" data-lang="en">
                    <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">English</span>
                  </a>
                  {/* item*/}
                  <a href="" className="dropdown-item notify-item language" data-lang="sp">
                    <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
                  </a>
                  {/* item*/}
                  <a href="" className="dropdown-item notify-item language" data-lang="gr">
                    <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
                  </a>
                  {/* item*/}
                  <a href="" className="dropdown-item notify-item language" data-lang="it">
                    <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
                  </a>
                  {/* item*/}
                  <a href="" className="dropdown-item notify-item language" data-lang="ru">
                    <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
                  </a>
                </div>
              </div>
              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="dropdown" aria-haspopup="true" >
                  <i className="bx bx-customize" />
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                  <div className="px-lg-2">
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/github.png" alt="Github" />
                          <span>GitHub</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                          <span>Bitbucket</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                          <span>Dribbble</span>
                        </a>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                          <span>Dropbox</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                          <span>Mail Chimp</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/slack.png" alt="slack" />
                          <span>Slack</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                  <i className="bx bx-fullscreen" />
                </button>
              </div>
              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" >
                  <i className="bx bx-bell bx-tada" />
                  <span className="badge bg-danger rounded-pill">3</span>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                  <div className="p-3">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0" key="t-notifications"> Notifications </h6>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="small" key="t-view-all"> View All</a>
                      </div>
                    </div>
                  </div>
                  <div data-simplebar style={{maxHeight: '230px'}}>
                    <a href="#" className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title bg-primary rounded-circle font-size-16">
                            <i className="bx bx-cart" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1" key="t-your-order">Your order is placed</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="text-reset notification-item">
                      <div className="media">
                        <img src="assets/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">James Lemire</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title bg-success rounded-circle font-size-16">
                            <i className="bx bx-badge-check" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1" key="t-shipped">Your item is shipped</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="text-reset notification-item">
                      <div className="media">
                        <img src="assets/images/users/avatar-4.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Salena Layfield</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 border-top d-grid">
                    <a className="btn btn-sm btn-link font-size-14 text-center" >
                      <i className="mdi mdi-arrow-right-circle me-1" /> <span key="t-view-more">View More..</span> 
                    </a>
                  </div>
                </div>
              </div>
              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" >
                  <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                  <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                  <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1" /> <span key="t-profile">Profile</span></a>
                  <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1" /> <span key="t-my-wallet">My Wallet</span></a>
                  <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1" /> <span key="t-settings">Settings</span></a>
                  <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1" /> <span key="t-lock-screen">Lock screen</span></a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span></a>
                </div>
              </div>
              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                  <i className="bx bx-cog bx-spin" />
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* ========== Left Sidebar Start ========== */}
        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            {/*- Sidemenu */}
            <div id="sidebar-menu">
              {/* Left Menu Start */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title" key="t-menu">Menu</li>
                <li>
                  <a href="" className="waves-effect">
                    <i className="bx bx-home-circle" /><span className="badge rounded-pill bg-info float-end">04</span>
                    <span key="t-dashboards">Dashboards</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="index.html" key="t-default">Default</a></li>
                    <li><a href="dashboard-saas.html" key="t-saas">Saas</a></li>
                    <li><a href="dashboard-crypto.html" key="t-crypto">Crypto</a></li>
                    <li><a href="dashboard-blog.html" key="t-blog">Blog</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-layout" />
                    <span key="t-layouts">Layouts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a className="has-arrow" key="t-vertical">Vertical</a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li><a href="layouts-light-sidebar.html" key="t-light-sidebar">Light Sidebar</a></li>
                        <li><a href="layouts-compact-sidebar.html" key="t-compact-sidebar">Compact Sidebar</a></li>
                        <li><a href="layouts-icon-sidebar.html" key="t-icon-sidebar">Icon Sidebar</a></li>
                        <li><a href="layouts-boxed.html" key="t-boxed-width">Boxed Width</a></li>
                        <li><a href="layouts-preloader.html" key="t-preloader">Preloader</a></li>
                        <li><a href="layouts-colored-sidebar.html" key="t-colored-sidebar">Colored Sidebar</a></li>
                        <li><a href="layouts-scrollable.html" key="t-scrollable">Scrollable</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className="has-arrow" key="t-horizontal">Horizontal</a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li><a href="layouts-horizontal.html" key="t-horizontal">Horizontal</a></li>
                        <li><a href="layouts-hori-topbar-light.html" key="t-topbar-light">Topbar light</a></li>
                        <li><a href="layouts-hori-boxed-width.html" key="t-boxed-width">Boxed width</a></li>
                        <li><a href="layouts-hori-preloader.html" key="t-preloader">Preloader</a></li>
                        <li><a href="layouts-hori-colored-header.html" key="t-colored-topbar">Colored Header</a></li>
                        <li><a href="layouts-hori-scrollable.html" key="t-scrollable">Scrollable</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-title" key="t-apps">Apps</li>
                <li>
                  <a href="calendar.html" className="waves-effect">
                    <i className="bx bx-calendar" />
                    <span key="t-calendar">Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="chat.html" className="waves-effect">
                    <i className="bx bx-chat" />
                    <span key="t-chat">Chat</span>
                  </a>
                </li>
                <li>
                  <a href="apps-filemanager.html" className="waves-effect">
                    <i className="bx bx-file" />
                    <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                    <span key="t-file-manager">File Manager</span>
                  </a>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-store" />
                    <span key="t-ecommerce">Ecommerce</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="ecommerce-products.html" key="t-products">Products</a></li>
                    <li><a href="ecommerce-product-detail.html" key="t-product-detail">Product Detail</a></li>
                    <li><a href="ecommerce-orders.html" key="t-orders">Orders</a></li>
                    <li><a href="ecommerce-customers.html" key="t-customers">Customers</a></li>
                    <li><a href="ecommerce-cart.html" key="t-cart">Cart</a></li>
                    <li><a href="ecommerce-checkout.html" key="t-checkout">Checkout</a></li>
                    <li><a href="ecommerce-shops.html" key="t-shops">Shops</a></li>
                    <li><a href="ecommerce-add-product.html" key="t-add-product">Add Product</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-bitcoin" />
                    <span key="t-crypto">Crypto</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="crypto-wallet.html" key="t-wallet">Wallet</a></li>
                    <li><a href="crypto-buy-sell.html" key="t-buy">Buy/Sell</a></li>
                    <li><a href="crypto-exchange.html" key="t-exchange">Exchange</a></li>
                    <li><a href="crypto-lending.html" key="t-lending">Lending</a></li>
                    <li><a href="crypto-orders.html" key="t-orders">Orders</a></li>
                    <li><a href="crypto-kyc-application.html" key="t-kyc">KYC Application</a></li>
                    <li><a href="crypto-ico-landing.html" key="t-ico">ICO Landing</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-envelope" />
                    <span key="t-email">Email</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="email-inbox.html" key="t-inbox">Inbox</a></li>
                    <li><a href="email-read.html" key="t-read-email">Read Email</a></li>
                    <li>
                      <a>
                        <span className="badge rounded-pill badge-soft-success float-end" key="t-new">New</span>
                        <span key="t-email-templates">Templates</span>
                      </a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li><a href="email-template-basic.html" key="t-basic-action">Basic Action</a></li>
                        <li><a href="email-template-alert.html" key="t-alert-email">Alert Email</a></li>
                        <li><a href="email-template-billing.html" key="t-bill-email">Billing Email</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-receipt" />
                    <span key="t-invoices">Invoices</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="invoices-list.html" key="t-invoice-list">Invoice List</a></li>
                    <li><a href="invoices-detail.html" key="t-invoice-detail">Invoice Detail</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-briefcase-alt-2" />
                    <span key="t-projects">Projects</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="projects-grid.html" key="t-p-grid">Projects Grid</a></li>
                    <li><a href="projects-list.html" key="t-p-list">Projects List</a></li>
                    <li><a href="projects-overview.html" key="t-p-overview">Project Overview</a></li>
                    <li><a href="projects-create.html" key="t-create-new">Create New</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-task" />
                    <span key="t-tasks">Tasks</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="tasks-list.html" key="t-task-list">Task List</a></li>
                    <li><a href="tasks-kanban.html" key="t-kanban-board">Kanban Board</a></li>
                    <li><a href="tasks-create.html" key="t-create-task">Create Task</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bxs-user-detail" />
                    <span key="t-contacts">Contacts</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="contacts-grid.html" key="t-user-grid">User Grid</a></li>
                    <li><a href="contacts-list.html" key="t-user-list">User List</a></li>
                    <li><a href="contacts-profile.html" key="t-profile">Profile</a></li>
                  </ul>
                </li>
                <li>
                  <a className="waves-effect">
                    <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                    <i className="bx bx-detail" />
                    <span key="t-blog">Blog</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="blog-list.html" key="t-blog-list">Blog List</a></li>
                    <li><a href="blog-grid.html" key="t-blog-grid">Blog Grid</a></li>
                    <li><a href="blog-details.html" key="t-blog-details">Blog Details</a></li>
                  </ul>
                </li>
                <li className="menu-title" key="t-pages">Pages</li>
                <li>
                  <a className="waves-effect">
                    <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                    <i className="bx bx-user-circle" />
                    <span key="t-authentication">Authentication</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="auth-login.html" key="t-login">Login</a></li>
                    <li><a href="auth-login-2.html" key="t-login-2">Login 2</a></li>
                    <li><a href="auth-register.html" key="t-register">Register</a></li>
                    <li><a href="auth-register-2.html" key="t-register-2">Register 2</a></li>
                    <li><a href="auth-recoverpw.html" key="t-recover-password">Recover Password</a></li>
                    <li><a href="auth-recoverpw-2.html" key="t-recover-password-2">Recover Password 2</a></li>
                    <li><a href="auth-lock-screen.html" key="t-lock-screen">Lock Screen</a></li>
                    <li><a href="auth-lock-screen-2.html" key="t-lock-screen-2">Lock Screen 2</a></li>
                    <li><a href="auth-confirm-mail.html" key="t-confirm-mail">Confirm Mail</a></li>
                    <li><a href="auth-confirm-mail-2.html" key="t-confirm-mail-2">Confirm Mail 2</a></li>
                    <li><a href="auth-email-verification.html" key="t-email-verification">Email verification</a></li>
                    <li><a href="auth-email-verification-2.html" key="t-email-verification-2">Email verification 2</a></li>
                    <li><a href="auth-two-step-verification.html" key="t-two-step-verification">Two step verification</a></li>
                    <li><a href="auth-two-step-verification-2.html" key="t-two-step-verification-2">Two step verification 2</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-file" />
                    <span key="t-utility">Utility</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="pages-starter.html" key="t-starter-page">Starter Page</a></li>
                    <li><a href="pages-maintenance.html" key="t-maintenance">Maintenance</a></li>
                    <li><a href="pages-comingsoon.html" key="t-coming-soon">Coming Soon</a></li>
                    <li><a href="pages-timeline.html" key="t-timeline">Timeline</a></li>
                    <li><a href="pages-faqs.html" key="t-faqs">FAQs</a></li>
                    <li><a href="pages-pricing.html" key="t-pricing">Pricing</a></li>
                    <li><a href="pages-404.html" key="t-error-404">Error 404</a></li>
                    <li><a href="pages-500.html" key="t-error-500">Error 500</a></li>
                  </ul>
                </li>
                <li className="menu-title" key="t-components">Components</li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-tone" />
                    <span key="t-ui-elements">UI Elements</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="ui-alerts.html" key="t-alerts">Alerts</a></li>
                    <li><a href="ui-buttons.html" key="t-buttons">Buttons</a></li>
                    <li><a href="ui-cards.html" key="t-cards">Cards</a></li>
                    <li><a href="ui-carousel.html" key="t-carousel">Carousel</a></li>
                    <li><a href="ui-dropdowns.html" key="t-dropdowns">Dropdowns</a></li>
                    <li><a href="ui-grid.html" key="t-grid">Grid</a></li>
                    <li><a href="ui-images.html" key="t-images">Images</a></li>
                    <li><a href="ui-lightbox.html" key="t-lightbox">Lightbox</a></li>
                    <li><a href="ui-modals.html" key="t-modals">Modals</a></li>
                    <li><a href="ui-rangeslider.html" key="t-range-slider">Range Slider</a></li>
                    <li><a href="ui-session-timeout.html" key="t-session-timeout">Session Timeout</a></li>
                    <li><a href="ui-progressbars.html" key="t-progress-bars">Progress Bars</a></li>
                    <li><a href="ui-sweet-alert.html" key="t-sweet-alert">Sweet-Alert</a></li>
                    <li><a href="ui-tabs-accordions.html" key="t-tabs-accordions">Tabs &amp; Accordions</a></li>
                    <li><a href="ui-typography.html" key="t-typography">Typography</a></li>
                    <li><a href="ui-video.html" key="t-video">Video</a></li>
                    <li><a href="ui-general.html" key="t-general">General</a></li>
                    <li><a href="ui-colors.html" key="t-colors">Colors</a></li>
                    <li><a href="ui-rating.html" key="t-rating">Rating</a></li>
                    <li><a href="ui-notifications.html" key="t-notifications">Notifications</a></li>
                  </ul>
                </li>
                <li>
                  <a className="waves-effect">
                    <i className="bx bxs-eraser" />
                    <span className="badge rounded-pill bg-danger float-end">10</span>
                    <span key="t-forms">Forms</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="form-elements.html" key="t-form-elements">Form Elements</a></li>
                    <li><a href="form-layouts.html" key="t-form-layouts">Form Layouts</a></li>
                    <li><a href="form-validation.html" key="t-form-validation">Form Validation</a></li>
                    <li><a href="form-advanced.html" key="t-form-advanced">Form Advanced</a></li>
                    <li><a href="form-editors.html" key="t-form-editors">Form Editors</a></li>
                    <li><a href="form-uploads.html" key="t-form-upload">Form File Upload</a></li>
                    <li><a href="form-xeditable.html" key="t-form-xeditable">Form Xeditable</a></li>
                    <li><a href="form-repeater.html" key="t-form-repeater">Form Repeater</a></li>
                    <li><a href="form-wizard.html" key="t-form-wizard">Form Wizard</a></li>
                    <li><a href="form-mask.html" key="t-form-mask">Form Mask</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-list-ul" />
                    <span key="t-tables">Tables</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="tables-basic.html" key="t-basic-tables">Basic Tables</a></li>
                    <li><a href="tables-datatable.html" key="t-data-tables">Data Tables</a></li>
                    <li><a href="tables-responsive.html" key="t-responsive-table">Responsive Table</a></li>
                    <li><a href="tables-editable.html" key="t-editable-table">Editable Table</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bxs-bar-chart-alt-2" />
                    <span key="t-charts">Charts</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="charts-apex.html" key="t-apex-charts">Apex Charts</a></li>
                    <li><a href="charts-echart.html" key="t-e-charts">E Charts</a></li>
                    <li><a href="charts-chartjs.html" key="t-chartjs-charts">Chartjs Charts</a></li>
                    <li><a href="charts-flot.html" key="t-flot-charts">Flot Charts</a></li>
                    <li><a href="charts-tui.html" key="t-ui-charts">Toast UI Charts</a></li>
                    <li><a href="charts-knob.html" key="t-knob-charts">Jquery Knob Charts</a></li>
                    <li><a href="charts-sparkline.html" key="t-sparkline-charts">Sparkline Charts</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-aperture" />
                    <span key="t-icons">Icons</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="icons-boxicons.html" key="t-boxicons">Boxicons</a></li>
                    <li><a href="icons-materialdesign.html" key="t-material-design">Material Design</a></li>
                    <li><a href="icons-dripicons.html" key="t-dripicons">Dripicons</a></li>
                    <li><a href="icons-fontawesome.html" key="t-font-awesome">Font awesome</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-map" />
                    <span key="t-maps">Maps</span>
                  </a>
                  <ul className="sub-menu" >
                    <li><a href="maps-google.html" key="t-g-maps">Google Maps</a></li>
                    <li><a href="maps-vector.html" key="t-v-maps">Vector Maps</a></li>
                    <li><a href="maps-leaflet.html" key="t-l-maps">Leaflet Maps</a></li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow waves-effect">
                    <i className="bx bx-share-alt" />
                    <span key="t-multi-level">Multi Level</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li><a key="t-level-1-1">Level 1.1</a></li>
                    <li>
                      <a className="has-arrow" key="t-level-1-2">Level 1.2</a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li><a key="t-level-2-1">Level 2.1</a></li>
                        <li><a key="t-level-2-2">Level 2.2</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
          </div>
        </div>
        {/* Left Sidebar End */}
        {/* ============================================================== */}
        {/* Start right Content here */}
        {/* ============================================================== */}
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Calendar</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a>Skote</a></li>
                        <li className="breadcrumb-item active">Calendar</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div id="lnb">
                         
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div> {/* container-fluid */}
          </div>
          {/* End Page-content */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  © Skote.
                </div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Design &amp; Develop by Themesbrand
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* end main content*/}
      </div>

 </>);
};
 

export default Appside;