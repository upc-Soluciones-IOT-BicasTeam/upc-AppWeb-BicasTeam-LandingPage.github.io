Feature: Información a pie de página

Scenario: Resumen Claro y Conciso al final de la página
  Given el visitante del segmento gerente está en el landing page del sitio web
  When el visitante llega al final de la página
  Then se presenta un resumen claro y conciso del sitio web, destacando los aspectos más relevantes, como las características principales, los servicios ofrecidos, la información de contacto y cualquier otra información importante para el visitante
