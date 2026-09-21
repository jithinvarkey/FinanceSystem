import{L as d}from"./chunk-3M7ED2OF.js";var l=(()=>{class e{static{this.CSS=`
    body{font-family:Arial,Helvetica,sans-serif;color:#222;margin:24px;font-size:11px}
    .hdr{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #185FA5;padding-bottom:10px;margin-bottom:14px}
    .hdr .co{font-size:17px;font-weight:700;color:#185FA5}
    .hdr .meta{text-align:right;color:#555;line-height:1.5;font-size:11px}
    h1{text-align:center;color:#185FA5;font-size:17px;margin:6px 0 4px}
    .scope{text-align:center;color:#444;margin-bottom:12px;font-weight:600}
    table{width:100%;border-collapse:collapse}
    th,td{border:1px solid #ccc;padding:5px 7px;text-align:left;white-space:nowrap}
    th{background:#f1f5fa;color:#185FA5;font-size:10px}
    td.num,th.num{text-align:right}
    tfoot td{font-weight:700;border-top:2px solid #185FA5}
    .chip{background:none!important;color:#000!important;border:0!important;padding:0!important;font-weight:600}
    .warn{color:#c0392b}
  `}print(o){let n=`<!doctype html><html><head><meta charset="utf-8"><title>${o.title}</title>
      <style>${e.CSS}</style></head><body>
      <div class="hdr">
        <div class="co">Diamond Insurance Broker</div>
        <div class="meta">7356 Abdul Aziz Al Uraifi - Ar Rabi, Unit No 1316, Ar Riyadh 13315<br>920004778<br>finance@dbroker.com.sa</div>
      </div>
      <h1>${o.title}</h1>
      ${o.meta?`<div class="scope">${o.meta}</div>`:""}
      ${o.tableHtml}
      </body></html>`,t=document.createElement("iframe");t.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;",document.body.appendChild(t);let i=t.contentWindow?.document;if(!i){document.body.removeChild(t);return}i.open(),i.write(n),i.close();let r=t.contentWindow,a=()=>{r.focus(),r.print()};i.readyState==="complete"?setTimeout(a,50):t.onload=()=>setTimeout(a,50),setTimeout(()=>t.parentNode&&document.body.removeChild(t),6e4)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{l as a};
