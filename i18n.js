(() => {
  const bm = {
    learningIdea: 'Idea pembelajaran', sandbox: 'Ruang penerokaan', heroTitle: 'Jangan beritahu mereka.<br><em>Biarkan mereka menemuinya.</em>',
    lede: 'Murid membina garis selari, melukis garis rentas lintang dan menggerakkan sudut sehingga hubungan itu dapat dilihat dan dirasai.', enter: 'Masuk ke ruang penerokaan', try: 'Cuba interaksi ini', build: 'Bina geometri.',
    firstLine: 'Lukis satu garisan', firstCopy: 'Lukis satu garisan panjang di mana-mana pada ruang kerja. Ia akan menjadi garis lurus yang kemas dan tidak terhingga.', line1: 'Garis 1', line2: 'Garis 2', parallel: 'Selari', controls: 'Kawalan',
    drawControl: 'Lukis garis terus pada ruang kerja', dragControl: 'Seret pemegang hujung biru untuk menjajarkannya', wedgeControl: 'Gerakkan, putarkan dan ubah saiz sektor sudut apabila ia muncul', note: 'Suatu interaksi pembelajaran, bukan kuiz: geometri bertindak balas terhadap pembinaan murid sendiri.',
    learningDesign: 'Reka bentuk pembelajaran', actions: 'Setiap tindakan bermakna.', vocabulary: 'Kosa kata diperkenalkan selepas murid menghasilkan hubungan tersebut—bukan sebelumnya.', construct: 'Bina', notice: 'Perhati', manipulate: 'Manipulasi', name: 'Namakan',
    constructCopy: 'Lakaran bebas menjadi objek matematik yang tepat. Murid memiliki keadaan permulaan.', noticeCopy: 'Penjajaran magnetik menjadikan keselarian jelas sementara setiap garis mengekalkan identiti dan arah.', manipulateCopy: 'Menggerakkan sektor sudut memisahkan ukuran sudut daripada panjang lengan, kedudukan dan orientasi.', nameCopy: 'Hanya selepas padanan dibuat, idea seperti sudut sepadan atau sudut selang-seli dalam diperkenalkan.',
    keyInsight: 'Idea utama', proof: 'Buktinya di tangan mereka.', proofCopy: 'Bukaan sudut kekal sama walaupun murid membawanya ke tempat baharu, memutarkannya atau membesarkan arknya. Apabila sektor sudut tirus dan cakah membentuk garis lurus, sudut penggenap tidak lagi sekadar peraturan untuk diingat tetapi menjadi fakta: <strong>180°.</strong>',
    discover: 'Apa yang murid temui', outcomes: 'Satu pembinaan. Banyak hubungan.', footer: 'Geometri ialah ruang untuk diterokai.',
    corresponding: 'Sudut sepadan', alternateInterior: 'Sudut selang-seli dalam', vertical: 'Sudut bertentangan bucu', alternateExterior: 'Sudut selang-seli luar', supplementary: 'Sudut penggenap'
  };
  const dynamic = {
    'Draw your first line': 'Lukis satu garisan', 'Make a long stroke anywhere on the canvas. It will snap into a clean, infinite line.': bm.firstCopy,
    'Make a matching line': 'Bina garis yang sepadan', 'Draw a transversal': 'Lukis garis rentas lintang', 'Move the green angle': 'Gerakkan sudut hijau', 'Find the purple angles': 'Cari sudut ungu', 'Keep matching': 'Teruskan pemadanan', 'Try again': 'Cuba lagi',
    'All congruent angles found': 'Semua sudut kongruen telah ditemui', 'Make a conclusion': 'Buat kesimpulan', 'What do the two colours make?': 'Apakah yang terbentuk daripada gabungan dua warna ini?',
    'Drag the orange handle on the transversal to explore a new crossing, or select two wedges to name their relationship.': 'Seret pemegang jingga pada garis rentas lintang untuk meneroka persilangan baharu, atau pilih dua sektor sudut untuk menamakan hubungannya.',
    'Select any two marked wedges.': 'Pilih mana-mana dua sektor sudut yang bertanda.', 'Choose one more marked angle.': 'Pilih satu lagi sudut bertanda.',
    'Correct — keep looking!': 'Betul — teruskan mencari!', 'Parallel lines found.': 'Garis selari telah ditemui.', 'The wedges adjusted to the new transversal.': 'Sektor sudut telah diselaraskan mengikut garis rentas lintang baharu.',
    'Nothing to undo.': 'Tiada padanan untuk dibuat asal.', 'Last match removed.': 'Padanan terakhir telah dibuang.', 'rotate': 'putar', 'found': 'ditemui',
    'Corresponding Angles': 'Sudut sepadan', 'Alternate Interior Angles': 'Sudut selang-seli dalam', 'Alternate Exterior Angles': 'Sudut selang-seli luar', 'Vertically Opposite Angles': 'Sudut bertentangan bucu', 'Supplementary Angles': 'Sudut penggenap', 'Linear Pair': 'Sudut bersebelahan', 'Same-side Interior Angles': 'Sudut pedalaman sehala', 'Same-side Exterior Angles': 'Sudut luaran sehala', 'Congruent Angles': 'Sudut kongruen'
  };
  let language = localStorage.getItem('discover-geometry-language') || 'en';
  let applying = false;
  const t = text => {
    if (language === 'en' || !text) return text;
    if (dynamic[text]) return dynamic[text];
    return text
      .replace(/(\d) of 4 green angles found\./, '$1 daripada 4 sudut hijau telah ditemui.')
      .replace(/(\d) of 4 purple angles found\./, '$1 daripada 4 sudut ungu telah ditemui.')
      .replace('All 8 angles found.', 'Semua 8 sudut telah ditemui.')
      .replace('All 8 angles found. Drag the orange handle to rotate the transversal.', 'Semua 8 sudut telah ditemui. Seret pemegang jingga untuk memutarkan garis rentas lintang.')
      .replace('same opening, different place.', 'bukaan sudut yang sama, kedudukan yang berbeza.')
      .replace('supplementary angles — sum = 180°.', 'sudut penggenap — jumlah = 180°.');
  };
  const set = (selector, value, html = false) => { const node=document.querySelector(selector); if(node) html ? node.innerHTML=value : node.textContent=value; };
  const applyStatic = () => {
    const v = language === 'bm' ? bm : null;
    set('.top-link', v ? v.learningIdea : 'The learning idea'); set('.hero .eyebrow', v ? v.sandbox : 'A sandbox for mathematical discovery'); set('#page-title', v ? v.heroTitle : 'Don’t tell them.<br><em>Let them find it.</em>', true);
    set('.lede', v ? v.lede : 'Students build parallel lines, draw a transversal, and physically move angles until the relationships become something they can see and feel.'); set('.hero .button', v ? v.enter : 'Enter the sandbox');
    set('.section-heading .eyebrow', v ? v.try : 'Try the interaction'); set('#sandbox-title', v ? v.build : 'Build the geometry.'); set('.legend span:first-child', v ? v.line1 : 'Line 1'); set('.legend span:last-child', v ? v.line2 : 'Line 2'); set('.canvas-label.label-one', v ? v.line1.toUpperCase() : 'LINE 1'); set('.canvas-label.label-two', v ? v.line2.toUpperCase() : 'LINE 2'); set('#parallel-badge', v ? '∥   selari' : '∥   parallel');
    set('.control-card .eyebrow', v ? v.controls : 'Controls'); const controls=document.querySelectorAll('.control-row p'); if(controls.length===3){controls[0].innerHTML=`<strong>${v?v.construct:'Draw'}</strong> ${v?v.drawControl:'lines directly on the canvas'}`;controls[1].innerHTML=`<strong>${v?'Seret':'Drag'}</strong> ${v?v.dragControl:'the blue end handle to align it'}`;controls[2].innerHTML=`<strong>${v?'Gerak, putar & ubah saiz':'Move, spin & resize'}</strong> ${v?v.wedgeControl:'an angle wedge once it appears'}`;}
    set('.sandbox-note', v ? v.note : 'A learning interaction, not a quiz: the geometry responds to the student’s own construction.'); set('.learning-intro .eyebrow', v ? v.learningDesign : 'The learning design'); set('#learning-title', v ? v.actions : 'Every action earns its name.'); set('.learning-intro > p:last-child', v ? v.vocabulary : 'Vocabulary arrives after the student has made the relationship happen—not before.');
    const cards=document.querySelectorAll('.learning-grid article'); [['construct','constructCopy'],['notice','noticeCopy'],['manipulate','manipulateCopy'],['name','nameCopy']].forEach(([title,copy],i)=>{if(cards[i]){set(`.learning-grid article:nth-child(${i+1}) h3`,v?v[title]:title[0].toUpperCase()+title.slice(1));set(`.learning-grid article:nth-child(${i+1}) p`,v?v[copy]:['Freehand marks become precise mathematical objects. Students own the starting conditions.','Magnetic alignment makes parallelism visible while each line keeps its identity and direction.','Moving a wedge separates angle measure from arm length, position, and orientation.','Only once a match is made do ideas such as corresponding or alternate interior angles appear.'][i]);}});
    set('.principles .eyebrow', v ? v.keyInsight : 'The key insight'); set('#principles-title', v ? v.proof : 'The proof is<br>in their hands.', true); set('.principles p:last-child', v ? v.proofCopy : 'An angle’s opening stays the same even when students carry it somewhere new, rotate it, or make its arc larger. When an acute and obtuse wedge click into a straight line, supplementary angles stop being a rule to remember and become a physical fact: <strong>180°.</strong>', true);
    set('.outcomes .eyebrow', v ? v.discover : 'What students discover'); set('#outcomes-title', v ? v.outcomes : 'One construction. Many relationships.'); const outcomes=document.querySelectorAll('.outcomes-list span'); ['corresponding','alternateInterior','vertical','alternateExterior','supplementary'].forEach((key,i)=>{if(outcomes[i])outcomes[i].textContent=v?v[key]:['Corresponding angles','Alternate interior angles','Vertically opposite angles','Alternate exterior angles','Supplementary angles'][i];}); set('footer p',v?v.footer:'Geometry is a place to explore.');
    document.documentElement.lang=language==='bm'?'ms':'en'; document.querySelectorAll('[data-language]').forEach(button=>button.classList.toggle('active',button.dataset.language===language)); refreshDynamic();
  };
  const dynamicNodes = ['instruction-title','instruction-copy','canvas-message','relationship'];
  const rememberDynamic = () => dynamicNodes.forEach(id=>{const node=document.getElementById(id);if(node&&!node.dataset.raw)node.dataset.raw=node.textContent;});
  const refreshDynamic = () => { applying=true;dynamicNodes.forEach(id=>{const node=document.getElementById(id);if(node&&node.dataset.raw!==undefined)node.textContent=t(node.dataset.raw);});applying=false; };
  document.addEventListener('DOMContentLoaded',()=>{rememberDynamic();dynamicNodes.forEach(id=>{const node=document.getElementById(id);if(node)new MutationObserver(()=>{if(!applying&&node.textContent!==t(node.dataset.raw||'')){node.dataset.raw=node.textContent;refreshDynamic();}}).observe(node,{childList:true,characterData:true,subtree:true});});document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{language=button.dataset.language;localStorage.setItem('discover-geometry-language',language);applyStatic();window.dispatchEvent(new Event('discover-language-change'));}));applyStatic();});
  window.geometryI18n={t,get language(){return language;}};
})();
