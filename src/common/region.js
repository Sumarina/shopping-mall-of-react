import { fetchJson } from './fetch';
import { getId } from './utils';
const render = Symbol('render');

const getProvinces = (regionData) => {
  return regionData[0].children;
};
const getCities = (province, regionData) => {
  const provinces = getProvinces(regionData);
  const result = provinces.filter((p) => p.value === province);
  return result[0].children ? result[0].children : [];
};
const getArea = (province, city, regionData) => {
  const provinces = getProvinces(regionData);
  const result = getCities(province, regionData).filter((c) => c.value === city);
  return result[0].children ? result[0].children : [];
};

const setOptions = (dom, data) => {
  let options = '<option></option>';
  for (let item of data) {
    options += `<option value="${item.value}">${item.label}</option>`;
  }
  dom.innerHTML = options;
};
class Region {
  constructor(opts) {
    if (!opts.container) throw '请填写container配置';
    if (!opts.name) throw '请填写name配置';
    else {
      this[render](opts);
    }
  }
  async [render](opts) {
    let regionData = await fetchJson('/region-data', {});
    regionData = regionData.data;
    const tpl = `
    <div class="region-select-wrapper">
        <select id="region-province-select"></select>
        <select id="region-city-select"></select>
        <select id="region-area-select"></select>
        <input type="hidden" id="region-selected" name="${opts.name}" valid="${opts.isRequired ? 'required' : ''}"/>
    </div>
    `;
    opts.container.innerHTML = tpl;

    const $provinceSelect = getId('region-province-select');
    const $citySelect = getId('region-city-select');
    const $areaSelect = getId('region-area-select');
    const $result = getId('region-selected');
    let provinceSelected, citySelected, areaSelected;

    setOptions($provinceSelect, getProvinces(regionData));

    const cityChange = () => {
      const provinceValue = $provinceSelect.value;
      const cityValue = $citySelect.value;
      provinceSelected = provinceValue;
      citySelected = cityValue;
      const areas = getArea(provinceValue, cityValue, regionData);
      setOptions($areaSelect, areas);
      areas.length > 0 && ($areaSelect.value = areas[0].value);
    };

    const provinceChange = () => {
      const provinceValue = $provinceSelect.value;
      provinceSelected = provinceValue;
      const cities = getCities(provinceValue, regionData);
      setOptions($citySelect, cities);
      $citySelect.value = cities[0].value;
      cityChange();
    };

    $provinceSelect.onchange = provinceChange;
    $citySelect.onchange = cityChange;
  }
}

export default Region;
