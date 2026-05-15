import {
  ArrowRight,
  ChefHat,
  Clock,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Soup,
  Sparkles,
  Utensils,
} from 'lucide-react'
import { menuData, restaurantInfo } from './data/menuData'

const heroImage =
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85'
const tableImage =
  'https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=1200&q=85'
const foodImage =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85'

function whatsappUrl() {
  const text = encodeURIComponent('Hola Casa Nadia, me gustaría hacer una reserva.')
  return `https://wa.me/${restaurantInfo.whatsapp}?text=${text}`
}

function Header({ page }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/75 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#/" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <span className="grid size-10 place-items-center rounded-full border border-amber-200/35 bg-amber-100/10">
            <Utensils className="size-5 text-amber-100" />
          </span>
          <span>
            <span className="block font-serif text-lg leading-none tracking-wide">Casa Nadia</span>
            <span className="block text-xs uppercase tracking-[0.24em] text-amber-100/75">Driebes</span>
          </span>
        </a>

        <nav className="flex items-center gap-2 text-sm font-medium">
          <a
            className={`rounded-full px-4 py-2 transition ${page === 'home' ? 'bg-white text-stone-950' : 'text-stone-100 hover:bg-white/10'}`}
            href="#/"
          >
            Inicio
          </a>
          <a
            className={`rounded-full px-4 py-2 transition ${page === 'menu' ? 'bg-white text-stone-950' : 'text-stone-100 hover:bg-white/10'}`}
            href="#/carta"
          >
            Carta
          </a>
        </nav>
      </div>
    </header>
  )
}

function ButtonLink({ href, children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-wine text-white shadow-lg shadow-wine/20 hover:bg-wine-dark',
    secondary: 'bg-cream text-stone-950 ring-1 ring-stone-900/10 hover:bg-white',
    outline: 'bg-white/8 text-white ring-1 ring-white/20 hover:bg-white/15',
  }

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
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
            alt="Mesa de restaurante con platos caseros servidos"
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
                Un sitio de pueblo para comer bien, compartir mesa y disfrutar de platos de siempre con una presentación cuidada.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#/carta">
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
              ['Comida casera', 'Raciones, carnes, pescados y postres con sabor de siempre.', ChefHat],
              ['Ambiente cercano', 'Una casa para entrar sin prisa y quedarse alrededor de la mesa.', Soup],
              ['En Driebes', 'Perfecto para vecinos, visitantes y comidas tranquilas de fin de semana.', MapPin],
            ].map(([title, text, Icon]) => (
              <article key={title} className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
                <Icon className="mb-5 size-7 text-olive" />
                <h2 className="font-serif text-2xl text-stone-950">{title}</h2>
                <p className="mt-3 leading-7 text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-kicker">Casa Nadia</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                Una web sencilla, bonita y pensada para que la carta se lea bien desde el móvil.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-650">
                Esta primera versión deja preparada la base visual: fotos amplias, botones útiles y una carta estructurada por categorías para cambiar platos y precios sin rehacer el diseño.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border-l-4 border-wine bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wine">QR listo</p>
                  <p className="mt-2 text-stone-650">La página de carta se abre directamente en `/carta`.</p>
                </div>
                <div className="border-l-4 border-olive bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive">Editable</p>
                  <p className="mt-2 text-stone-650">Platos, precios, horario y contacto viven en datos claros.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img className="h-80 w-full rounded-lg object-cover sm:mt-16" src={foodImage} alt="Plato casero servido en mesa" />
              <img className="h-80 w-full rounded-lg object-cover" src={tableImage} alt="Mesa acogedora preparada en restaurante" />
            </div>
          </div>
        </section>

        <section className="bg-stone-950 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="section-kicker text-amber-100">Reserva y consulta</p>
              <h2 className="mt-3 font-serif text-4xl">Ven a comer a Casa Nadia</h2>
              <p className="mt-4 max-w-2xl text-stone-300">
                Actualiza aquí el teléfono real y la dirección exacta cuando los tengamos cerrados.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href={whatsappUrl()}>
                <Phone className="size-4" /> WhatsApp
              </ButtonLink>
              <ButtonLink href="#/carta" variant="outline">
                <MenuIcon className="size-4" /> Carta
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function MenuPage() {
  return (
    <div className="min-h-screen bg-cream text-stone-950">
      <Header page="menu" />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="grid gap-8 border-b border-stone-250 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">Carta completa</p>
            <h1 className="mt-3 font-serif text-5xl leading-none text-stone-950 sm:text-7xl">Casa Nadia</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-650">
              Carta provisional para revisar desde el QR. Los platos y precios están separados en datos editables para actualizarla con rapidez.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-stone-200">
            <div className="grid gap-4 sm:grid-cols-3">
              <InfoPill icon={MapPin} label="Ubicación" value={restaurantInfo.town} />
              <InfoPill icon={Clock} label="Horario" value="Consultar" />
              <InfoPill icon={Phone} label="Reserva" value="WhatsApp" />
            </div>
          </div>
        </section>

        <nav className="sticky top-[73px] z-40 -mx-4 mb-8 overflow-x-auto border-b border-stone-200 bg-cream/95 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex min-w-max gap-2">
            {menuData.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-stone-250 bg-white px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-wine hover:text-wine"
              >
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="grid gap-6 lg:grid-cols-2">
          {menuData.map((section) => (
            <section id={section.id} key={section.id} className="scroll-mt-36 rounded-lg bg-white p-5 shadow-sm ring-1 ring-stone-200 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <h2 className="font-serif text-3xl text-stone-950">{section.title}</h2>
                <span className="rounded-full bg-olive/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-olive">
                  {section.items.length} platos
                </span>
              </div>

              <div className="space-y-5">
                {section.items.map((item) => (
                  <article key={item.name} className="menu-item">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-snug text-stone-950">{item.name}</h3>
                      {item.description && <p className="mt-1 leading-6 text-stone-600">{item.description}</p>}
                      {item.allergens && (
                        <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
                          Alérgenos: {item.allergens}
                        </p>
                      )}
                    </div>
                    <p className="shrink-0 rounded-full bg-cream px-3 py-1 text-base font-bold text-wine">{item.price}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

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
    </div>
  )
}

function InfoPill({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-full bg-olive/10 text-olive">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{label}</span>
        <span className="block font-semibold text-stone-950">{value}</span>
      </span>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-cream px-4 py-10 text-stone-700 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 border-t border-stone-250 pt-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-stone-950">{restaurantInfo.name}</p>
          <p className="mt-2">{restaurantInfo.address}</p>
        </div>
        <div>
          <p className="font-semibold text-stone-950">Horario</p>
          <p className="mt-2">{restaurantInfo.hours}</p>
        </div>
        <div className="md:text-right">
          <p className="font-semibold text-stone-950">Contacto</p>
          <a className="mt-2 inline-block hover:text-wine" href={`tel:${restaurantInfo.phone.replaceAll(' ', '')}`}>
            {restaurantInfo.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const path = window.location.pathname
  return path === '/carta' ? <MenuPage /> : <HomePage />
}
