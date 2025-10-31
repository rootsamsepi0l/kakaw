# kakaw
General Concept
Kakaw is envisioned as a specialty café with an integrated coworking model, designed to generate sustainable revenue through two main sources:
	1. High-quality beverages and snacks,
	2. Coworking memberships, offered in flexible formats (hourly, daily, weekly, and monthly passes).
Each membership grants access to exclusive on-site services, including:
	• Priority seating in the coworking area,
	• Tier 1 beverages and snacks,
	• High-speed internet and charging access,
	• A calm, thoughtfully designed environment optimized for focus and comfort.
Our primary demographic consists of remote professionals and freelancers aged 20 to 40 with a mid-to-high socioeconomic status, who seek an affordable yet premium workspace in Mexico City.
Kakaw aims to bridge the gap created by two ongoing trends:
	1. The rise of remote work and flexible professional lifestyles,
	2. The increasing cost of renting offices or private workspaces in central districts.
By merging café culture with coworking accessibility, we offer an affordable, psychological comfort zone that promotes both productivity and emotional well-being.

Design Philosophy — The Japandi Spirit
Kakaw’s atmosphere embodies the Japandi aesthetic, a fusion of Japanese minimalism and Scandinavian warmth.
Our space emphasizes:
	• Simplicity, functionality, and calmness,
	• Natural materials such as wood, stone, and neutral tones,
	• Biophilic elements (plants, natural light, organic textures) to promote mental clarity,
	• Intentional design, where every element has purpose and balance.
This philosophy extends to our coffee rituals — each cup is crafted slowly, precisely, and respectfully, honoring both Mexican cacao heritage and Japanese craftsmanship.

Mission
To elevate the daily ritual of coffee and work by creating spaces that nurture both productivity and inner calm, offering a mindful alternative to traditional cafés and sterile coworking offices.

Vision
To become a benchmark for hybrid spaces in Mexico City, where design, technology, and human experience merge harmoniously — expanding Kakaw into a network of smart, sustainable, and aesthetic cafés for the new generation of mobile professionals.

Core Values
	• Mindfulness: We promote slow living within fast-paced work culture.
	• Sustainability: Local sourcing, eco-conscious materials, and waste reduction.
	• Authenticity: Transparency in our coffee origins, processes, and services.
	• Innovation: Integration of automation and AI to streamline operations and elevate customer experience.
	• Community: Building genuine connections among creative individuals and professionals.

Differentiation
Unlike traditional cafés or coworking spaces, Kakaw focuses on the intersection of sensory experience and productivity.
	• Where Starbucks offers convenience, Kakaw offers purpose and peace.
	• Where Tierra Garat offers tradition, Kakaw offers modern harmony.
	• Where standard coworking offices feel corporate, Kakaw feels natural and personal.
Our strength lies in our hybrid identity — a minimalist sanctuary that operates with the precision of technology and the soul of handcrafted coffee.<img width="628" height="1043" alt="image" src="https://github.com/user-attachments/assets/9a538616-3c95-4a50-8ad5-4426fe69711c" />

General Concept
Kakaw is envisioned as a specialty café with an integrated coworking model, designed to generate sustainable revenue through two main sources:
	1. High-quality beverages and snacks,
	2. Coworking memberships, offered in flexible formats (hourly, daily, weekly, and monthly passes).
Each membership grants access to exclusive on-site services, including:
	• Priority seating in the coworking area,
	• Tier 1 beverages and snacks,
	• High-speed internet and charging access,
	• A calm, thoughtfully designed environment optimized for focus and comfort.
Our primary demographic consists of remote professionals and freelancers aged 20 to 40 with a mid-to-high socioeconomic status, who seek an affordable yet premium workspace in Mexico City.
Kakaw aims to bridge the gap created by two ongoing trends:
	1. The rise of remote work and flexible professional lifestyles,
	2. The increasing cost of renting offices or private workspaces in central districts.
By merging café culture with coworking accessibility, we offer an affordable, psychological comfort zone that promotes both productivity and emotional well-being.

