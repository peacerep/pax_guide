'use strict';
// The same year target supports mouse, keyboard and touch interaction.
document.addEventListener('DOMContentLoaded',()=>{
 const targets=[...document.querySelectorAll('.annual-year-hit')];if(!targets.length)return;
 const tip=document.createElement('div');tip.id='annual-year-tooltip';tip.className='annual-tooltip';tip.setAttribute('role','tooltip');tip.hidden=true;document.body.append(tip);
 let active;
 function hide(){tip.hidden=true;active?.removeAttribute('aria-describedby');active?.classList.remove('is-active');active=null;}
 function show(target,event){
  if(active!==target)hide();active=target;target.setAttribute('aria-describedby',tip.id);target.classList.add('is-active');
  const d=target.dataset;tip.replaceChildren(el('strong',d.year,'annual-tooltip-year'));
  [['with','With substantive provisions','provision'],['without','No substantive provision','without'],['local','Local agreements excluded','local']].forEach(([key,label,cls])=>{
   const row=el('div',undefined,'annual-tooltip-row'),swatch=el('span',undefined,'annual-swatch '+cls);swatch.setAttribute('aria-hidden','true');row.append(swatch,el('span',label),el('b',d[key]));tip.append(row);
  });
  const all=Number(d.total)+Number(d.local),mismatched=100*Number(d.with)/all;
  tip.append(el('p','Correct for this question: '+Number(d.percent).toFixed(1)+'% of '+d.total+' non-local agreements ('+d.with+' / '+d.total+').','annual-tooltip-share'));
  tip.append(el('p','With local agreements left in the denominator: '+mismatched.toFixed(1)+'% ('+d.with+' / '+all+').','annual-tooltip-comparison'));
  tip.append(el('p',Number(d.local)>0?'This mismatches the groups: the numerator excludes local agreements, but the denominator includes them.':'There are no local agreements in this year, so both calculations give the same result.','annual-tooltip-explanation'));tip.hidden=false;
  const box=target.getBoundingClientRect(),x=event?.clientX??(box.left+box.width/2),y=event?.clientY??Math.max(120,box.top+30);
  const size=tip.getBoundingClientRect();tip.style.left=Math.max(12,Math.min(x+16,innerWidth-size.width-12))+'px';tip.style.top=Math.max(12,Math.min(y+16,innerHeight-size.height-12))+'px';
 }
 targets.forEach(target=>{
  target.querySelector('title')?.remove();
  target.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')show(target,e);});
  target.addEventListener('pointermove',e=>{if(e.pointerType!=='touch')show(target,e);});
  target.addEventListener('pointerleave',()=>{if(document.activeElement!==target)hide();});
  target.addEventListener('focus',()=>show(target));target.addEventListener('blur',hide);
  target.addEventListener('click',e=>show(target,e));
  target.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show(target);}});
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape')hide();});
 document.addEventListener('pointerdown',e=>{if(!e.target.closest('.annual-year-hit'))hide();});
 addEventListener('scroll',hide,{capture:true,passive:true});addEventListener('resize',hide);
});
const D=window.GUIDE_DATA,$=id=>document.getElementById(id);
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function link(text,url){const a=el('a',text);a.href=url;if(url.startsWith('index.html?topic=')&&returnSnapshot){const target=new URL(a.href);target.searchParams.set('resume',returnParams.get('return')||returnParams.get('resume'));a.href=target.href;}if(/^https?:/.test(url)||url.includes('.pdf')){a.target='_blank';a.rel='noopener noreferrer';}return a;}
function section(host,title,text){if(!text)return;host.append(el('h4',title),el('p',text));}
function options(select,items,empty){select.replaceChildren();if(empty!==undefined){const o=el('option',empty);o.value='';select.append(o);}items.forEach(x=>{const o=el('option',x.label);o.value=x.value;select.append(o);});}
function saveText(name,text){const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=link('',url);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
async function copy(text,status){try{await navigator.clipboard.writeText(text);status.textContent='Copied.';}catch(e){const t=el('textarea');t.value=text;document.body.append(t);t.select();const ok=document.execCommand('copy');t.remove();status.textContent=ok?'Copied.':'Select and copy the text above.';}}
document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>copy($(b.dataset.copy).textContent,$('copy-status')));
const topicByCode=new Map(D.topics.map(t=>[t.code,t]));
function searchField(t){return ['category','issue','subissue'].find(f=>D.options[f].some(o=>o.value===t.id));}
const stageCodes={'1':'Pre','2':'SubPar','3':'SubComp','4':'Imp','5':'Ren','6':'Cea','7':'Oth'};
let printClosed=[];
window.addEventListener('beforeprint',()=>{printClosed=[...document.querySelectorAll('details:not([open])')];printClosed.forEach(d=>d.open=true);});
window.addEventListener('afterprint',()=>{printClosed.forEach(d=>d.open=false);printClosed=[];});
if($('print'))$('print').onclick=()=>window.print();
const guideSections={start:'Overview',data:'The data',resources:'Resources',tools:'Tools and visualisations','linking-data':'Linking datasets',making:'Methodology',concepts:'Understanding terminology',questions:'Research questions',planner:'Build a search',interpret:'Interpretation',briefing:'Policy briefings',sources:'Sources and citation'};
const returnParams=new URLSearchParams(location.search);
let returnSnapshot=null;
try{const token=returnParams.get('resume')||returnParams.get('return');if(token&&/^[a-z0-9-]+$/.test(token))returnSnapshot=JSON.parse(sessionStorage.getItem('pax-guide-return-'+token)||'null');}catch{}
if($('back-to-guide')){
 const from=returnParams.get('from'),section=Object.hasOwn(guideSections,from)?from:'concepts',back=$('back-to-guide');
 const url=new URL('index.html',location.href);url.hash=section;
 if(returnSnapshot){url.searchParams.set('resume',returnParams.get('return'));}
 back.href=url.href;back.textContent='\u2190 Back to '+guideSections[section];
}
if($('query-form')){
 const form=$('query-form'),f=form.elements,chosen=new Set(),countries=new Set();
 ['countries','process','stage'].forEach(k=>options(f[k],D.options[k],k==='countries'?'Add a country/entity':k==='process'?'All processes':'All stages'));
 function countryChips(){const host=$('selected-countries');host.replaceChildren();countries.forEach(value=>{const name=label('countries',value),button=el('button',name+' \u00d7','relation');button.type='button';button.setAttribute('aria-label','Remove '+name);button.onclick=()=>{countries.delete(value);countryChips();render();f.countries.focus();};host.append(button);});}
 f.countries.onchange=()=>{if(f.countries.value)countries.add(f.countries.value);f.countries.value='';countryChips();render();};
 const selectable=D.topics.filter(t=>t.dataset==='main'&&searchField(t));
 function updateTopicButtons(){document.querySelectorAll('[data-query-topic]').forEach(button=>{const added=chosen.has(button.dataset.queryTopic);button.setAttribute('aria-pressed',String(added));button.querySelector('.topic-action').textContent=added?'Added':'Add';});}
 function topicChoices(){
  const q=$('topic-filter').value.toLowerCase().trim(),matches=selectable.filter(t=>(t.path.join(' ')+' '+t.code).toLowerCase().includes(q)),host=$('topic-results');host.replaceChildren();
  $('topic-results-count').textContent=matches.length+(q?' matching topics':' available topics')+'. Select Add to include a topic in your search.';
  matches.forEach(t=>{const button=el('button',undefined,'topic-result');button.type='button';button.dataset.queryTopic=t.code;
   const text=el('span');text.append(el('strong',t.label),el('small',t.path.slice(0,-1).join(' / ')||'Top-level category'),el('code',t.code));button.append(text,el('span','Add','topic-action'));button.setAttribute('aria-label','Add or remove '+t.label+' ['+t.code+']');
   button.onclick=()=>{if(chosen.has(t.code))chosen.delete(t.code);else chosen.add(t.code);chips();render();};host.append(button);
  });
  if(!matches.length)host.append(el('p','No matching topics. Try a broader term or a CSV code.','small'));updateTopicButtons();
 }
 $('topic-filter').oninput=topicChoices;topicChoices();
 function chips(){const host=$('selected-topics');host.replaceChildren();chosen.forEach(code=>{const t=topicByCode.get(code),b=el('button',t.path.join(' / ')+' \u00d7','relation');b.type='button';b.setAttribute('aria-label','Remove '+t.path.join(' / '));b.onclick=()=>{chosen.delete(code);chips();render();$('topic-filter').focus();};host.append(b);});if(!chosen.size)host.append(el('p','No topic restriction selected.','small'));updateTopicButtons();}
 function label(name,value){return D.options[name].find(o=>o.value===value)?.label||value;}
 let exportText='';
 function render(){
  const host=$('query-output');host.replaceChildren(el('h3',f.route.value==='csv'?'Your CSV instructions':'Your PA-X search'));
  const params=new URLSearchParams({search_type:'basic-search'}),steps=[],csv=[];
  if(f.view.value==='timeline')params.set('show_timeline','1');
  if(countries.size){
   countries.forEach(value=>params.append('countries',value));
   steps.push('Countries/entities (any selected): '+[...countries].map(value=>label('countries',value)).join('; '));
   const mappings=[...countries].map(value=>{const names=D.country_csv_names[value];return names?.length?label('countries',value)+' ('+names.join(' or ')+')':label('countries',value)+' (check the country/entity definitions; no direct CSV name mapping is supplied)';});
   csv.push('Con: keep rows matching ANY selected country/entity (OR): '+mappings.join('; ')+'. Include records where a selected designation appears with another location. Count each AgtId once if it matches more than one selection.');
  }
  ['process','stage'].forEach(k=>{const value=f[k].value;if(!value)return;params.set(k,value);steps.push((k==='process'?'Peace process':'Stage')+': '+label(k,value));
    if(k==='process')csv.push('PP = '+value+'; confirm PPName matches '+label(k,value)+'.');
    if(k==='stage')csv.push('Stage = '+stageCodes[value]+' ('+label(k,value)+').');
  });
  if(f.local.value!=='all'){const vals=D.options.conflict_level.filter(o=>f.local.value==='only'?o.value==='4':o.value!=='4');vals.forEach(o=>params.append('conflict_level',o.value));steps.push('Agreements/conflict level: '+vals.map(o=>o.label).join('; '));csv.push(f.local.value==='only'?'Agtp = IntraLocal.':'Exclude Agtp = IntraLocal; retain the other agreement types.');}
  const invalidDate=f.signed_after.value&&f.signed_before.value&&f.signed_after.value>f.signed_before.value;
  ['signed_after','signed_before'].forEach(k=>{if(!f[k].value)return;params.set(k,f[k].value);steps.push((k==='signed_after'?'Signed on or after: ':'Signed on or before: ')+f[k].value);csv.push('Parse Dat as a date; '+(k==='signed_after'?'keep dates on or after ':'keep dates on or before ')+f[k].value+'.');});
  chosen.forEach(code=>{const t=topicByCode.get(code);params.append(searchField(t),t.id);steps.push('Agreement content: '+t.path.join(' → '));
   const exact={PolParTrans:'PolParTrans = 1',GRefSubs:'GRefSubs = 1',GRefRhet:'GRefRhet = 1',GRefOth:'GRefOth = 1',GRef:'GRef > 0 (any coded reference; distinguish its 1–3 values in the codebook)'};
   csv.push(D.csv_headers.includes(code)?(exact[code]||code+': apply the presence rule in this variable’s codebook definition; do not assume every variable is binary')+'.':'There is no '+code+' column in the inspected main CSV. Use the relevant underlying coding columns and their definitions; do not substitute the topic ID as a column.');
  });
  if(chosen.size){params.set('match_any_issues',f.match.value);steps.push('Match '+(f.match.value==='True'?'any':'all')+' selected topics.');csv.push('Combine the selected topic conditions with '+(f.match.value==='True'?'OR':'AND')+'.');}
  if(f.text.value.trim()){params.set('text',f.text.value.trim());steps.push('Agreement text: '+f.text.value.trim());csv.push('Full-text condition: '+f.text.value.trim()+'. The quantitative main CSV does not contain the document text. Use the Corpus and join by AgtId, or run this part on the website.');}
  const url='https://www.peaceagreements.org/agreements/search/?'+params.toString()+(f.view.value==='timeline'?'#timeline':'');
  if(!steps.length)steps.push('No filters selected: open the complete main PA-X search.');
  if(!csv.length)csv.push('Begin with the full main PA-X CSV. Each row is an agreement; use AgtId to identify it.');
  csv.push('Inspect the selected agreement records and retain the file, selection conditions and any exclusions with your analysis.');
  if(f.question.value.trim())host.append(el('p',f.question.value));
  const chosenSteps=f.route.value==='csv'?csv:steps,list=el('ol');chosenSteps.forEach(s=>list.append(el('li',s)));host.append(list);
  if(invalidDate){host.append(el('p','The start date must be on or before the end date. Correct the dates before opening this query.','callout'));$('save-plan').disabled=true;exportText='';return;}
  $('save-plan').disabled=false;
  const a=link(f.route.value==='csv'?'Open the equivalent website selection ↗':f.view.value==='timeline'?'Open timeline and results ↗':'Open PA-X results ↗',url);a.id='generated-search';a.className='button no-print';host.append(a);
  const visible=el('p',url,'query-url');host.append(visible);
  if(f.route.value==='search'){host.append(el('p',f.view.value==='timeline'?'The timeline is followed by the agreement results. Open a record to read or export its coding; use the results export options for further analysis.':'Open an agreement result to read its provisions and export its coding as a PDF, or export the selection for further analysis.'));}
  if(f.notes.value.trim())section(host,'Your notes',f.notes.value);
  host.append(el('p','A generated link applies your choices on PA-X. This guide does not fetch or count the resulting agreements.','small'));
  if(chosen.size>1&&[...chosen].some(c=>{let t=topicByCode.get(c);while(t?.parent){if(chosen.has(t.parent))return true;t=topicByCode.get(t.parent);}return false;}))host.append(el('p','You selected a broad topic and one of its subtopics. With “any”, the broad topic may already include the narrower one; review whether you need both.','callout'));
  exportText='PA-X investigation\n\nQuestion: '+f.question.value+'\nRoute: '+f.route.value+'\n\n'+chosenSteps.join('\n')+'\n\nOpen on PA-X:\n'+url+'\n\nNotes: '+f.notes.value+'\n';
 }
 form.oninput=render;form.onchange=render;form.onsubmit=e=>{e.preventDefault();render();};$('save-plan').onclick=()=>{render();if(exportText)saveText('PA-X-query-instructions.txt',exportText);};
 document.querySelectorAll('[data-example]').forEach(a=>a.onclick=()=>{form.reset();chosen.clear();countries.clear();const ex=a.dataset.example;if(ex==='sudan'){countries.add('130');f.view.value='timeline';f.question.value='What agreements have been recorded for Sudan over time?';}else if(ex==='parties'){const country=D.options.countries.find(x=>x.label==='Colombia');if(country)countries.add(country.value);chosen.add('PolParTrans');f.question.value='What do agreements in Colombia say about armed groups becoming political parties?';}else{chosen.add('GRefSubs');f.local.value='exclude';f.question.value='What share of non-local agreements each year contains substantive provisions on refugees or displaced persons?';}countryChips();topicChoices();chips();render();});
 if(returnSnapshot){
  Object.entries(returnSnapshot.fields||{}).forEach(([name,value])=>{const input=f.namedItem(name);if(input&&typeof value==='string')input.value=value;});
  (returnSnapshot.countries||[]).forEach(value=>{if(D.options.countries.some(o=>o.value===value))countries.add(value);});
  (returnSnapshot.topics||[]).forEach(code=>{if(selectable.some(t=>t.code===code))chosen.add(code);});
  countryChips();topicChoices();
 }
 document.querySelectorAll('a[href*="terminology.html"]').forEach(a=>{
  const url=new URL(a.href,location.href),section=a.closest('section[id]')?.id||'concepts';
  url.searchParams.set('from',Object.hasOwn(guideSections,section)?section:'concepts');a.href=url.href;
  function remember(){
   const target=new URL(a.href),token=Date.now().toString(36)+'-'+Math.random().toString(36).slice(2),fields={};
   [...form.elements].forEach(input=>{if(input.name&&input.name!=='countries')fields[input.name]=input.value;});
   try{sessionStorage.setItem('pax-guide-return-'+token,JSON.stringify({fields,countries:[...countries],topics:[...chosen]}));target.searchParams.set('return',token);}catch{}
   a.href=target.href;
  }
  a.addEventListener('click',remember);a.addEventListener('auxclick',remember);
 });
 const init=new URLSearchParams(location.search).get('topic');if(init&&selectable.some(t=>t.code===init)){chosen.add(init);}chips();render();

}
if($('term-search')){

 const metadataNames={agreementStage:'Stage',agreementSubstage:'StageSub',agreementStatus:'Status',conflictLevel:'Contp',conflictType:'Agtp',interimArrangement:'Interim'};
 const metadataGroups={'Classification':'Classifications','Identifiers':'Agreement details','Document':'Agreement details','Actors':'Parties','Location':'Locations','Related datasets':'Linked datasets'};
 const mobileMetadata=matchMedia('(max-width:700px)');
 let selectedMetadata='Status';
 function showMetadata(code){
  selectedMetadata=code;
  const field=D.metadata_fields.find(f=>f.code===code),host=$('metadata-detail');
  // Move the one detail panel below its field on small screens; preserve the focused button.
  const row=document.querySelector('[data-metadata-row="'+code+'"]');
  (mobileMetadata.matches&&row?row:$('metadata-panel-slot')).append(host);
  host.replaceChildren();
  document.querySelectorAll('[data-metadata-code]').forEach(button=>{const active=button.dataset.metadataCode===code;button.setAttribute('aria-expanded',String(active));button.classList.toggle('is-selected',active);});
  if(!field){host.append(el('p','No matching metadata. Try another name, code or value.'));return;}
  host.append(el('p',metadataGroups[field.group],'eyebrow'),el('h3',field.label),el('p','CSV column: '+field.code,'tag'),el('p',field.description));
  if(field.page)host.append(link('Read this section in the codebook','https://www.peaceagreements.org/cms/documents/3956/PA_X_codebook_v10.pdf#page='+field.page));
  else host.append(el('p','Consult the source information on the agreement record.','small'));
  if(field.values.length){host.append(el('h4','Values and meanings','subheading'));field.values.forEach(value=>{const entry=el('div',undefined,'metadata-value');entry.append(el('h4',value.label),el('p','CSV value: '+value.value,'tag'),el('p',value.description));if(!value.observed)entry.append(el('p','Defined term; no matching value occurs in the inspected CSV.','small'));host.append(entry);});}
  if(field.code==='Stage')host.append(el('p','Implementation-stage coding does not show whether earlier commitments were carried out.','callout'));
 }
 function renderMetadataCatalogue(){
  // Preserve the detail panel before replacing its mobile parent.
  $('metadata-panel-slot').append($('metadata-detail'));
  const q=$('metadata-search').value.trim().toLowerCase(),host=$('metadata-list');host.replaceChildren();
  const fields=D.metadata_fields.filter(f=>!q||[f.code,f.label,f.description,...f.values.flatMap(v=>[v.label,v.value,v.description])].join(' ').toLowerCase().includes(q));
  $('metadata-count').textContent=fields.length+' of '+D.metadata_fields.length+' metadata fields';
  ['Classifications','Agreement details','Parties','Locations','Linked datasets'].forEach(group=>{
   const members=fields.filter(f=>metadataGroups[f.group]===group);if(!members.length)return;
   const section=el('section',undefined,'metadata-group');section.append(el('h3',group));
   members.forEach(field=>{const row=el('div');row.dataset.metadataRow=field.code;const button=el('button',undefined,'metadata-choice');button.type='button';button.dataset.metadataCode=field.code;button.setAttribute('aria-controls','metadata-detail');button.append(el('span',field.label),el('code',field.code));button.onclick=()=>{
    if(mobileMetadata.matches&&selectedMetadata===field.code&&!$('metadata-detail').hidden){$('metadata-detail').hidden=true;button.setAttribute('aria-expanded','false');button.classList.remove('is-selected');}
    else {$('metadata-detail').hidden=false;showMetadata(field.code);}
   };row.append(button);section.append(row);});host.append(section);
  });
  $('metadata-detail').hidden=false;
  showMetadata(fields.some(f=>f.code===selectedMetadata)?selectedMetadata:fields[0]?.code||'');
 }
 $('metadata-search').oninput=renderMetadataCatalogue;
 mobileMetadata.addEventListener('change',()=>{ $('metadata-detail').hidden=false;showMetadata(selectedMetadata); });
 renderMetadataCatalogue();
 let selected='GRef';
 function showTopic(code,focus=false){const t=topicByCode.get(code);if(!t)return;selected=code;const host=$('topic-detail');host.replaceChildren(el('p',t.path.join(' → '),'small'),el('h3',t.label),el('p','Code: '+t.code,'tag'));
  section(host,'Description',t.description||'Use the relevant codebook for this topic’s full definition.');section(host,'Includes',t.includes);section(host,'Excludes',t.excludes);
  if(t.parent&&topicByCode.has(t.parent)){host.append(el('h4','Part of'));const b=el('button',topicByCode.get(t.parent).label,'relation');b.onclick=()=>showTopic(t.parent);host.append(b);}
  const children=t.children.map(c=>topicByCode.get(c)).filter(Boolean);if(children.length){host.append(el('h4','More specific topics'));children.forEach(c=>{const b=el('button',c.label,'relation');b.onclick=()=>showTopic(c.code);host.append(b);});}
  section(host,'In the main CSV',D.csv_headers.includes(t.code)?'Column '+t.code+'. Read its coding values before selecting rows.':'There is no column with this name in the inspected main CSV. Use the appropriate specialist dataset or the coding guidance for this category.');
  if(t.dataset==='main'&&searchField(t))host.append(link('Use this topic in the query builder →','index.html?topic='+encodeURIComponent(t.code)+'#planner'));
  else host.append(link('Open the specialist datasets and codebooks ↗','https://www.peaceagreements.org/downloads/'));
  host.append(el('p','Descriptions explain the topic; use the published codebook when interpreting its coding rules.','small'));
  document.querySelectorAll('[data-topic-code]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.topicCode===code)));
  if(focus)host.focus({preventScroll:true});
 }
 function tree(){const ds=$('term-dataset').value,q=$('term-search').value.trim().toLowerCase(),host=$('topic-tree');host.replaceChildren();const ts=D.topics.filter(t=>t.dataset===ds),stat=D.topic_stats[ds];$('topic-counts').textContent=stat.categories+' top-level categories · '+stat.concepts+' topic entries · '+stat.leaves+' most specific topics';
  function button(t){const b=el('button',t.label+' ['+t.code+']','concept-choice');b.dataset.topicCode=t.code;b.setAttribute('aria-pressed',String(t.code===selected));b.onclick=()=>showTopic(t.code,true);return b;}
  function branch(t){if(!t.children.length)return button(t);const details=el('details'),s=el('summary',t.label+' ['+t.code+']');details.append(s,button(t));t.children.map(c=>topicByCode.get(c)).filter(Boolean).forEach(c=>details.append(branch(c)));return details;}
  if(q){const matches=ts.filter(t=>(t.path.join(' ')+' '+t.code+' '+t.description).toLowerCase().includes(q));$('topic-counts').textContent+=' · '+matches.length+' matches';matches.forEach(t=>{const b=button(t);b.append(el('small',t.path.join(' → ')));host.append(b);});if(!matches.length)host.append(el('p','No matching topics. Try another word or collection.'));if(matches.length&&!matches.some(t=>t.code===selected))showTopic(matches[0].code);if(!matches.length)$('topic-detail').replaceChildren(el('p','Change your search to select a topic.'));}
  else {ts.filter(t=>!t.parent||!topicByCode.has(t.parent)).forEach(t=>host.append(branch(t)));if(!ts.some(t=>t.code===selected))selected=ts[0]?.code;if(selected)showTopic(selected);}
 }
 $('term-search').oninput=tree;$('term-dataset').onchange=()=>{ $('term-search').value='';tree();};
 const params=new URLSearchParams(location.search),ds=params.get('dataset'),code=params.get('term');if(['main','wgg','local'].includes(ds))$('term-dataset').value=ds;
 if(code&&topicByCode.has(code)){selected=code;$('term-dataset').value=topicByCode.get(code).dataset;}
 else if(code){const r=D.metadata.find(x=>x.code===code);const field=D.metadata_fields.find(f=>f.code===code);if(field||r)showMetadata(field?.code||metadataNames[r.scheme]);}
 tree();
}

// Show the current section and how many sections lie ahead in the reading rail.
const sectionLinks=[...document.querySelectorAll('[data-section]')];
const sectionIds=[...new Set(sectionLinks.map(a=>a.dataset.section))];
function updateReadingPosition(){
 const threshold=(document.querySelector('.navigation-shell')?.getBoundingClientRect().bottom||0)+70;
 let currentIndex=0;
 sectionIds.forEach((id,index)=>{const node=$(id);if(node&&node.getBoundingClientRect().top<=threshold)currentIndex=index;});
 const currentId=sectionIds[currentIndex],currentLink=sectionLinks.find(a=>a.dataset.section===currentId);
 if(!currentLink)return;
 $('current-section').textContent=currentLink.textContent;
 sectionLinks.forEach(a=>{
  const index=sectionIds.indexOf(a.dataset.section);
  a.classList.toggle('is-past',index<currentIndex);
  a.classList.toggle('is-current',index===currentIndex);
  if(index===currentIndex)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');
 });
 const progress=$('rail-progress');if(progress)progress.textContent=`Section ${currentIndex+1} of ${sectionIds.length} · ${sectionIds.length-currentIndex-1} ahead`;
 const rail=document.querySelector('.rail-nav');
 if(rail){
  const links=[...rail.querySelectorAll('[data-section]')],here=links[currentIndex],next=links[currentIndex+1];
  const currentNode=$(currentId),nextNode=sectionIds[currentIndex+1]?$(sectionIds[currentIndex+1]):null;
  const viewportPosition=scrollY+threshold;
  const fraction=nextNode?Math.max(0,Math.min(1,(viewportPosition-currentNode.offsetTop)/Math.max(1,nextNode.offsetTop-currentNode.offsetTop))):1;
  const center=here.offsetTop+here.offsetHeight/2,nextCenter=next?next.offsetTop+next.offsetHeight/2:center;
  rail.style.setProperty('--rail-fill',`${Math.max(0,center-16+(nextCenter-center)*fraction)}px`);
 }
}
let readingFrame;
addEventListener('scroll',()=>{cancelAnimationFrame(readingFrame);readingFrame=requestAnimationFrame(updateReadingPosition);},{passive:true});
addEventListener('resize',updateReadingPosition);
sectionLinks.forEach(a=>a.addEventListener('click',()=>{const menu=a.closest('details');if(menu)menu.open=false;}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const menu=document.querySelector('.page-contents');if(menu?.open){menu.open=false;menu.querySelector('summary').focus();}}});
document.addEventListener('click',event=>{const menu=document.querySelector('.page-contents');if(menu?.open&&!menu.contains(event.target))menu.open=false;});
updateReadingPosition();

if($('load-corpus-viewer'))$('load-corpus-viewer').onclick=()=>{
 const button=$('load-corpus-viewer'),host=$('corpus-viewer-host');
 if(!host.childElementCount){const frame=el('iframe');frame.src='https://peacerep.github.io/peacerep_vikus/';frame.title='PA-X agreement corpus: visual document explorer';frame.loading='lazy';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;host.append(frame,el('p','Use the full-screen link above for more space, or if the embedded viewer does not load.','small'));}
 else host.hidden=!host.hidden;
 button.setAttribute('aria-expanded',String(!host.hidden));button.textContent=host.hidden?'Explore the corpus here':'Hide the corpus viewer';
};
