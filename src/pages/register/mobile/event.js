import Slider from '../../../common/slider';
import { getId, addClass } from '../../../common/utils';
import { fetchPost } from '../../../common/fetch';

export default (conf) => {
  const slider = new Slider({
    container: getId('register-verify-wrapper'),
    success: async ($wrapper, $text, offsetArr) => {
      const data = await fetchPost('/getMobileVerifyToken', { offsetArr: offsetArr });
      if (data.code === 200) {
        addClass($wrapper, 'success');
        const $btn = getId('register-btn');
        addClass($btn, 'success');
        $text.innerHTML = '操作成功';
        $btn.onclick = () => {
          conf.success && conf.success();
        };
      }
    },
  });
};