Design Philosophy — The Japandi Spirit
Kakaw’s atmosphere embodies the Japandi aesthetic, a fusion of Japanese minimalism and Scandinavian warmth.
Our space emphasizes:
	• Simplicity, functionality, and calmness,
	• Natural materials such as wood, stone, and neutral tones,
	• Biophilic elements (plants, natural light, organic textures) to promote mental clarity,
	• Intentional design, where every element has purpose and balance.
This philosophy extends to our coffee rituals — each cup is crafted slowly, precisely, and respectfully, honoring both Mexican cacao heritage and Japanese craftsmanship.

Mission
To elevate the daily ritual of coffee and work by creating spaces that nurture both productivity and inner calm, offering a mindful alternative to traditional cafés and sterile coworking offices.

Vision
To become a benchmark for hybrid spaces in Mexico City, where design, technology, and human experience merge harmoniously — expanding Kakaw into a network of smart, sustainable, and aesthetic cafés for the new generation of mobile professionals.

Core Values
	• Mindfulness: We promote slow living within fast-paced work culture.
	• Sustainability: Local sourcing, eco-conscious materials, and waste reduction.
	• Authenticity: Transparency in our coffee origins, processes, and services.
	• Innovation: Integration of automation and AI to streamline operations and elevate customer experience.
	• Community: Building genuine connections among creative individuals and professionals.

Differentiation
Unlike traditional cafés or coworking spaces, Kakaw focuses on the intersection of sensory experience and productivity.
	• Where Starbucks offers convenience, Kakaw offers purpose and peace.
	• Where Tierra Garat offers tradition, Kakaw offers modern harmony.
	• Where standard coworking offices feel corporate, Kakaw feels natural and personal.
Our strength lies in our hybrid identity — a minimalist sanctuary that operates with the precision of technology and the soul of handcrafted coffee.<img width="628" height="1043" alt="image" src="https://github.com/user-attachments/assets/c8cde46a-c1a9-4d1c-98e7-fa62589c1ae1" />

☕ AUTOMATION BLUEPRINT — Kakaw Café + Coworking en n8n

🔧 Módulo 1 — Ventas y logística (cafetería y panadería)
🎯 Objetivo:
Automatizar reportes diarios, inventario, alertas de insumos y estadísticas visuales.

1️⃣ Inputs y herramientas necesarias
	• POS o registro de ventas (ejemplo: Square, Loyverse, Shopify POS, o Airtable si aún no tienes POS real).
	• Google Sheets o Notion → para almacenar los registros diarios.
	• Notion database:
		○ “Inventario de insumos”
		○ “Ventas diarias”
	• WhatsApp API (Twilio o WATI)
	• Email (Gmail node o SMTP)
	• Chart generation (puedes usar el node ChartJS de n8n o generar con Google Charts API).

2️⃣ Flujo principal
🧩 Workflow: Kakaw_Daily_Report
	1. Trigger diario (Cron Node) → Ejecuta a las 21:30 cada noche.
	2. POS API Node → Extrae todas las ventas del día.
	3. Function Node →
		○ Suma totales diarios
		○ Calcula propinas
		○ Resta comisiones de tarjeta (ej. 3.5%)
		○ Calcula utilidad neta (resta costos de insumos, energía, agua)
	4. Google Sheets / Notion Node → Guarda los resultados en la base “Ventas diarias”.
	5. Chart Node → Genera un pie chart de productos vendidos.
	6. Email Node → Envía un reporte PDF o imagen del gráfico a tu correo.
	7. Inventario Node (Notion) → Actualiza el inventario restando los insumos consumidos.
	8. IF Node → Si algún insumo < threshold mínimo,
		○ WhatsApp Node → Enviar alerta tipo:
“⚠️ Stock bajo: quedan solo 500 g de café Kraken Espresso. Reabastecer pronto ☕”

3️⃣ Outputs
📊 Reporte diario (en Gmail o Notion) con:
	• Ventas totales
	• Propinas recibidas
	• Pagos con tarjeta / efectivo
	• Ganancia neta real
	• Pie chart de productos vendidos
	• Estado de inventario + alertas automáticas


💼 Módulo 2 — Coworking y membresías
🎯 Objetivo:
Automatizar pagos, accesos, base de clientes, ocupación y recordatorios.

