import{h as r}from"./vendor-sanity-BX4Tmtze.js";const e=r({projectId:"5q5grbf2",dataset:"production",apiVersion:"2024-01-01",useCdn:!0});async function s(){return e.fetch(`*[_type == "article"] | order(publishDate desc){
      title, slug, category, excerpt, publishDate
    }`)}async function l(t){return e.fetch(`*[_type == "article" && slug.current == $slug][0]{
      title, slug, category, excerpt, body, sources, publishDate
    }`,{slug:t})}async function i(t=[]){return t.length?e.fetch(`*[_type == "article" && slug.current in $slugs]{
      title, slug, category, excerpt
    }`,{slugs:t}):[]}export{l as a,i as b,s as g};
