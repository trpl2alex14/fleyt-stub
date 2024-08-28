import custom from './customization.json';

initMap();

async function initMap() {
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

  const map = new YMap(
    document.getElementById('yandex-map'),
    {
      location: {
        center: [61.381479, 55.165277],
        zoom: 17
      }
    }
  );

  const content = document.createElement('section');

  const marker = new YMapMarker(
    {
      coordinates: [61.381350, 55.165477],
    },
    content
  );

  map.addChild(new YMapDefaultSchemeLayer({
    customization: custom
  }));

  map.addChild(new YMapDefaultFeaturesLayer());

  map.addChild(marker);
  content.innerHTML = '<div class="contacts__map-marker"></div>';
}
