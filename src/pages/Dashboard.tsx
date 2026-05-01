import { useState } from 'react';
import {
  LayoutDashboard, Server, CreditCard, LifeBuoy,
  Settings, Power, RefreshCw, Terminal,
  Cpu, HardDrive, Wifi, Plus, Bell,
  ChevronRight, Activity, ExternalLink, LogOut,
  Circle, Zap, Menu, X,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Types & Data
───────────────────────────────────────────── */
interface ServerData {
  id: number;
  name: string;
  ip: string;
  status: 'Online' | 'Offline' | 'Reiniciando';
  ram: string;
  ramUsed: number;
  cpu: number;
  disk: number;
  plan: string;
  game: string;
  uptime: string;
}

const servers: ServerData[] = [
  {
    id: 1, name: 'Survival World', ip: '145.2.11.43:25565',
    status: 'Online', ram: '8 GB', ramUsed: 62, cpu: 38, disk: 45,
    plan: 'Avanzado', game: 'Minecraft', uptime: '14d 6h 22m'
  },
  {
    id: 2, name: 'Lobby Principal', ip: '145.2.11.44:25565',
    status: 'Offline', ram: '4 GB', ramUsed: 0, cpu: 0, disk: 22,
    plan: 'Básico', game: 'Minecraft', uptime: '—'
  },
  {
    id: 3, name: 'Skywars Event', ip: '145.2.11.45:25565',
    status: 'Online', ram: '16 GB', ramUsed: 45, cpu: 21, disk: 33,
    plan: 'Premium', game: 'Minecraft', uptime: '3d 11h 5m'
  },
  {
    id: 4, name: 'Bot Discord #1', ip: '—',
    status: 'Reiniciando', ram: '2 GB', ramUsed: 80, cpu: 5, disk: 10,
    plan: 'Básico', game: 'Discord Bot', uptime: '—'
  },
];

const statusColor = {
  Online:      { dot: 'bg-green-400',                badge: 'bg-green-400/10 text-green-400 border-green-400/30',   glow: 'shadow-[0_0_12px_rgba(74,222,128,0.3)]' },
  Offline:     { dot: 'bg-red-400',                  badge: 'bg-red-400/10 text-red-400 border-red-400/30',         glow: '' },
  Reiniciando: { dot: 'bg-yellow-400 animate-pulse', badge: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30', glow: 'shadow-[0_0_12px_rgba(250,204,21,0.25)]' },
};

const navItems = [
  { icon: <LayoutDashboard size={19} />, mobileIcon: <LayoutDashboard size={22} />, label: 'Inicio',        active: true  },
  { icon: <Server size={19} />,          mobileIcon: <Server size={22} />,          label: 'Servidores',   active: false },
  { icon: <Terminal size={19} />,        mobileIcon: <Terminal size={22} />,        label: 'Consola',      active: false },
  { icon: <CreditCard size={19} />,      mobileIcon: <CreditCard size={22} />,      label: 'Facturación',  active: false },
  { icon: <LifeBuoy size={19} />,        mobileIcon: <LifeBuoy size={22} />,        label: 'Soporte',      active: false },
  { icon: <Settings size={19} />,        mobileIcon: <Settings size={22} />,        label: 'Config',       active: false },
];

/* ─────────────────────────────────────────────
   Main Dashboard
───────────────────────────────────────────── */
const Dashboard = () => {
  const [activeServer, setActiveServer] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-endor-darker text-endor-text font-sans overflow-x-hidden">

      {/* ── Background glows ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-endor-primary/10 blur-[120px] -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-endor-secondary/10 blur-[100px] bottom-0 right-0" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(157,56,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(157,56,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* ── SIDEBAR (lg+) ── */}
      <aside className="hidden lg:flex w-64 shrink-0 fixed h-full z-30 flex-col border-r border-endor-border bg-black/30 backdrop-blur-2xl">
        <SidebarContent />
      </aside>

      {/* ── MOBILE DRAWER ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute left-0 top-0 h-full w-72 bg-[rgba(10,6,22,0.98)] border-r border-endor-border flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-endor-border">
              <div className="flex items-center gap-2.5">
                <img src="/imagen7.png" alt="E" className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(157,56,255,0.9)]" style={{ mixBlendMode: 'screen' }} />
                <div>
                  <p className="font-black text-base leading-none tracking-wide text-white">ENDORHOST</p>
                  <p className="text-[9px] text-endor-muted font-mono tracking-widest">PANEL DE CONTROL</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-endor-muted hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <SidebarContent onNavClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <main className="flex-grow lg:ml-64 flex flex-col min-h-screen pb-20 lg:pb-0">

        {/* ── TOP BAR ── */}
        <header className="sticky top-0 z-20 bg-black/40 backdrop-blur-xl border-b border-endor-border px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Hamburger (mobile only) */}
            <button
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-endor-border text-endor-muted hover:text-white transition-all"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div>
              <h1 className="text-base md:text-xl font-black text-white tracking-tight leading-none">Panel de Control</h1>
              <p className="text-[11px] text-endor-muted hidden sm:block">
                Bienvenido de vuelta, <span className="text-endor-primary font-bold">Usuario</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Live indicator — hidden on very small screens */}
            <div className="hidden sm:flex items-center gap-2 bg-green-400/10 border border-green-400/30 px-3 py-1.5 rounded-full">
              <Circle size={8} className="fill-green-400 text-green-400 animate-pulse" />
              <span className="text-xs font-bold text-green-400">Todo Operativo</span>
            </div>
            <button className="relative p-2 md:p-2.5 bg-white/5 rounded-xl border border-endor-border hover:border-endor-border-hl transition-all">
              <Bell size={17} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-endor-primary rounded-full shadow-[0_0_6px_rgba(157,56,255,0.8)]" />
            </button>
            <button className="btn btn-primary py-1.5 px-3 md:py-2 md:px-4 text-sm flex items-center gap-1.5">
              <Plus size={14} /> <span className="hidden sm:inline">Nuevo Servidor</span><span className="sm:hidden">Nuevo</span>
            </button>
          </div>
        </header>

        {/* ── PAGE BODY ── */}
        <div className="flex-grow p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">

          {/* ── HERO BANNER ── */}
          <div className="relative rounded-2xl overflow-hidden border border-endor-border h-32 md:h-40">
            <img
              src="/imagen3.png"
              alt="EndorHost Banner"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-endor-darker via-endor-darker/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-endor-darker/80 via-transparent to-transparent" />
            <div className="relative z-10 h-full flex items-center px-5 md:px-8 gap-4">
              <div>
                <p className="text-[10px] md:text-xs font-bold text-endor-primary tracking-[0.2em] uppercase mb-1">Panel Cliente</p>
                <h2 className="text-xl md:text-3xl font-black text-white tracking-tight leading-none mb-1 md:mb-2">
                  Tus Servidores
                </h2>
                <p className="text-endor-muted text-xs md:text-sm hidden sm:block">Performance. Estabilidad. Confianza.</p>
              </div>
              <div className="ml-auto flex flex-col sm:flex-row gap-2">
                <StatPill icon={<Zap size={12} />} value="2 Online" color="green" />
                <StatPill icon={<Server size={12} />} value="4 Total" color="purple" />
                <StatPill icon={<Activity size={12} />} value="99.9%" color="gold" />
              </div>
            </div>
          </div>

          {/* ── STATS GRID ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <StatCard icon={<Server />} label="Servidores Activos" value="2 / 4" trend="+1 este mes" />
            <StatCard icon={<Cpu />} label="CPU Promedio" value="29%" trend="Normal" green />
            <StatCard icon={<HardDrive />} label="RAM Total" value="30 GB" trend="DDR5" />
            <StatCard icon={<Wifi />} label="Ancho de Banda" value="∞ TB" trend="Ilimitado" gold />
          </div>

          {/* ── SERVERS ── */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base md:text-lg font-black tracking-tight flex items-center gap-2">
                <Server size={18} className="text-endor-primary" /> Mis Servidores
              </h3>
              <button className="text-sm text-endor-primary hover:text-endor-primary-hover font-bold flex items-center gap-1 transition-colors">
                Ver todos <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-5">
              {servers.map((s) => (
                <ServerCard
                  key={s.id}
                  server={s}
                  expanded={activeServer === s.id}
                  onToggle={() => setActiveServer(activeServer === s.id ? null : s.id)}
                />
              ))}
            </div>
          </div>

          {/* ── QUICK ACTIONS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: <Terminal size={20} />, label: 'Abrir Consola' },
              { icon: <LifeBuoy size={20} />, label: 'Crear Ticket' },
              { icon: <RefreshCw size={20} />, label: 'Estado Red' },
              { icon: <ExternalLink size={20} />, label: 'Discord' },
            ].map((a) => (
              <button
                key={a.label}
                className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-5 bg-white/5 border border-endor-border rounded-2xl hover:border-endor-border-hl hover:bg-endor-primary/5 transition-all group"
              >
                <span className="text-endor-primary group-hover:scale-110 transition-transform">{a.icon}</span>
                <span className="text-xs md:text-sm font-bold text-endor-muted group-hover:text-white transition-colors text-center">{a.label}</span>
              </button>
            ))}
          </div>

        </div>
      </main>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[rgba(8,5,16,0.95)] backdrop-blur-xl border-t border-endor-border flex items-center justify-around px-2 py-2 safe-bottom">
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-all duration-200 min-w-[52px]
              ${item.active
                ? 'text-endor-primary'
                : 'text-endor-muted hover:text-white'
              }`}
          >
            {item.mobileIcon}
            <span className="text-[9px] font-bold leading-none">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Sidebar Content (shared desktop + drawer)
───────────────────────────────────────────── */
function SidebarContent({ onNavClick }: { onNavClick?: () => void }) {
  return (
    <>
      {/* Logo — only shown in desktop sidebar */}
      <div className="hidden lg:flex px-6 py-5 border-b border-endor-border items-center gap-3">
        <img src="/imagen7.png" alt="E" className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(157,56,255,0.9)]" style={{ mixBlendMode: 'screen' }} />
        <div>
          <p className="font-black text-lg leading-none tracking-wide text-white">ENDORHOST</p>
          <p className="text-[10px] text-endor-muted font-mono tracking-widest">PANEL DE CONTROL</p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-grow px-3 py-5 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={onNavClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              item.active
                ? 'bg-endor-primary text-white shadow-[0_0_25px_rgba(157,56,255,0.4)] font-bold'
                : 'text-endor-muted hover:text-white hover:bg-white/5 font-semibold'
            }`}
          >
            <span className={item.active ? '' : 'group-hover:text-endor-primary transition-colors'}>{item.icon}</span>
            <span>{item.label}</span>
            {item.active && <ChevronRight size={14} className="ml-auto opacity-60" />}
          </a>
        ))}
      </nav>

      {/* User card */}
      <div className="p-4 border-t border-endor-border">
        <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-endor-border hover:border-endor-border-hl transition-all cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-endor-primary to-endor-secondary flex items-center justify-center font-black text-white text-sm shadow-[0_0_15px_rgba(157,56,255,0.5)] shrink-0">
            US
          </div>
          <div className="overflow-hidden flex-grow">
            <p className="text-sm font-bold leading-tight truncate">Usuario Endor</p>
            <p className="text-xs text-endor-muted truncate">Plan Premium</p>
          </div>
          <LogOut size={15} className="text-endor-muted group-hover:text-red-400 transition-colors shrink-0" />
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
function StatPill({ icon, value, color }: { icon: React.ReactNode; value: string; color: 'green' | 'purple' | 'gold' }) {
  const colors = {
    green:  'bg-green-400/10 border-green-400/30 text-green-400',
    purple: 'bg-endor-primary/10 border-endor-border-hl text-endor-primary',
    gold:   'bg-endor-gold/10 border-endor-gold/30 text-endor-gold',
  };
  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border text-[10px] md:text-xs font-bold ${colors[color]}`}>
      {icon}{value}
    </div>
  );
}

function StatCard({ icon, label, value, trend, green, gold }: {
  icon: React.ReactNode; label: string; value: string; trend: string; green?: boolean; gold?: boolean;
}) {
  const accent = gold ? 'text-endor-gold' : green ? 'text-green-400' : 'text-endor-primary';
  const glow   = gold ? 'group-hover:shadow-[0_0_30px_rgba(255,184,0,0.1)]' : 'group-hover:shadow-[0_0_30px_rgba(157,56,255,0.1)]';
  return (
    <div className={`bg-white/5 border border-endor-border rounded-2xl p-4 md:p-5 hover:border-endor-border-hl transition-all group ${glow}`}>
      <div className={`${accent} mb-2 md:mb-3`}>{icon}</div>
      <p className="text-xl md:text-2xl font-black text-white">{value}</p>
      <p className="text-[10px] md:text-xs text-endor-muted font-semibold mt-0.5">{label}</p>
      <p className={`text-[10px] font-bold mt-1 ${accent}`}>{trend}</p>
    </div>
  );
}

function UsageBar({ value, color }: { value: number; color: string }) {
  return (
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function ServerCard({ server, expanded, onToggle }: {
  server: ServerData; expanded: boolean; onToggle: () => void;
}) {
  const sc = statusColor[server.status];
  return (
    <div
      className={`relative bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 ${
        expanded ? 'border-endor-border-hl shadow-[0_0_30px_rgba(157,56,255,0.15)]' : 'border-endor-border hover:border-endor-border-hl'
      }`}
    >
      {server.status === 'Online' && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-endor-primary to-transparent" />
      )}

      <div className="p-4 md:p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-endor-primary/10 border border-endor-border flex items-center justify-center shrink-0">
              <Server size={20} className="text-endor-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-black text-white leading-tight text-sm md:text-base truncate">{server.name}</p>
              <p className="text-xs font-mono text-endor-muted mt-0.5 truncate">{server.ip}</p>
            </div>
          </div>
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider shrink-0 ${sc.badge} ${sc.glow}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
            <span className="hidden sm:inline">{server.status}</span>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-black/30 rounded-xl p-2.5 md:p-3 border border-white/5">
            <p className="text-[9px] text-endor-muted uppercase font-bold mb-1.5 flex items-center gap-1"><Cpu size={9} /> CPU</p>
            <p className="text-sm font-black text-white mb-1">{server.cpu}%</p>
            <UsageBar value={server.cpu} color={server.cpu > 80 ? 'bg-red-400' : server.cpu > 50 ? 'bg-yellow-400' : 'bg-endor-primary'} />
          </div>
          <div className="bg-black/30 rounded-xl p-2.5 md:p-3 border border-white/5">
            <p className="text-[9px] text-endor-muted uppercase font-bold mb-1.5 flex items-center gap-1"><HardDrive size={9} /> RAM</p>
            <p className="text-sm font-black text-white mb-1">{server.ramUsed}%</p>
            <UsageBar value={server.ramUsed} color={server.ramUsed > 80 ? 'bg-red-400' : server.ramUsed > 60 ? 'bg-yellow-400' : 'bg-endor-primary'} />
          </div>
          <div className="bg-black/30 rounded-xl p-2.5 md:p-3 border border-white/5">
            <p className="text-[9px] text-endor-muted uppercase font-bold mb-1.5 flex items-center gap-1"><HardDrive size={9} /> Disco</p>
            <p className="text-sm font-black text-white mb-1">{server.disk}%</p>
            <UsageBar value={server.disk} color="bg-endor-secondary" />
          </div>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[10px] font-bold bg-endor-primary/10 text-endor-primary border border-endor-border px-2.5 py-1 rounded-lg">{server.plan}</span>
          <span className="text-[10px] font-bold bg-white/5 text-endor-muted border border-white/10 px-2.5 py-1 rounded-lg">{server.game}</span>
          {server.uptime !== '—' && (
            <span className="text-[10px] font-bold bg-green-400/10 text-green-400 border border-green-400/20 px-2.5 py-1 rounded-lg">↑ {server.uptime}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-grow btn btn-primary py-2 text-sm gap-1.5">
            <ExternalLink size={13} /> Administrar
          </button>
          <button
            onClick={onToggle}
            className="px-3 py-2 bg-white/5 border border-endor-border rounded-xl hover:border-endor-border-hl hover:text-endor-primary transition-all text-xs font-bold"
          >
            {expanded ? '▲' : '▼'}
          </button>
          <button className="p-2 bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all">
            <Power size={16} />
          </button>
        </div>

        {/* Console Preview */}
        {expanded && (
          <div className="mt-4 bg-black/60 border border-endor-border rounded-xl p-3 md:p-4 font-mono text-xs overflow-x-auto">
            <p className="text-endor-muted mb-2 flex items-center gap-2"><Terminal size={11} /> Últimas líneas de consola</p>
            <p className="text-green-400">[INFO] Server started on port 25565</p>
            <p className="text-endor-muted">[INFO] Preparing spawn area: 100%</p>
            <p className="text-yellow-400">[WARN] Plugin update available: EssentialsX</p>
            <p className="text-green-400">[INFO] Done! For help, type "help"</p>
            <p className="text-endor-primary mt-1">$ <span className="animate-pulse">_</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
