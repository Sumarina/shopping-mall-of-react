import Region from '../../../common/region';
import { getId } from '../../../common/utils';
const tpl = `
<div id="register-info-wrapper" class="register-info-wrapper">
    <form id="register-info-form" submit="return false">
        <label class="register-account-wrapper">
            <span class="info-label">昵称</span>
            <input id="nickname" name="account" type="text" placeholder="昵称"  valid="required,onOther" />
        </label>
        <label class="register-account-wrapper">
            <span class="info-label">电子邮箱</span>
            <input id="email" name="email" type="text" placeholder="电子邮箱"  valid="required,email" />
        </label>
        <label class="register-account-wrapper">
            <span class="info-label">真实姓名</span>
            <input id="real-name" name="real-name" type="text" placeholder="真实姓名" />
        </label>
        <label class="register-account-wrapper">
            <span class="info-label">性别</span>
            <select id="register-info-sex" name="sex">
                <option value="1">男</option>
                <option value="2">女</option>
            </select>
        </label>
        <label class="register-account-wrapper">
            <span class="info-label">生日</span>
            <input id="register-info-birthday" name="register-info-birthday" type="date" />
        </label>
        <label class="register-account-wrapper">
            <span class="info-label">居住地</span>
            <div id="register-info-address" class="register-info-address"></div>
        </label>
        <input id="register-info-btn" class="register-btn" type="submit" value="确定" />
    </form>
</div>
`;
export default (opts) => {
  opts.container.innerHTML = tpl;
  const region = new Region({
    container: getId('register-info-address'),
    name: 'region',
  });
};
