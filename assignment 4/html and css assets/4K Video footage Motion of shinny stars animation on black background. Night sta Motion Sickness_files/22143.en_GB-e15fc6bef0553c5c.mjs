"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[22143],{762587:e=>{e.exports=function(e,t,i,n){t=t||"&",i=i||"=";var a={};if("string"!=typeof e||0===e.length)return a;var r=/\+/g;e=e.split(t);var l=1e3;n&&"number"==typeof n.maxKeys&&(l=n.maxKeys);var o=e.length;l>0&&o>l&&(o=l);for(var d=0;d<o;++d){var s,c,u,p,_=e[d].replace(r,"%20"),h=_.indexOf(i);(h>=0?(s=_.substr(0,h),c=_.substr(h+1)):(s=_,c=""),u=decodeURIComponent(s),p=decodeURIComponent(c),Object.prototype.hasOwnProperty.call(a,u))?Array.isArray(a[u])?a[u].push(p):a[u]=[a[u],p]:a[u]=p}return a}},712361:e=>{var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,i,n,a){return(i=i||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e)?Object.keys(e).map(function(a){var r=encodeURIComponent(t(a))+n;return Array.isArray(e[a])?e[a].map(function(e){return r+encodeURIComponent(t(e))}).join(i):r+encodeURIComponent(t(e[a]))}).join(i):a?encodeURIComponent(t(a))+n+encodeURIComponent(t(e)):""}},817673:(e,t,i)=>{t.decode=t.parse=i(762587),t.encode=t.stringify=i(712361)},467604:(e,t,i)=>{var n;i.r(t),i.d(t,{default:()=>r});let a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ContextMenuClickthroughLogging_pin",selections:[{alias:null,args:null,concreteType:"AdData",kind:"LinkedField",name:"adData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ceAltImageSignature",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dpaCreativeType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"ArticleMetadata",kind:"LinkedField",name:"article",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:n,storageKey:null},{alias:null,args:null,concreteType:"RecipeMetadata",kind:"LinkedField",name:"recipe",plural:!1,selections:n,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:n,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackedLink",storageKey:null},{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"}],type:"Pin",abstractKey:null};a.hash="7b1ef02ffafe375cab4d3317e726a736";let r=a},433287:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(340523),a=i(5859),r=i(554786);function l(e){let{isAuthenticated:t,isRTL:i}=(0,a.B)(),l=(0,r.HG)(),{checkExperiment:o}=(0,n.F)(),d="";return e&&t&&l&&!i?d=o("closeup_auth_related_pins_above_fold_2024_dweb").group:e||t||!l||i||(d=o("closeup_unauth_related_pins_above_fold_2024_dweb").group),{isCloseupRelatedPinsAboveTheFoldEnabled:!!d&&"control"!==d,closeupWithinMasonryEnabled:"enabled_side_by_side"===d,peekCloseupEnabled:"enabled_peek"===d}}},89856:(e,t,i)=>{i.d(t,{Z:()=>n});function n({maxPrice:e,minPrice:t,price:i}){return e&&t?`${t}-${e}`:i}},456281:(e,t,i)=>{i.d(t,{MH:()=>s,Np:()=>l,Wo:()=>d,hb:()=>n,iM:()=>a,pb:()=>c,wM:()=>o,xP:()=>r});let n={CONTROL:"control",ENABLED_PIN_TYPE:"enabled_pin_type",ENABLED_SURFACE:"enabled_surface",ENABLED_INTEREST:"enabled_interest",ENABLED_IMAGE_TYPE:"enabled_image_type",CONTROL_PWT:"control_pwt",ENABLED_PWT:"enabled_pwt",EMPLOYEES:"employees"},a={CONTROL:"control",ENABLED_FOOTER:"enabled_4_indicator",ENABLED_FOOTER_BLUE:"enabled_5_indicator",ENABLED_OVERLAY:"enabled_2_indicator",ENABLED_OVERLAY_ANIMATED:"enabled_3_indicator",CONTROL_PWT:"control_pwt",ENABLED_PWT:"enabled_pwt",EMPLOYEES:"employees"},r=["RelatedPinGrid","AuthHomefeed","SearchItemHighShoppingIntent","SearchItem","PdpRelatedPinGrid"],l=["BoardMoreIdeasTabContent","BaseBoardPinGrid","BoardlessPins","NewsPage"];function o({experimentsClient:e,fields:t}){let i=e.checkExperiment("web_shopping_indicators_2",{dangerouslySkipActivation:!0}).group;return([n.CONTROL_PWT,n.ENABLED_PWT].includes(i)&&e.checkExperiment("web_shopping_indicators_2"),[n.CONTROL,n.ENABLED_PIN_TYPE,n.ENABLED_SURFACE,n.ENABLED_INTEREST,n.ENABLED_IMAGE_TYPE,n.EMPLOYEES,n.ENABLED_PWT].includes(i))?[...t,"pin.is_shoppable","pin.image_top_interest_id","pin.shopping_image_style"]:t}let d=["RelatedPinGrid","AuthHomefeed","SearchItemHighShoppingIntent","SearchItem","PdpRelatedPinGrid"],s={CONTROL:"control",CONTROL_PWT:"control_pwt",EMPLOYEES:"employees",ENABLED_PWT:"enabled_pwt",ENABLED_TAG:"enabled_tag",ENABLED_TAG_COPY:"enabled_tag_copy",ENABLED_FLASHLIGHT_COPY:"enabled_flashlight_copy",ENABLED_COPY:"enabled_copy"};function c({experimentsClient:e,fields:t}){let i=e.checkExperiment("web_plp_learn",{dangerouslySkipActivation:!0}).group;return([s.CONTROL_PWT,s.ENABLED_PWT].includes(i)&&e.checkExperiment("web_plp_learn"),[s.CONTROL,s.ENABLED_TAG,s.ENABLED_TAG_COPY,s.ENABLED_FLASHLIGHT_COPY,s.ENABLED_COPY,s.EMPLOYEES,s.ENABLED_PWT].includes(i))?[...t,"pin.is_shoppable"]:t}},968292:(e,t,i)=>{i.d(t,{Z:()=>_});var n,a=i(667294);i(167912);var r=i(214877),l=i(372085),o=i(54977),d=i(558273),s=i(414131),c=i(268127),u=i(785893);let p=void 0!==n?n:n=i(467604);function _({clientTrackingParams:e,children:t,enableDLCollection:i=!1,hovered:n,pinKey:_,slotIndex:h,trafficSource:m,viewType:g}){let{logContextEvent:y}=(0,r.v)(),[E,k]=(0,a.useState)(),[b,P]=(0,a.useState)(),A=(0,o.Z)(p,_),{entityId:f,trackedLink:v,link:S,adData:L,dpaCreativeType:T}=A,I=v||S||"",w=L?.ceAltImageSignature,D=()=>{k(!0)},C=(0,s.Z)({hasPin:!!A,hasPinRichMetadata:!!A.richMetadata,hasPinRichMetadataProducts:!!A.richMetadata?.products,hasPinRichMetadataArticle:!!A.richMetadata?.article,hasPinRichMetadataRecipe:!!A.richMetadata?.recipe,hasPinStoryPinData:!!A.storyPinData}),x=(0,c.Z)(A),N=()=>{let t=x();(0,l.Z)({url:"/v3/offsite/",data:{check_only:!1,pin_id:f,url:I,client_tracking_params:e,aux_data:JSON.stringify({clickthrough_type:"rightClick",objectId:f,...h||{},...t})}}).then(n=>{n&&(i?(y({view_type:3,event_type:8948,component:15166,element:15926,object_id_str:f,aux_data:{collection_pin_click_position:0,click_type:"clickthrough"},event_data:{dcoEventData:{clientCreativeType:T,ceAltImageSignature:w}}}),y({view_type:3,event_type:12,component:15166,element:15926,object_id_str:f,aux_data:{collection_pin_click_position:0,clickthrough_type:"rightClick"},event_data:{dcoEventData:{clientCreativeType:T,ceAltImageSignature:w}}}),y({view_type:3,event_type:7762,component:15166,element:15926,object_id_str:f,aux_data:{clickthrough_type:"rightClick"},event_data:{dcoEventData:{clientCreativeType:T,ceAltImageSignature:w}}})):(y({event_type:12,object_id_str:f,view_type:g,view_parameter:C,clientTrackingParams:e,aux_data:{clickthrough_type:"rightClick",...h||{},...t}}),y({event_type:8948,view_type:g,object_id_str:f,view_parameter:C,clientTrackingParams:e,aux_data:{click_type:"clickthrough",closeup_navigation_type:m&&(0,d.sV)(m)?"deeplink":"click",clickthrough_type:"rightClick",...h||{},...t}})))})},O=e=>{E&&(/^\/pin/.test(e.target.activeElement.attributes.href?.value)||(N(),k(!1)),window.removeEventListener(b,O,!1))};return(0,a.useEffect)(()=>{void 0!==window?.document?.hidden?P("visibilitychange"):void 0!==window?.document?.msHidden?P("msvisibilitychange"):void 0!==window?.document?.webkitHidden&&P("webkitvisibilitychange")},[]),(0,a.useEffect)(()=>(E&&window&&window.addEventListener(b,O,!1),()=>window.removeEventListener(b,O)),[E,b]),(0,a.useEffect)(()=>(n&&window.addEventListener("contextmenu",D),()=>{window.removeEventListener("contextmenu",D)}),[n]),(0,u.jsx)(a.Fragment,{children:t})}},245399:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(667294),a=i(883119),r=i(687997),l=i(785893);function o(e){(0,n.useContext)(r.Z);let{alt:t,color:i,children:o,crossOrigin:d,decoding:s,elementTiming:c,fetchPriority:u,fit:p,loading:_,naturalHeight:h,naturalWidth:m,onError:g,onLoad:y,role:E,sizes:k,src:b,srcSet:P,_fixCompletedOnLoad:A}=e;return(0,l.jsx)(a.Ee,{_fixCompletedOnLoad:A,alt:t,color:i,crossOrigin:d,decoding:s,elementTiming:c,fetchPriority:u,fit:p,loading:_,naturalHeight:h,naturalWidth:m,onError:g,onLoad:y,role:E,sizes:k,src:b,srcSet:P,children:o})}},627879:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(372085),a=i(288240),r=i(569372);let l=async({clientTrackingParams:e,href:t,isMounted:i,pinId:l,spamCheckCallback:o})=>{let d=await function(e){let t=(0,a.Z)(e),i=r.y8.get("ApiResource",t);if(i)return i;let l=(0,n.Z)(e);return r.y8.add("ApiResource",t,l),l}({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:l,url:t}});if(!d.resource_response.error&&i){let{message:e,redirect_status:t,url:i}=d.resource_response.data||{};o({blocked:["blocked","suspicious","porn"].includes(t),message:e,redirectStatus:t,sanitized_url:i})}}},921247:(e,t,i)=>{i.d(t,{Z:()=>n});function n({isOffsiteUrl:e,event:t}){return!e&&(t.metaKey||t.ctrlKey)}},794977:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(467139);function a({location:e,pinId:t,surface:i}){return!!i&&!n.ZF.includes(i)||e.pathname.includes(t)}},340370:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(667294),a=i(616550),r=i(627879),l=i(921247),o=i(979606),d=i(794977),s=i(96761),c=i(460270),u=i(862249),p=i(557874),_=i(953565);function h(e){let{clientTrackingParams:t,externalData:i,href:h,onHistoryChange:m,target:g}=e,[y,E]=(0,n.useState)(null),[k,b]=(0,n.useState)(!1),P=(0,a.k6)(),A=(0,a.TH)(),f=(0,c.Z)(h),v=(0,u.Z)({url:f}),{showWarning:S}=(0,p.s)()??{},{pin:L,surface:T}=i||{},I=t||L?.trackingParams,w=(0,s.Z)();return(0,n.useEffect)(()=>(b(!0),()=>{b(!1)}),[]),(0,n.useEffect)(()=>{v&&L&&null===y&&k&&(!L.promoter||L.isDownstreamPromotion)&&(0,d.Z)({location:A,pinId:L.entityId,surface:T})&&(0,r.Z)({clientTrackingParams:I,isMounted:k,pinId:L.entityId,spamCheckCallback:e=>E(e),href:f})},[I,L,T,f,v,k,A,y]),({event:e})=>{if(!(0,l.Z)({isOffsiteUrl:v,event:e})){if(e.preventDefault(),!h||"string"==typeof h&&h.startsWith("#")){(0,_.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:A.pathname,href:h}});return}v||i?.dangerouslyForceOffsiteUrl?w({auxData:i?.auxData,clientTrackingParams:I,pin:i?.pin&&{attributionSourceId:i.pin.attributionSourceId,campaignId:i.pin.campaignId,isPromoted:i.pin.isPromoted,pinPromotionId:i.pin.pinPromotionId,isThirdPartyAd:i.pin.isThirdPartyAd,advertiserId:i.pin.advertiserId,destinationUrl:i.pin.destinationUrl,link:i.pin.link,domain:i.pin.domain},pinId:i?.pin?.entityId,queryParams:i?.queryParams,showWarning:S,spamCheck:y,url:f}):(0,o.Z)({event:e,href:h,history:P,onHistoryChange:m,target:"blank"===g?"blank":null})}}}},96761:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(453880),a=i(934378),r=i(263032),l=i(86785),o=i(214877),d=i(551501),s=i(931090),c=i(171966);let u=(e,t,i)=>{let n=document.createElement("a");n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block",n.setAttribute(a.$N.ATTRIBUTION_SOURCE_ID,e),n.setAttribute(a.$N.ATTRIBUTE_DESTINATION,i),n.setAttribute(a.$N.ATTRIBUTE_ON,i),n.click()},p=(e,t,i,n,l,o,d)=>{let s=(0,r.m_)(e,[i,n,l],!0,o,d),c=document.createElement("a");c.setAttribute("href",t),c.setAttribute("target","_blank"),c.setAttribute("rel","noopener nofollow noreferrer"),c.style.cursor="pointer",c.style.display="block",c.setAttribute(a.NR.SOURCE,s),c.click()},_=()=>{let{logContextEvent:e}=(0,o.v)();return({attributionSourceId:t,auxData:i,campaignId:a,clientTrackingParams:r,href:o,isPromoted:s,pinId:c,pinPromotionId:_,isThirdPartyAd:h,advertiserId:m,destinationUrl:g,link:y,domain:E})=>{if(!s)return!1;let k=(0,n.Z)(),b=(0,d.Z)(o,{params:{pinId:c,csrId:null,clientTrackingParams:r,auxData:i,isThirdPartyAd:h}}),P=k?.userAgent.browserName??"";if((0,l.G6)(P)){let{group:i}=k?.experimentsClient.checkExperiment("m10n_event_conversion_measurement")??{},n=k?.userAgent.browserVersion?k.userAgent.browserVersion:"0.0",l=parseFloat(n.split(".")[0]+"."+n.split(".")[1]);if(t&&l>=14.1&&["enabled_safari"].includes(i))return u(t,b,o),e({event_type:101,clientTrackingParams:r,object_id_str:c||"",aux_data:{pin_id:c||"",click_measurement_ppid:_||"",click_measurement_campaign_id:a||"",is_pcm:!0,attribution_source_id:t,page_url:o}}),!0}else if((0,l.i7)(P)&&window.document.featurePolicy?.allowsFeature("attribution-reporting"))return p(t,b,g,y,E,a,m),e({event_type:101,clientTrackingParams:r,object_id_str:c||"",aux_data:{pin_id:c||"",click_measurement_ppid:_||"",click_measurement_campaign_id:a||"",is_arapi:!0,attribution_source_id:t,page_url:o}}),!0;return!1}},h=e=>{let t=_();return({auxData:i,clientTrackingParams:n,pin:a,pinId:r,queryParams:l,showWarning:o,spamCheck:d,url:u})=>{if("undefined"!=typeof window&&window.Windows){(0,c.Z)(u,{clientTrackingParams:n,pinId:r,hasPin:!!a,auxData:i,isThirdPartyAd:a?.isThirdPartyAd});return}if(!a&&!e?.isFromClickthroughLink){(0,s.Z)(u,l?{queryParams:l}:{params:{pinId:r}});return}if(d?.blocked){o?.(d);return}a&&t({attributionSourceId:a.attributionSourceId,auxData:i,campaignId:a.campaignId?String(a.campaignId):null,clientTrackingParams:n,href:u,isPromoted:a.isPromoted,pinId:r,pinPromotionId:a.pinPromotionId?String(a.pinPromotionId):null,isThirdPartyAd:a.isThirdPartyAd,advertiserId:a.advertiserId?a.advertiserId:null,destinationUrl:a.destinationUrl,link:a.link,domain:a.domain})||(0,s.Z)(u,{params:{clientTrackingParams:n,auxData:i,pinId:r,isThirdPartyAd:a?.isThirdPartyAd}})}}},414131:(e,t,i)=>{i.d(t,{Z:()=>n});function n({hasPin:e,hasPinRichMetadata:t,hasPinRichMetadataProducts:i,hasPinRichMetadataArticle:n,hasPinRichMetadataRecipe:a,hasPinStoryPinData:r}){if(e){if(t)return i?144:n?141:a?145:139;if(r)return 157}return 140}},460270:(e,t,i)=>{i.d(t,{Z:()=>n});let n=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},467139:(e,t,i)=>{i.d(t,{UP:()=>o,Wv:()=>a,ZF:()=>n,zI:()=>r,zl:()=>l});let n=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],a=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],r=[...a,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid","ShoppingTool"],l=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},557874:(e,t,i)=>{i.d(t,{Z:()=>g,s:()=>m});var n=i(667294),a=i(342513),r=i(608575),l=i(883119),o=i(930837),d=i(140017),s=i(339001),c=i(785893);let u=()=>{let e=(0,d.ZP)(),{dismissWarning:t}=m()??{};return(0,c.jsx)(l.xu,{paddingX:3,children:(0,c.jsx)(l.zx,{color:"red",fullWidth:!0,onClick:t,text:e.bt("OK", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{let e=(0,d.ZP)();return(0,c.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,c.jsx)(l.rU,{display:"inlineBlock",href:"https://policy.pinterest.com/community-guidelines#section-spam",target:"blank",underline:"hover",children:e.bt("Learn more", "Learn more", "Link text leading to policy website", undefined, true)})})},_=({message:e,sanitized_url:t})=>{let i=(0,d.ZP)(),{dismissWarning:n}=m()??{};return(0,c.jsx)(o.ZP,{accessibilityModalLabel:i.bt("We have blocked this link", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),footer:(0,c.jsx)(u,{}),heading:i.bt("Heads up!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),onDismiss:n,children:(0,c.jsxs)(l.xu,{padding:6,children:[(0,c.jsx)(l.xv,{children:(0,s.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,c.jsx)(p,{},"learnMoreLink")})}),(0,c.jsxs)(l.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,c.jsx)(l.xu,{marginEnd:3,children:(0,c.jsx)(l.JO,{accessibilityLabel:i.bt("Blocked link address", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,c.jsx)(l.xv,{inline:!0,lineClamp:1,weight:"bold",children:r.parse(t).hostname})]})]})})},{Provider:h,useMaybeHook:m}=(0,a.Z)("SpammyClickthrough");function g({children:e}){let[t,i]=(0,n.useState)(null),a=(0,n.useCallback)(()=>{i(null)},[i]),r=(0,n.useCallback)(e=>{i(e)},[i]),l=(0,n.useMemo)(()=>({dismissWarning:a,showWarning:r}),[a,r]);return(0,c.jsxs)(h,{value:l,children:[t&&(0,c.jsx)(_,{...t}),e]})}},687997:(e,t,i)=>{i.d(t,{Z:()=>n});let n=(0,i(667294).createContext)()}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/22143.en_GB-e15fc6bef0553c5c.mjs.map