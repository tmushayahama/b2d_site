import{k as l}from"./index-CEmxV0rs.js";const n=e=>l(e,"ZAR"),d=`Please reply with one of:
CONFIRM if you have everything as listed
CHANGES with each item you don't have, or whose price or quantity is different (you can send fewer items, not more)
REJECT and the reason, if you can't take this order`,i="Standard 4-door car";function c(e){return e.map(r=>`- ${r.quantity} x ${r.name} at ${n(r.unitCents)} each`).join(`
`)}function u(e,r,o,t=""){return`Beam2Door: new order ${e.orderNumber}

Hello ${e.merchantName}, a customer would like to order from ${e.shopName}:

${c(r)}${t?`

${t}.`:""}

Delivery to ${o}.
Vehicle: ${i}.

${d}`}function h(e){return`Beam2Door: reminder about order ${e.orderNumber}

Hello ${e.merchantName}, we are still waiting for ${e.shopName} to answer order ${e.orderNumber}. The customer is waiting.

${d}`}function s(e,r){const o=r.reduce((t,a)=>t+a.quantity*a.unitCents,0);return`Beam2Door: please prepare order ${e.orderNumber}

Hello ${e.merchantName}, the customer accepted the quotation and has paid. Please prepare:

${c(r)}

Total for the goods: ${n(o)}

Reply READY when the order is packed and ready for collection. When you reply that it's ready, please confirm the packed order fits in a ${i}. If you can't fulfil it, reply CANNOT and tell us why.`}function $(e,r,o){return`Beam2Door: driver on the way for order ${e.orderNumber}

Hello ${e.merchantName}, ${r} is on the way to ${e.shopName} to collect order ${e.orderNumber}, in a ${o}.`}function p(e,r){return`Beam2Door: order ${e.orderNumber} is cancelled

Hello ${e.merchantName}, order ${e.orderNumber} has been cancelled: ${r}

Please don't prepare or hand over this order.`}export{$ as d,u as n,p as o,s as p,h as r};
