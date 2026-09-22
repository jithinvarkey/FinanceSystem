import{a as m,b as e}from"./chunk-XEU224ZW.js";import{a as p}from"./chunk-IDRVD47G.js";import{M as d,S as c}from"./chunk-55S4ELZ6.js";var y=(()=>{class n{constructor(){this.company=c(p)}print(r){this.company.getForPrint().subscribe(t=>m(this.render(t,r)))}render(r,t){let i=a=>this.money(a),o=t.lines.some(a=>a.taxAmount!==0||a.taxRate!==0),x=[r?.address,[r?.city,r?.postal_code].filter(Boolean).join(" "),r?.phone,r?.email,r?.commercial_reg_no?`CR ${r.commercial_reg_no}`:null].filter(a=>!!a&&String(a).trim()!==""),b=[t.party.address,t.party.phone,t.party.email].filter(a=>!!a&&String(a).trim()!==""),s=[["Invoice no.",t.number],["Invoice date",t.date]];t.dueDate&&s.push(["Due date",t.dueDate]),t.theirNumber?.value&&s.push([t.theirNumber.label,t.theirNumber.value]),t.reference&&s.push(["Reference",t.reference]),s.push(["Currency",t.currency]);let h=t.lines.map((a,l)=>`
      <tr>
        <td class="c">${l+1}</td>
        <td>${e(a.description||"\u2014")}</td>
        <td class="n">${i(a.amount)}</td>
        ${o?`<td class="c">${this.rate(a.taxRate)}</td><td class="n">${i(a.taxAmount)}</td>`:""}
        <td class="n">${i(a.total)}</td>
      </tr>`).join(""),g=[t.amountPaid!==null&&t.amountPaid!==void 0?`<tr><td>Amount paid</td><td class="n">${i(t.amountPaid)}</td></tr>`:"",t.balanceDue!==null&&t.balanceDue!==void 0?`<tr class="due"><td>Balance due</td><td class="n">${i(t.balanceDue)}</td></tr>`:""].join("");return`<!doctype html>
<html><head><meta charset="utf-8"><title>${e(t.docTitle)} ${e(t.number)}</title>
<style>${n.CSS}</style></head>
<body>
${t.isFinal?"":`<div class="watermark">${e(t.status.replace(/_/g," "))}</div>`}

<header class="hdr">
  <div class="seller">
    <div class="co">${e(r?.company_name??"Diamond Insurance Broker")}</div>
    ${x.map(a=>`<div>${e(a)}</div>`).join("")}
    ${r?.vat_number?`<div class="vat">VAT ${e(r.vat_number)}</div>`:""}
  </div>
  <div class="doc">
    <h1>${e(t.docTitle)}</h1>
    <table class="meta">
      ${s.map(([a,l])=>`<tr><th>${e(a)}</th><td>${e(l)}</td></tr>`).join("")}
    </table>
  </div>
</header>

<section class="party">
  <div class="box">
    <h2>${e(t.party.label)}</h2>
    <div class="pname">${e(t.party.name)}</div>
    ${t.party.code?`<div class="dim">${e(t.party.code)}</div>`:""}
    ${b.map(a=>`<div>${e(a)}</div>`).join("")}
    ${t.party.vatNumber?`<div class="vat">VAT ${e(t.party.vatNumber)}</div>`:""}
  </div>
  ${t.description?`<div class="box"><h2>Description</h2><div>${e(t.description)}</div></div>`:""}
</section>

<table class="lines">
  <thead>
    <tr>
      <th class="c w-no">#</th>
      <th>Description</th>
      <th class="n w-amt">Amount</th>
      ${o?'<th class="c w-rate">VAT %</th><th class="n w-amt">VAT</th>':""}
      <th class="n w-amt">Total</th>
    </tr>
  </thead>
  <tbody>${h||`<tr><td colspan="${o?6:4}" class="c dim">No lines</td></tr>`}</tbody>
</table>

<section class="foot">
  <div class="qrbox">
    ${t.qrDataUrl?`<img src="${t.qrDataUrl}" alt="ZATCA QR code" /><div class="qrcap">ZATCA &middot; Fatoorah</div>`:""}
  </div>
  <table class="totals">
    <tr><td>Subtotal (excl. VAT)</td><td class="n">${i(t.subtotal)}</td></tr>
    <tr><td>VAT</td><td class="n">${i(t.vat)}</td></tr>
    <tr class="grand"><td>Total (incl. VAT)</td><td class="n">${i(t.total)} ${e(t.currency)}</td></tr>
    ${g}
  </table>
</section>

${t.note?`<p class="note">${e(t.note)}</p>`:""}

<footer class="pagefoot">
  ${e(r?.company_name??"Diamond Insurance Broker")} &middot;
  ${e(t.docTitle)} ${e(t.number)} &middot;
  Printed ${e(new Date().toLocaleString())}
</footer>
</body></html>`}money(r){return new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(r)?r:0)}rate(r){let t=Number(r)||0;return`${Number.isInteger(t)?t:t.toFixed(2)}%`}static{this.CSS=`
    @page { size: A4; margin: 14mm; }
    * { box-sizing: border-box; }
    body { font-family: Arial, Helvetica, sans-serif; color: #222; font-size: 11px; margin: 0; position: relative; }

    .watermark {
      position: fixed; top: 42%; left: 0; right: 0; text-align: center;
      font-size: 84px; font-weight: 700; letter-spacing: 6px; text-transform: uppercase;
      color: rgba(185, 28, 28, .10); transform: rotate(-22deg); z-index: 0;
      pointer-events: none;
    }
    body > *:not(.watermark) { position: relative; z-index: 1; }

    .hdr { display: flex; justify-content: space-between; gap: 24px;
           border-bottom: 2px solid #185FA5; padding-bottom: 12px; margin-bottom: 16px; }
    .seller { line-height: 1.55; color: #555; }
    .seller .co { font-size: 17px; font-weight: 700; color: #185FA5; margin-bottom: 3px; }
    .seller .vat, .party .vat { color: #222; font-weight: 700; }

    .doc { text-align: right; flex: 0 0 auto; }
    .doc h1 { margin: 0 0 8px; font-size: 20px; color: #185FA5; text-transform: uppercase; letter-spacing: 1px; }
    table.meta { border-collapse: collapse; margin-left: auto; }
    table.meta th, table.meta td { padding: 2px 0 2px 14px; text-align: right; white-space: nowrap; }
    table.meta th { color: #777; font-weight: 600; text-align: left; padding-left: 0; }

    .party { display: flex; gap: 14px; margin-bottom: 16px; }
    .party .box { flex: 1; border: 1px solid #d8dee8; border-radius: 4px; padding: 9px 11px; line-height: 1.55; }
    .party h2 { margin: 0 0 5px; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1px; color: #185FA5; }
    .party .pname { font-size: 13px; font-weight: 700; color: #111; }
    .party .dim { color: #777; }

    table.lines { width: 100%; border-collapse: collapse; }
    table.lines th, table.lines td { border: 1px solid #ccd3de; padding: 6px 8px; vertical-align: top; }
    table.lines th { background: #f1f5fa; color: #185FA5; font-size: 9.5px;
                     text-transform: uppercase; letter-spacing: .6px; }
    table.lines .n { text-align: right; white-space: nowrap; }
    table.lines .c { text-align: center; white-space: nowrap; }
    table.lines .dim { color: #888; }
    .w-no { width: 26px; } .w-rate { width: 52px; } .w-amt { width: 92px; }

    .foot { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; margin-top: 14px; }
    .qrbox { flex: 0 0 auto; }
    .qrbox img { width: 108px; height: 108px; display: block; border: 1px solid #d8dee8; border-radius: 4px; padding: 4px; }
    .qrcap { font-size: 8.5px; color: #777; text-align: center; margin-top: 3px; letter-spacing: .5px; }

    table.totals { border-collapse: collapse; margin-left: auto; min-width: 260px; }
    table.totals td { padding: 5px 0 5px 20px; }
    table.totals td.n { text-align: right; white-space: nowrap; }
    table.totals tr.grand td { border-top: 2px solid #185FA5; font-size: 13px; font-weight: 700; color: #185FA5; }
    table.totals tr.due td { font-weight: 700; }

    .note { margin-top: 16px; padding: 8px 10px; border-left: 3px solid #185FA5;
            background: #f6f9fd; color: #444; }

    .pagefoot { margin-top: 26px; padding-top: 8px; border-top: 1px solid #ddd;
                text-align: center; color: #888; font-size: 9px; }
  `}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{y as a};
