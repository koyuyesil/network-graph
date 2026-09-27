import { GraphData } from './types';
export const demoData: GraphData = {
 entities: [
  {id:'p1',name:'Deniz Aras',type:'kişi',date:'1986-03-12',description:'Demo verisindeki araştırmacı ve ağın başlangıç noktası.',detail:'Araştırmacı · İstanbul',x:18,y:31,tags:['Araştırma','Demo']},
  {id:'p2',name:'Ece Koral',type:'kişi',date:'1988-07-21',description:'Demo verisindeki proje koordinatörü.',detail:'Proje koordinatörü · Ankara',x:47,y:19,tags:['Koordinasyon']},
  {id:'p3',name:'Mert Işık',type:'kişi',date:'1982-11-04',description:'Demo verisindeki danışman.',detail:'Danışman · İzmir',x:76,y:32,tags:['Danışmanlık']},
  {id:'p4',name:'Selin Ada',type:'kişi',date:'1990-05-16',description:'Demo verisindeki etkinlik katılımcısı.',detail:'Tasarımcı · İstanbul',x:69,y:71,tags:['Tasarım']},
  {id:'e1',name:'Kıyı Araştırması',type:'olay',date:'2021-06-18',description:'Demo amaçlı saha araştırması.',detail:'Saha çalışması · 18 Haziran 2021',x:32,y:55,tags:['Saha']},
  {id:'e2',name:'Açık Veri Forumu',type:'olay',date:'2022-10-08',description:'Demo amaçlı bilgi paylaşım buluşması.',detail:'Forum · 8 Ekim 2022',x:57,y:47,tags:['Forum']},
  {id:'e3',name:'Kent Atölyesi',type:'olay',date:'2024-02-14',description:'Demo amaçlı ortak üretim oturumu.',detail:'Atölye · 14 Şubat 2024',x:48,y:76,tags:['Atölye']},
  {id:'o1',name:'Mavi Çizgi Enstitüsü',type:'kurum',date:'2019-01-01',description:'Demo verisindeki bağımsız araştırma kurumu.',detail:'Kuruluş · 2019',x:64,y:24,tags:['Kurum']},
  {id:'o2',name:'Ortak Zemin',type:'kurum',date:'2020-01-01',description:'Demo verisindeki etkinlik platformu.',detail:'Platform · 2020',x:82,y:58,tags:['Kurum']},
  {id:'l1',name:'Galata Çalışma Alanı',type:'yer',date:'2021-06-18',description:'Demo olaylarının gerçekleştiği yer.',detail:'İstanbul, Türkiye',x:17,y:77,tags:['İstanbul']},
  {id:'d1',name:'Saha Notları 2021',type:'belge',date:'2021-07-02',description:'Kıyı Araştırması için demo kaynak belgesi.',detail:'Rapor · 2 Temmuz 2021',x:37,y:87,tags:['Kaynak']}
 ],
 relations: [
  {id:'r1',source:'p1',target:'p2',type:'tanışıyor',date:'2020-02-12',description:'Demo verisinde ilk temas.',confidence:'Yüksek',sourceNote:'Demo Arşivi'},
  {id:'r2',source:'p1',target:'e1',type:'katıldı',date:'2021-06-18',description:'Saha araştırmasına katılım.',confidence:'Yüksek',sourceNote:'Katılımcı listesi'},
  {id:'r3',source:'p2',target:'e1',type:'organize etti',date:'2021-06-18',description:'Etkinlik koordinasyonu.',confidence:'Yüksek',sourceNote:'Etkinlik kaydı'},
  {id:'r4',source:'e1',target:'l1',type:'gerçekleşti',date:'2021-06-18',description:'Saha çalışmasının lokasyonu.',confidence:'Yüksek'},
  {id:'r5',source:'e1',target:'d1',type:'kaynaklandı',date:'2021-07-02',description:'Saha notları ile belgelendi.',confidence:'Yüksek',sourceNote:'Saha Notları 2021'},
  {id:'r6',source:'p2',target:'o1',type:'çalışıyor',date:'2020-03-01',endDate:'2023-12-31',description:'Enstitü proje koordinasyonu.',confidence:'Orta'},
  {id:'r7',source:'o1',target:'e2',type:'düzenledi',date:'2022-10-08',description:'Forum organizasyonu.',confidence:'Yüksek'},
  {id:'r8',source:'p3',target:'e2',type:'katıldı',date:'2022-10-08',description:'Forum konuşmacısı.',confidence:'Yüksek'},
  {id:'r9',source:'p2',target:'p3',type:'görüştü',date:'2022-10-08',description:'Forumda görüşme.',confidence:'Orta'},
  {id:'r10',source:'p3',target:'o2',type:'danışmanlık yaptı',date:'2023-01-15',description:'Platform danışmanlığı.',confidence:'Yüksek'},
  {id:'r11',source:'o2',target:'e3',type:'organize etti',date:'2024-02-14',description:'Atölye organizasyonu.',confidence:'Yüksek'},
  {id:'r12',source:'p4',target:'e3',type:'katıldı',date:'2024-02-14',description:'Atölye katılımı.',confidence:'Orta'},
  {id:'r13',source:'p1',target:'p4',type:'iş birliği yaptı',date:'2024-02-14',description:'Atölye sırasında iş birliği.',confidence:'Yüksek'},
  {id:'r14',source:'e3',target:'l1',type:'gerçekleşti',date:'2024-02-14',description:'Atölye lokasyonu.',confidence:'Yüksek'}
 ]
};
