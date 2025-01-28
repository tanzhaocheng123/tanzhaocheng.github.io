// 设置 Mapbox 访问令牌
mapboxgl.accessToken = "pk.eyJ1IjoiMjk2NDY0OXQiLCJhIjoiY201d2poODIzMDlxcDJqcXVmcmxoMmxpYyJ9.jSyrcFE5VHf1NZ_FO7tQ3g";

// Before map
const beforeMap = new mapboxgl.Map({
  container: "before", // 地图容器的 HTML 元素 ID
  style: "mapbox://styles/2964649t/cm6gl6fvg001e01sd58qs3gzl", // 地图样式 URL
  center: [-0.089932, 51.514441], // 地图中心坐标（经度，纬度）
  zoom: 14 // 缩放级别
});

// After map
const afterMap = new mapboxgl.Map({
  container: "after", // 地图容器的 HTML 元素 ID
  style: "mapbox://styles/2964649t/cm6glducz004r01s3a27nad21", // 地图样式 URL
  center: [-0.089932, 51.514441], // 与 beforeMap 保持相同的中心坐标
  zoom: 14 // 与 beforeMap 保持相同的缩放级别
});

// 比较地图设置
const container = "#comparison-container"; // 地图对比容器
const map = new mapboxgl.Compare(beforeMap, afterMap, container, {}); // 创建地图对比
