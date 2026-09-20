# Invitaciones

Repositorio para crear invitaciones digitales reutilizables para matrimonios, cumpleaños, baby showers, bautizos y otros eventos.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router

## Desarrollo local

\`\`\`bash
npm install
npm run dev
\`\`\`

Validación:

\`\`\`bash
npm run typecheck
npm run build
\`\`\`

## Estructura

\`\`\`text
src/
├─ components/                 # Componentes compartidos
├─ templates/
│  ├─ weddings/                # Templates reutilizables de matrimonio
│  └─ birthdays/
├─ invitations/
│  ├─ matrimonios/
│  │  └─ antonio-nicole/
│  ├─ cumpleanos/
│  ├─ baby-showers/
│  └─ bautizos/
└─ pages/
\`\`\`

Los archivos estáticos de cada invitación viven en:

\`\`\`text
public/assets/<categoria>/<slug>/
\`\`\`

## Primera invitación

Antonio & Nicole:

\`\`\`text
/matrimonios/antonio-nicole
\`\`\`

La información está centralizada en:

\`\`\`text
src/invitations/matrimonios/antonio-nicole/data.ts
\`\`\`

Esto permite cambiar nombres, fecha, lugar, WhatsApp y datos de regalo sin tocar el template visual.

## Agregar un nuevo matrimonio

1. Crear una carpeta en \`src/invitations/matrimonios/<slug>\`.
2. Crear un \`data.ts\` usando el tipo \`WeddingInvitation\`.
3. Crear un componente pequeño que renderice \`ElegantFloralWedding\` u otro template.
4. Guardar sus imágenes en \`public/assets/matrimonios/<slug>/\`.
5. Agregar la ruta en \`src/App.tsx\`.

## Criterio de arquitectura

Una invitación no debe convertirse en un proyecto React independiente. Los templates, componentes, iconos y estilos reutilizables viven una sola vez en el repositorio; cada evento aporta principalmente sus datos y assets.

## Antonio & Nicole

La primera versión incluye:

- diseño mobile-first
- fotografía principal
- cuenta regresiva
- fecha, hora y ubicación
- código de vestimenta
- enlace a Google Maps
- confirmación por WhatsApp con mensaje prellenado
- sección de regalo
- botón para copiar datos bancarios
- soporte para movimiento reducido
