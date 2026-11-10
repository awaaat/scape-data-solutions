import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Search, X, Check } from "lucide-react";
import { buildIndex, searchServices, highlightParts, CAT_LABEL } from "../../lib/serviceSearch";
import s from "./ServiceSearch.module.css";

const OTHER = { slug: "other", name: "Something else (not listed)", title: "Something else (not listed)", desc: "Describe it in the next steps and we will scope it.", cat: "other", items: [] };

export default function ServiceSearch({ cards, value, onSelect, error }) {
  const id = useId();
  const list0 = useMemo(() => cards.map((c) => ({ ...c, name: c.name ?? c.title ?? c.label, title: c.title ?? c.name ?? c.label })), [cards]);
  const index = useMemo(() => buildIndex(list0), [list0]);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrap = useRef(null), input = useRef(null), list = useRef(null);

  const all = useMemo(() => searchServices(index, q), [index, q]);
  const counts = useMemo(() => { const c = {}; all.forEach((x) => { c[x.cat] = (c[x.cat] || 0) + 1; }); return c; }, [all]);
  const shown = useMemo(() => (cat ? all.filter((x) => x.cat === cat) : all), [all, cat]);
  const rows = useMemo(() => [...shown, OTHER], [shown]);
  const cats = useMemo(() => Object.keys(CAT_LABEL).filter((c) => counts[c]), [counts]);

  useEffect(() => { setActive(0); }, [q, cat]);
  useEffect(() => {
    const out = (e) => { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", out);
    return () => document.removeEventListener("mousedown", out);
  }, []);
  useEffect(() => { if (open) list.current?.querySelector(`[data-idx="${active}"]`)?.scrollIntoView({ block: "nearest" }); }, [active, open]);

  const pick = (card) => { onSelect(card); setOpen(false); setQ(""); setCat(""); };
  const onKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); if (!open) setOpen(true); else setActive((i) => Math.min(i + 1, rows.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter") { if (open) { e.preventDefault(); if (rows[active]) pick(rows[active]); } }
    else if (e.key === "Escape") { if (open) { e.preventDefault(); setOpen(false); } }
    else if (e.key === "Tab") setOpen(false);
  };

  if (value && !open) {
    return (
      <div className={s.wrap} ref={wrap}>
        <div className={s.selected}>
          <span className={s.selIcon}><Check size={16} /></span>
          <span className={s.selText}><strong>{value.name ?? value.title ?? value.label}</strong><em>{CAT_LABEL[value.cat] || ""}</em></span>
          <button type="button" className={s.change} onClick={() => { setOpen(true); setTimeout(() => input.current?.focus(), 0); }}>Change</button>
        </div>
        {error && <p className={s.err}>{error}</p>}
      </div>
    );
  }

  let lastCat = null;
  return (
    <div className={s.wrap} ref={wrap}>
      <div className={`${s.inputWrap} ${error ? s.inputErr : ""}`}>
        <Search size={18} className={s.icon} />
        <input ref={input} className={s.input} type="text" value={q} placeholder={'Search services, e.g. "spss", "dashboard", "thesis"'}
          role="combobox" aria-expanded={open} aria-controls={`${id}-list`} aria-autocomplete="list"
          aria-activedescendant={open ? `${id}-o${active}` : undefined} aria-label="Search services" autoComplete="off" spellCheck={false}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }} onFocus={() => setOpen(true)} onKeyDown={onKey} />
        {q && <button type="button" className={s.clear} aria-label="Clear search" onClick={() => { setQ(""); input.current?.focus(); }}><X size={16} /></button>}
      </div>
      {error && <p className={s.err}>{error}</p>}
      {open && (
        <div className={s.panel}>
          <div className={s.chipsRow} role="group" aria-label="Filter by category">
            <button type="button" className={`${s.chip} ${!cat ? s.chipOn : ""}`} onMouseDown={(e) => e.preventDefault()} onClick={() => setCat("")}>All {all.length}</button>
            {cats.map((c) => (
              <button key={c} type="button" className={`${s.chip} ${cat === c ? s.chipOn : ""}`} onMouseDown={(e) => e.preventDefault()} onClick={() => setCat(cat === c ? "" : c)}>{CAT_LABEL[c]} {counts[c]}</button>
            ))}
          </div>
          <div className={s.list} id={`${id}-list`} role="listbox" ref={list}>
            {shown.length === 0 && <p className={s.empty}>No service matches &ldquo;{q}&rdquo;. Try fewer or different words, or choose &ldquo;Something else&rdquo; below.</p>}
            {rows.map((c, i) => {
              const head = !q && c.cat !== lastCat && c !== OTHER ? CAT_LABEL[c.cat] : null;
              if (c !== OTHER) lastCat = c.cat;
              return (
                <div key={c.slug}>
                  {head && <p className={s.group}>{head}</p>}
                  <div id={`${id}-o${i}`} data-idx={i} role="option" aria-selected={i === active}
                    className={`${s.row} ${i === active ? s.rowOn : ""} ${c === OTHER ? s.rowOther : ""}`}
                    onMouseDown={(e) => e.preventDefault()} onClick={() => pick(c)} onMouseEnter={() => setActive(i)}>
                    <span className={s.name}>
                      {q && c !== OTHER ? highlightParts(c.name, q).map((p, k) => (p.hit ? <mark key={k} className={s.mark}>{p.text}</mark> : <span key={k}>{p.text}</span>)) : c.name}
                    </span>
                    {q && c !== OTHER && <span className={s.tag}>{CAT_LABEL[c.cat]}</span>}
                    {(c.desc || c === OTHER) && <span className={s.desc}>{c.desc}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