1️⃣ Inputs y herramientas necesarias
	• Stripe / Mercado Pago / Square POS
	• Notion databases:
		○ “Clientes coworking”
		○ “Membresías activas”
		○ “Ocupación actual”
		○ “Ganancias coworking”
	• Gmail Node
	• WhatsApp Node (Twilio/WATI)
	• Webhook Node → para recibir notificaciones de pago desde Stripe/Mercado Pago.
	• WiFi system API (si tienes router premium, puedes usar Mikrotik o Ubiquiti para generar accesos dinámicos; si no, puedes simular enviando un password temporal).

2️⃣ Flujo principal
🧩 Workflow: Kakaw_Coworking_Access
	1. Webhook Node → Recibe pago confirmado (Stripe/Mercado Pago).
	2. IF Node → Verifica tipo de membresía (hora / día / semana / mes).
	3. Notion Node → Crea registro en “Clientes coworking” + fecha de inicio y expiración.
	4. Email Node → Envía correo con:
		○ Acceso WiFi Premium
		○ Factura (PDF)
		○ Mensaje de bienvenida
	5. Notion Node → Actualiza base “Membresías activas”.
	6. Function Node → Resta días válidos cada noche (usando un Cron Node diario).
	7. If Node → Si faltan 3 días para vencimiento →
		○ Envía recordatorio por WhatsApp o Email:
“Hola 👋, tu membresía Kakaw termina en 3 días. Renueva ahora y recibe un 10% de descuento ☕”

3️⃣ Monitoreo de ocupación
🧩 Workflow: Kakaw_Desk_Monitor
	1. Cron Node → Corre cada 10 minutos.
	2. Notion Query → Cuenta cuántas membresías están activas.
	3. Function Node → Calcula disponibilidad (8 lugares – ocupados = libres).
	4. Notion Update → Actualiza “Tablero de ocupación”.
	5. (Opcional) Webhook Node conectado a WhatsApp:
		○ Si alguien escribe “¿Hay lugares disponibles?”
		○ n8n responde automáticamente con el número actual de hot desks libres.

4️⃣ Reporte de ingresos coworking
🧩 Workflow: Kakaw_Coworking_Income
	1. Trigger diario → Cron a las 22:00.
	2. Query Notion → Extrae membresías activas del día.
	3. Function Node → Calcula ingresos brutos y netos (restando costo por bebida incluida).
	4. Update Notion Node → Actualiza “Ganancias coworking”.
	5. Email Node → Envía resumen diario.

⚙️ 3️⃣ Integración final (opcional)
Una vez que los módulos 1 y 2 estén funcionando:
Crea un Workflow maestro: Kakaw_Dashboard_Update que combine:
	• Ingresos cafetería + coworking
	• Reporte de inventario
	• Alertas de stock
	• Ocupación actual
	• Total neto diario
y actualice un panel central en Notion o Google Data Studio (Looker) con:
	• Gráficas semanales
	• Margen de utilidad neta
	• Productos más vendidos
	• Tasa de ocupación coworking

🧱 Estructura recomendada de bases en Notion
Base	Campos clave
Ventas diarias	Fecha, total, propinas, comisiones, utilidad neta
Inventario de insumos	Nombre, cantidad, unidad, threshold, proveedor
Clientes coworking	Nombre, email, plan, fecha inicio, expiración, método pago
Membresías activas	Plan, fecha inicio, expiración, status
Ganancias coworking	Día, ingresos brutos, netos, membresías vendidas
Tablero de ocupación	Día, lugares ocupados, lugares disponibles

🧠 Tips para construir el “esqueleto” ahora (sin operaciones aún)
	1. Crea bases vacías en Notion con las columnas que n8n usará.
	2. Simula ventas con un spreadsheet para probar el workflow.
	3. Usa Webhooks dummy para Stripe/MercadoPago hasta tener la integración real.
	4. Prueba los triggers con Manual Execution en n8n.
	5. Guarda cada flujo en un folder distinto:
		○ /Cafe_Operations/
		○ /Coworking/
		○ /Reports/


