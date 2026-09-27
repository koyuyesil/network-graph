export type EntityType = 'kişi' | 'olay' | 'kurum' | 'yer' | 'belge';
export type Entity = { id:string; name:string; type:EntityType; date?:string; description:string; detail?:string; x:number; y:number; tags?:string[] };
export type Relation = { id:string; source:string; target:string; type:string; date:string; endDate?:string; description:string; confidence:'Yüksek'|'Orta'|'Düşük'; sourceNote?:string };
export type GraphData = { entities:Entity[]; relations:Relation[] };
