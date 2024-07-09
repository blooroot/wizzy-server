// para la latitud usa la latitud de Lima migo, los pakis usaron la latitud de islamabad, que es la ciudad de pakistan en la que hicieron su estudio, pq la variacion por latitudes minusculamente diferentes dentro de una chacrita no hace mucha diferencia (es por eso mismo que esta variable la categorice como variable respecto al tiempo, pq varia significativamente en relacion a los cambios de temperatura per dia)

function calcularRa(dia, latitud) {
  const G_s = 0.0820;
  const lat_rad = latitud * Math.PI / 180;

  // dr, ws y delta manyas
  const dr = 1 + 0.033 * Math.cos((2 * Math.PI * dia) / 365);
  const delta = 0.409 * Math.sin((2 * Math.PI * dia) / 365 - 1.39);
  const ws = Math.acos(-Math.tan(lat_rad) * Math.tan(delta));

  // Ra manyas
  const Ra = (24 * 60 / Math.PI) * G_s * dr * (ws * Math.sin(lat_rad) * Math.sin(delta) + Math.cos(lat_rad) * Math.cos(delta) * Math.sin(ws));
  return Ra;
}

function estimarRA(T_max, T_min, Ra) {
  return 0.16 * Math.sqrt(T_max - T_min) * Ra;
}

function calcularEvapotranspiracion(T_max, T_min, T_mean, dia, latitud) {
  const Ra = calcularRa(dia, latitud);
  const RA_estimado = estimarRA(T_max, T_min, Ra);

  // estoy barely pensando migo cambia el metodo para calcular t_mean con tus logs del dia 😔, puedes pasarle T_total y dividirlo entre n de logs
  const ET = 0.0023 * (T_mean + 17.8) * Math.sqrt(T_max - T_min) * RA_estimado;

  return ET;
}

module.exports = calcularEvapotranspiracion;