Parte A — Preparar cuentas y credenciales (pre-requisitos)
	1. Crear cuenta en n8n Cloud (recomendado para empezar).
		○ URL: https://app.n8n.io — regístrate y confirma email.
		○ Guarda tu workspace y API key si aplica.
	2. Crear cuenta en Notion (si no la tienes).
		○ workspace → crea una página principal Kakaw Automations.
	3. Crear cuenta en Stripe (o Mercado Pago) en modo test.
	4. Crear cuenta en Twilio (para WhatsApp Business) o WATI — consigue credenciales API, número de WhatsApp.
	5. Configurar Gmail / Sendinblue para enviar correos desde n8n (tener usuario/contraseña o API key).
	6. (Opcional) POS: si no tienes POS aún, usa Google Sheets o Airtable como fuente simulada de ventas para pruebas.
	7. Ten a mano: IDs y tokens de Notion Integration (create integration, share DB with integration), Stripe test keys, Twilio SID/Auth Token, Gmail SMTP or API key.

Parte B — Crear las bases (Notion) — paso a paso literal
Voy a crear las bases mínimas que usará n8n. Haz esto dentro del workspace de Notion.
1) Crear integración y obtener token
	1. En Notion → Settings & Members → Integrations → Develop your own integrations → New integration.
	2. Nombre: Kakaw n8n Integration. Permissions: select Read, update, insert, delete (para las DB que necesitarás). Copia el Internal Integration Token y guárdalo en un lugar seguro.
2) Crear bases (databases)
Para cada DB, crea una Page → Add → Database → Table (full page). Dale los nombres exactos y campos exactos que usarás.
A. Ventas Diarias
Campos (propiedades):
	• Fecha (Date)
	• TicketID (Text)
	• Producto (Text)
	• Categoria (Select: Espresso, Latte, Cold, Matcha, Soda, Pasteleria, Coworking)
	• Cantidad (Number)
	• PrecioUnitario (Number, MXN)
	• Propina (Number, MXN)
	• MetodoPago (Select: Efectivo, Tarjeta, MercadoPago, Otro)
	• ComisionTarjeta (Number)
	• TotalLinea (Formula: Cantidad * PrecioUnitario)
	• TotalConPropina (Formula: TotalLinea + Propina)
	Compartir esta DB con la integración: en la esquina superior derecha Share → buscar Kakaw n8n Integration y darle acceso.
B. Inventario de Insumos
Campos:
	• Insumo (Title)
	• Cantidad (Number) — usar unidad en nota (g, kg, L)
	• Unidad (Select: kg, g, L, uds)
	• Threshold (Number) — cantidad mínima para alerta
	• ÚltimaActualizacion (Date)
	• Proveedor (Text)
	• CostoUnidad (Number)
	• Notas (Text)
Compartir con integración.
C. Clientes Coworking
Campos:
	• Nombre (Title)
	• Email (Email)
	• Telefono (Phone)
	• Plan (Select: Ora, Giorno, Settimana, Mese)
	• Fecha Inicio (Date)
	• Fecha Vencimiento (Date)
	• Estado (Select: Activa, Expirada, Pendiente)
	• ID Pago (Text)
	• MetodoPago (Select)
Compartir con integración.
D. Membresías / Ocupación
Campos:
	• Fecha (Date)
	• PuestosTotales (Number) — por ejemplo 8
	• PuestosOcupados (Number)
	• PuestosLibres (Formula: PuestosTotales - PuestosOcupados)
	• Notas (Text)
Compartir con integración.
E. Ganancias
Campos:
	• Fecha (Date)
	• IngresosBrutos (Number)
	• ComisionesPago (Number)
	• Insumos (Number)
	• GastosEnergiaAgua (Number)
	• Propinas (Number)
	• IngresoNeto (Formula: IngresosBrutos - ComisionesPago - Insumos - GastosEnergiaAgua)
Compartir con integración.

Parte C — Primeros workflows en n8n — paso a paso literal
Voy a detallar workflow por workflow con nombres de nodos, parámetros mínimos y cómo probar.
	Nota: asumo que usas n8n Cloud. La interfaz: botón New Workflow → pon nombre → arrastra nodos.

