import {
  ArrowRight,
  CalendarDays,
  ChefHat,
  Clock,
  Flame,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Soup,
  Sparkles,
  Truck,
  Utensils,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { breakfastMenuData, foodMenuData, menuData, restaurantInfo } from "./data/menuData";
import heroImage from "./assets/casa-nadia-hero.png";
import menuDelDiaImage from "./assets/menu-del-dia.png";
import pollosAsadosImage from "./assets/pollos-asados.png";

function whatsappUrl() {
  const text = encodeURIComponent(
    "Hola Casa Nadia, me gustaría hacer una reserva.",
  );
  return `https://wa.me/${restaurantInfo.whatsapp}?text=${text}`;
}

function Header({ page }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/75 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="/"
          className="group flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <span className="grid size-10 place-items-center rounded-full border border-amber-200/35 bg-amber-100/10">
            <Utensils className="size-5 text-amber-100" />
          </span>
          <span>
            <span className="block font-serif text-lg leading-none tracking-wide">
              Casa Nadia
            </span>
            <span className="block text-xs uppercase tracking-[0.24em] text-amber-100/75">
              Driebes
            </span>
          </span>
        </a>

        <nav className="flex items-center gap-2 text-sm font-medium">
          <a
            className={`rounded-full px-4 py-2 transition ${page === "home" ? "bg-white text-stone-950" : "text-stone-100 hover:bg-white/10"}`}
            href="/"
          >
            Inicio
          </a>
          <a
            className={`rounded-full px-4 py-2 transition ${page === "menu" ? "bg-white text-stone-950" : "text-stone-100 hover:bg-white/10"}`}
            href="/carta/"
          >
            Carta
          </a>
        </nav>
      </div>
    </header>
  );
}

