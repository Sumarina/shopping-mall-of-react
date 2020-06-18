// import { getId } from '../../common/utils';
const template = (opts = {}) => {
  const tpl = `
  <div id="register-mobile-wrapper" class="register-mobile-wrapper">
    <form id="register-mobile-form" onsubmit="return false">
        <label class="register-account-wrapper">
            <span class="mobile-label">手机号</span><input type="text"  placeholder="${opts.mobilePlaceholder || ''}" valid="required,mobile"/>
        </label>
        <label class="register-account-wrapper">
            <span class="verify-label">验证</span><div id="register-verify-wrapper" class="register-verify-wrapper"></div>
        </label>
        <input type="button" id="register-btn" value="${opts.registerBtnText}" class="register-btn" />
    </form>
  </div>
  `;
  return tpl;
};
export default (conf = {}) => {
  conf.container.innerHTML = template(conf);
};
