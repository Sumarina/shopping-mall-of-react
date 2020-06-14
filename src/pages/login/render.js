import { getId } from '../../common/utils';
const template = (opts = {}) => {
  const autocompleteTpl = `
    <div id="no-autocomplete">
        <input type="text" />
        <input type="password" />
    </div>
    `;
  const autocompleteAdapter = opts.autocomplete ? '' : autocompleteTpl;
  const autocompleteValue = opts.autocomplete ? 'on' : 'off';
  const tpl = `
  <div id="login-wrapper">
    <form id="login-form" onsubmit="return false">
        ${autocompleteAdapter}
        <label class="login-account-wrapper">
            <span class="account-label">${opts.accountLabel}</span>
            <input id="login-account" name="account" type="text" placeholder="${opts.accountPlaceholder}" autocomplete="${autocompleteValue}" valid="required,telephone,email" />
            <span id="clear-account" class="del"></span>
        </label>
        <label class="login-account-wrapper">
            <span class="password-label">${opts.passwordLabel}</span>
            <input id="login-password" name="password" type="password" placeholder="${opts.passwordPlaceholder}" autocomplete="${autocompleteValue}" valid="required" />
        </label>
        <span id="login-error" class="error"></span>
        <input id="login-btn" class="login-btn" type="submit" value="${opts.loginBtnText}" />
    </form>
  </div>
  `;
  return tpl;
};
export default (conf = {}) => {
  conf.container.innerHTML = template(conf);
  const $noAutocomplete = getId('no-autocomplete');
  if ($noAutocomplete) {
    $noAutocomplete.style.opacity = '0';
    $noAutocomplete.style.height = '0';
  }
};