function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const variants = {
    primary: "bg-wine text-white shadow-lg shadow-wine/20 hover:bg-wine-dark",
    secondary:
      "bg-cream text-stone-950 ring-1 ring-stone-900/10 hover:bg-white",
    outline: "bg-white/8 text-white ring-1 ring-white/20 hover:bg-white/15",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function HomePage() {
  return (
    <div className="bg-cream text-stone-950">
      <Header page="home" />

      <main>
        <section className="relative min-h-[92svh] overflow-hidden bg-stone-950 text-white">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-58"
            src={heroImage}
            alt="Fachada del restaurante Casa Nadia"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,20,14,0.92),rgba(28,20,14,0.68)_45%,rgba(28,20,14,0.25))]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />

          <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-100/25 bg-white/10 px-4 py-2 text-sm font-medium text-amber-50 backdrop-blur">
                <Sparkles className="size-4" />
                Cocina casera en el corazón de Driebes
              </p>
              <h1 className="font-serif text-5xl leading-[0.95] text-amber-50 sm:text-7xl lg:text-8xl">
                Restaurante Casa Nadia
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl">
                Un sitio de pueblo para comer bien, compartir mesa y disfrutar
                de platos de siempre con una presentación cuidada.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/carta/">
                  Ver carta completa <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink href={whatsappUrl()} variant="outline">
                  <Phone className="size-4" /> Reservar por WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-8 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {[
              [
                "Comida casera",
                "Raciones, platos combinados, hamburguesas y postres con sabor de siempre.",
                ChefHat,
              ],
              [
                "Ambiente cercano",
                "Una casa para entrar sin prisa y quedarse alrededor de la mesa.",
                Soup,
              ],
              [
                "En Driebes",
                "Perfecto para vecinos, visitantes y comidas tranquilas de fin de semana.",
                MapPin,
              ],
            ].map(([title, text, Icon]) => (
              <article
                key={title}
                className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
              >
                <Icon className="mb-5 size-7 text-olive" />
                <h2 className="font-serif text-2xl text-stone-950">{title}</h2>
                <p className="mt-3 leading-7 text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <div className="mx-auto max-w-4xl">
              <p className="section-kicker">Casa Nadia</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                Ven a disfrutar en Casa Nadia
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-650">
                Los fines de semana, el restaurante se llena de vecinos y visitantes que vienen a disfrutar de nuestra comida casera y el ambiente acogedor. Es un lugar perfecto para compartir una comida tranquila, celebrar ocasiones especiales o simplemente desconectar alrededor de una buena mesa. ¡Te esperamos para que formes parte de la familia de Casa Nadia!
              </p>
            </div>
            <div className="mt-12 grid gap-8 text-left">
              <article className="grid overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-stone-200 lg:grid-cols-[1.08fr_0.92fr]">
                <img
                  className="h-80 w-full object-cover sm:h-[28rem] lg:h-full"
                  src={pollosAsadosImage}
                  alt="Pollos asados girando en el asador"
                />
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-wine">
                    <Flame className="size-4" /> Por encargo
                  </p>
                  <h3 className="mt-3 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                    Pollos asados listos para llevar
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-stone-650">
                    Pollos dorados en el asador, preparados bajo pedido para
                    llevar y compartir en casa. Una opción cómoda para comidas
                    familiares, fines de semana o días en los que apetece
                    resolver la mesa sin complicarse.
                  </p>
                  <div className="mt-5 grid gap-2 text-stone-800">
                    <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-2">
                      <span>Pollo asado</span>
                      <span className="font-bold text-wine">10,00 €</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Pollo asado con patatas y pimiento</span>
                      <span className="font-bold text-wine">13,00 €</span>
                    </div>
                  </div>
                  <div className="mt-7">
                    <ButtonLink href={whatsappUrl()}>
                      <Phone className="size-4" /> Encargar por WhatsApp
                    </ButtonLink>
                  </div>
                </div>
              </article>

              <article className="grid overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-stone-200 lg:grid-cols-[0.92fr_1.08fr]">
                <img
                  className="h-80 w-full object-cover sm:h-[28rem] lg:order-last lg:h-full"
                  src={menuDelDiaImage}
                  alt="Plato casero de menú del día con patatas, pimientos y carne"
                />
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-olive">
                    <CalendarDays className="size-4" /> Entre semana
                  </p>
                  <h3 className="mt-3 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                    Menús del día
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-stone-650">
                    También tenemos menús del día con platos sencillos,
                    abundantes y de cocina casera. Una opción cercana para comer
                    bien a diario en Casa Nadia.
                  </p>
                  <div className="mt-5 grid gap-2 text-stone-800">
                    <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-2">
                      <span>Entre semana</span>
                      <span className="font-bold text-wine">15,00 €</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Fin de semana</span>
                      <span className="font-bold text-wine">22,00 €</span>
                    </div>
                  </div>
                  <div className="mt-7">
                    <ButtonLink href="/carta/" variant="secondary">
                      <MenuIcon className="size-4" /> Ver carta
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section className="bg-cream px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg bg-white p-6 shadow-sm ring-1 ring-stone-200 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-wine">
                  <Truck className="size-4" /> Pedidos a domicilio
                </p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950">
                  También llevamos Casa Nadia a casa
                </h2>
                <p className="mt-4 leading-7 text-stone-650">
                  Haz tu pedido por WhatsApp y te confirmamos disponibilidad,
                  horario de entrega y tiempo aproximado.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-lg bg-cream p-5 ring-1 ring-stone-200">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
                    Driebes
                  </p>
                  <p className="mt-3 text-lg font-semibold text-stone-950">
                    Pedido mínimo 15,00 €
                  </p>
                </article>

                <article className="rounded-lg bg-cream p-5 ring-1 ring-stone-200">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
                    Almoguera, Mazuecos, Ambite y Mondéjar
                  </p>
                  <p className="mt-3 text-lg font-semibold text-stone-950">
                    Pedido mínimo 20,00 € + 3,00 € de transporte
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-stone-950 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="section-kicker text-amber-100">
                Reserva y consulta
              </p>
              <h2 className="mt-3 font-serif text-4xl">
                Ven a comer a Casa Nadia
              </h2>
           
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href={whatsappUrl()}>
                <Phone className="size-4" /> WhatsApp
              </ButtonLink>
              <ButtonLink href="/carta/" variant="outline">
                <MenuIcon className="size-4" /> Carta
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function MenuPage() {
  const [showHours, setShowHours] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-stone-950">
      <Header page="menu" />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="grid gap-8 border-b border-stone-250 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">Carta completa</p>
            <h1 className="mt-3 font-serif text-5xl leading-none text-stone-950 sm:text-7xl">
              Casa Nadia
            </h1>
           
          </div>
          <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-stone-200">
            <div className="grid gap-4 sm:grid-cols-3">
              <InfoPill
                icon={MapPin}
                label="Ubicación"
                value={restaurantInfo.town}
              />
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-olive/10 text-olive">
                  <Clock className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                    Horario
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowHours(true)}
                    className="block font-semibold text-stone-950 underline decoration-wine/35 underline-offset-4 transition hover:text-wine"
                  >
                    Consultar horarios
                  </button>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-olive/10 text-olive">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                    Reserva
                  </span>
                  <a
                    href={whatsappUrl()}
                    className="block font-semibold text-stone-950 underline decoration-wine/35 underline-offset-4 transition hover:text-wine"
                  >
                    Reservar por WhatsApp
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="my-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-stone-200">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-wine">
              <Flame className="size-4" /> Por encargo
            </p>
            <h2 className="mt-2 font-serif text-3xl text-stone-950">
              Pollos asados
            </h2>
            <p className="mt-3 leading-7 text-stone-650">
              Preparamos pollos asados bajo pedido. Consulta disponibilidad y
              horario para recoger.
            </p>
            <div className="mt-4 grid gap-2 text-stone-800">
              <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-2">
                <span>Pollo asado</span>
                <span className="font-bold text-wine">10,00 €</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Pollo asado con patatas y pimiento</span>
                <span className="font-bold text-wine">13,00 €</span>
              </div>
            </div>
            <ButtonLink href={whatsappUrl()} className="mt-5">
              <Phone className="size-4" /> Encargar
            </ButtonLink>
          </article>

          <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-stone-200">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-olive">
              <CalendarDays className="size-4" /> Entre semana
            </p>
            <h2 className="mt-2 font-serif text-3xl text-stone-950">
              Menú del día
            </h2>
            <p className="mt-3 leading-7 text-stone-650">
              También tenemos menú del día con cocina casera. Pregunta por los
              platos disponibles en el restaurante.
            </p>
            <div className="mt-4 grid gap-2 text-stone-800">
              <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-2">
                <span>Entre semana</span>
                <span className="font-bold text-wine">15,00 €</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Fin de semana</span>
                <span className="font-bold text-wine">22,00 €</span>
              </div>
            </div>
            <ButtonLink href={whatsappUrl()} variant="secondary" className="mt-5">
              <Phone className="size-4" /> Consultar
            </ButtonLink>
          </article>
        </section>

        <nav className="sticky top-[65px] z-40 -mx-4 mb-8 overflow-x-auto border-b border-stone-200 bg-cream/95 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex min-w-max gap-2">
            {[
              { id: "desayunos", title: "Desayunos", mobileTitle: "Desayunos" },
              { id: "comida-cena", title: "Comida y cena", mobileTitle: "Comida" },
              ...foodMenuData.map((section) => ({
                id: section.id,
                title: section.title,
                mobileTitle:
                  section.title === "Platos Combinados" ? "Platos" : section.title,
              })),
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-stone-250 bg-white px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-wine hover:text-wine"
              >
                <span className="sm:hidden">{section.mobileTitle}</span>
                <span className="hidden sm:inline">{section.title}</span>
              </a>
            ))}
          </div>
        </nav>

        <MenuBlock id="desayunos" title="Desayunos" sections={breakfastMenuData} />
        <MenuBlock id="comida-cena" title="Comida y cena" sections={foodMenuData} />

        <section className="mt-10 rounded-lg bg-stone-950 p-6 text-white sm:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-3xl">¿Quieres reservar?</h2>
              <p className="mt-2 text-stone-300">{restaurantInfo.note}</p>
            </div>
            <ButtonLink href={whatsappUrl()}>
              <Phone className="size-4" /> Contactar
            </ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
      {showHours && <HoursModal onClose={() => setShowHours(false)} />}
    </div>
  );
}



function HoursModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-stone-950/65 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hours-modal-title"
    >
      <div className="w-full max-w-md rounded-lg bg-cream p-6 shadow-2xl ring-1 ring-stone-200">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Horario</p>
            <h2 id="hours-modal-title" className="mt-2 font-serif text-3xl text-stone-950">
              Casa Nadia
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 place-items-center rounded-full bg-white text-stone-700 ring-1 ring-stone-200 transition hover:text-wine"
            aria-label="Cerrar horarios"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-6 rounded-lg bg-white p-5 ring-1 ring-stone-200">
          <p className="whitespace-pre-line font-semibold leading-7 text-stone-950">
            {restaurantInfo.hours}
          </p>
          <p className="mt-4 leading-7 text-stone-650">
            Para encargos de pollos asados o dudas sobre el menú del día,
            consúltanos por WhatsApp.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={whatsappUrl()} className="sm:flex-1">
            <Phone className="size-4" /> WhatsApp
          </ButtonLink>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-stone-950 ring-1 ring-stone-200 transition hover:bg-stone-50 sm:flex-1"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
function MenuBlock({ id, title, sections }) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="mb-6 mt-10 flex items-center gap-4">
        <h2 className="font-serif text-4xl text-stone-950">{title}</h2>
        <span className="h-px flex-1 bg-stone-250" aria-hidden="true" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {sections.map((section) => (
          <section
            id={section.id}
            key={section.id}
            className="scroll-mt-36 rounded-lg bg-white p-5 shadow-sm ring-1 ring-stone-200 sm:p-7"
          >
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <h3 className="font-serif text-3xl text-stone-950">
                {section.title}
              </h3>
              <span className="rounded-full bg-olive/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-olive">
                {section.items.length} platos
              </span>
            </div>

            <div className="space-y-5">
              {section.items.map((item) => (
                <article key={item.name} className="menu-item">
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold leading-snug text-stone-950">
                      {item.name}
                    </h4>
                    {item.description && (
                      <p className="mt-1 leading-6 text-stone-600">
                        {item.description}
                      </p>
                    )}
                    {item.allergens && (
                      <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
                        Alérgenos: {item.allergens}
                      </p>
                    )}
                  </div>
                  <p className="shrink-0 rounded-full bg-cream px-3 py-1 text-base font-bold text-wine">
                    {item.price}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
function InfoPill({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-full bg-olive/10 text-olive">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          {label}
        </span>
        <span className="block font-semibold text-stone-950">{value}</span>
      </span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-cream px-4 py-10 text-stone-700 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 border-t border-stone-250 pt-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-stone-950">
            {restaurantInfo.name}
          </p>
          <p className="mt-2">{restaurantInfo.address}</p>
        </div>
        <div>
          <p className="font-semibold text-stone-950">Horario</p>
          <p className="mt-2 whitespace-pre-line">{restaurantInfo.hours}</p>
        </div>
        <div className="md:text-right">
          <p className="font-semibold text-stone-950">Contacto</p>
          <a
            className="mt-2 inline-block hover:text-wine"
            href={`tel:${restaurantInfo.phone.replaceAll(" ", "")}`}
          >
            {restaurantInfo.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const path = window.location.pathname;
  const currentPage = path === "/carta" || path.startsWith("/carta/") ? "menu" : "home";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  return currentPage === "menu" ? <MenuPage /> : <HomePage />;
}