Workflow A — Simulate_Sale_Post (para pruebas locales)
Propósito: enviar ventas de prueba desde Postman o formulario a n8n para validar pipelines.
	1. Crear nuevo workflow: Simulate_Sale_Post.
	2. Añadir nodo: Webhook (Trigger)
		○ HTTP Method: POST
		○ Path: simulate-sale (n8n te dará URL)
		○ Response Mode: On Received → Return: 200 OK con JSON de confirmación.
	3. Añadir nodo: Set (transform) — opcional para ajustar payload. Mapea campos: TicketID, Producto, Cantidad, PrecioUnitario, Propina, MetodoPago.
	4. Añadir nodo: Notion → Operation: Create Database Item → Resource: Database (select Ventas Diarias)
		○ Mapear propiedades: Title -> TicketID, Fecha -> current date, Producto -> Producto, etc.
	5. Añadir nodo: HTTP Response or let Webhook return. Deploy.
Probar: Con Postman, POST JSON to the webhook URL:

{ "TicketID":"T-001", "Producto":"Espresso Singolo", "Cantidad":1, "PrecioUnitario":55, "Propina":5, "MetodoPago":"Tarjeta" }
Deberías ver una fila nueva en Notion Ventas Diarias.

Workflow B — Daily_Report_and_Charts
Propósito: sumar ventas del día, calcular comisiones, propinas, actualizar Ganancias, y crear pie chart.
	1. New Workflow Daily_Report_and_Charts.
	2. Add node: Cron
		○ Execute: Daily at 20:45 (10–15 min after close).
	3. Add node: Notion → Operation: Get Database Items → Database: Ventas Diarias
		○ Filter: Fecha is today (use expression) — n8n expressions: {{$today}} or use function to compute date range.
	4. Add node: Function → calculate totals. Example JS code inside Function node:

const items = $input.all();
let ingresosBrutos = 0;
let propinas = 0;
let comisiones = 0;
let insumosEstimados = 0; // placeholder, can be computed or fetched
items.forEach(i => {
  const p = i.json.PrecioUnitario || 0;
  const c = i.json.Cantidad || 1;
  const tip = i.json.Propina || 0;
  const metodo = i.json.MetodoPago || '';
  ingresosBrutos += p * c;
  propinas += tip;
  if (metodo === 'Tarjeta') comisiones += (p*c)*0.035; // 3.5%
});
const gastosEnergiaAgua = 4500/30; // ejemplo por dia si lo divides
const ingresoNeto = ingresosBrutos - comisiones - insumosEstimados - gastosEnergiaAgua;
return [{ json: { ingresosBrutos, propinas, comisiones, gastosEnergiaAgua, ingresoNeto } }];
	1. Add node: Notion → Create item in Ganancias with those numbers mapped.
	2. Add node: Chart (or use Function -> generate Chart via QuickChart.io)
		○ If using QuickChart: HTTP Request to https://quickchart.io/chart/create with payload chart config, get URL/image.
	3. Add node: Gmail or Sendinblue → Send email to you with chart image and summary.
	4. Deploy and test (run manually).

Workflow C — Inventory_Update_and_Threshold
Propósito: actualizar Inventario restando consumo por ventas y alertar por WhatsApp.
	1. New Workflow Inventory_Update_and_Threshold.
	2. Trigger: run after the Daily_Report_and_Charts (you can chain or schedule shortly after).
	3. Node: Notion → Get Database Items Inventario de Insumos (get all).
	4. Node: Notion → Get Database Items Ventas Diarias (today).
	5. Node: Function → Map product usages to ingredients. This requires a recipe mapping table you should maintain (e.g., Espresso uses 18 g coffee, Cappuccino uses 18 g + 150 ml milk, etc.). Example logic:

// pseudo: iterate sales, for each product update consumption map
	1. Node: Notion → Update Database Item for each Insumo with new Cantidad and ÚltimaActualizacion.
	2. Node: IF → check if Cantidad < Threshold. If true → proceed to WhatsApp alert.
	3. Node: Twilio (WhatsApp) → Send Message to supplier/your WhatsApp:
		○ Message: Stock bajo: {Insumo} - {Cantidad} {Unidad}. Por favor reabastecer.
Testing: use test sales with products consuming known grams and verify Notion inventory decrements accordingly and triggers alerts.

Workflow D — Coworking_Payment_Handler
Propósito: recibir webhook de Stripe/MercadoPago, crear cliente en Notion, enviar correo/WhatsApp con acceso y factura.
	1. New workflow Coworking_Payment_Handler.
	2. Node: Webhook — path coworking-payment — set to receive Stripe webhook (checkout.session.completed) (for Mercado Pago use respective webhook).
	3. Node: Function — map webhook payload to fields: email, name, amount_total, plan_id.
	4. Node: Notion → Create Database Item in Clientes Coworking: fill Nombre, Email, Plan, Fecha Inicio (today), Fecha Vencimiento (compute based on plan).
	5. Node: Stripe node (optional) → Retrieve charge / invoice details.
	6. Node: Gmail → Send welcome email with: access instructions to WiFi (password or link), invoice PDF (you can generate PDF via HTML -> PDF service), and welcome message.
	7. Node: Twilio → Send WhatsApp message with brief confirmation and link to booking portal or occupancy info.
	8. Node: Notion → Update Membresías / Ocupación database (increment PuestosOcupados for the day/time-slot if you track time slots).
Testing: Use Stripe test checkout, simulate webhook via Stripe dashboard to the n8n webhook URL.

Workflow E — Occupancy_Check_WhatsApp
Propósito: responder a consultas WhatsApp “¿Hay lugares?” y devolver número de hot desks libres.
	1. Create workflow Occupancy_Check_WhatsApp.
	2. Node: Webhook (if Twilio sends inbound webhook) or Twilio Trigger node to receive incoming WhatsApp.
	3. Node: Function → parse message text; if contains keywords (disponible, lugares, available) continue.
	4. Node: Notion → Query Membresías / Ocupación → get PuestosTotales and PuestosOcupados for today.
	5. Node: Function → compute libres = PuestosTotales - PuestosOcupados.
	6. Node: Twilio → Send message: Hoy hay X puestos libres ahora. Puedes reservar aquí: <link> or instructions.

Workflow F — Membership_Renewal_Reminder
Propósito: enviar recordatorios 3 días antes expiración.
	1. Cron node → daily at 10:00.
	2. Notion → Query Clientes Coworking where Fecha Vencimiento is in 3 days and Estado = Activa.
	3. For each result: Gmail → send reminder email. Twilio → send WhatsApp reminder. Optionally include one-click payment link (Stripe) for renewal.
	4. Update Notion to indicate ReminderSent (new checkbox field).

Parte D — Consejos prácticos y pruebas
	• Env vars / Credentials: In n8n, set up Credential items (Notion API token, Stripe keys, Twilio keys, Gmail API) and reference them in nodes. Do not hardcode tokens in Function nodes.
	• Testing: Use Postman & Stripe test mode. For Twilio, use test numbers or WhatsApp sandbox during dev.
	• Error handling: Add Error Trigger node and create notifications (email to you) on any failed workflow.
	• Idempotency: Ensure workflows check if a Notion item already exists (search by TicketID or Stripe Payment Intent ID) before creating duplicates.
	• Logging: Create a Notion DB n8n Logs to push success/failure entries from workflows for audit.
	• Backups: Periodically export Notion DB to CSV.

Parte E — Qué construir primero (roadmap mínimo viable)
	1. Create Notion DBs and integration token (takes 30 min).
	2. Deploy Simulate_Sale_Post webhook + test writing to Ventas Diarias (1–2 h).
	3. Build Daily_Report_and_Charts using Notion query + QuickChart (3–4 h).
	4. Build Inventory_Update_and_Threshold simple version (map 3 products to coffee/milk usage) (4–6 h).
	5. Create Coworking_Payment_Handler with Stripe test (4–8 h).
	6. Create Occupancy_Check_WhatsApp (Twilio) and Membership_Renewal_Reminder (2–3 h).
	7. Polish, add error handling, UI links (Notion dashboard) (2–3 days total).
<img width="935" height="6208" alt="image" src="https://github.com/user-attachments/assets/bf420635-90f2-4b0d-ba8a-d06cadb565b7" />

