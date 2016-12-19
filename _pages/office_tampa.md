---
layout: office_map
title: titles.office_map.tampa

map_url: 'https://maps.google.com/maps?ie=UTF8&amp;cid=5260789409644028660&amp;q=Gomez+%26+Touger,+P.A.&amp;gl=US&amp;hl=en&amp;t=m&amp;ll=27.968138,-82.483892&amp;spn=0.013266,0.018239&amp;z=15&amp;iwloc=A&amp;output=embed'

namespace: office_tampa
permalink: /office/tampa/
permalink_en: /office/tampa/
permalink_es: /oficina/tampa/
---

{% translate_file office_tampa.md %}

**{{site.data.business.name}}**

{% assign location=site.data.business.locations.tampa %}  
{{ location.address_line_1 }}  
{{ location.city }}, {{ location.state }} {{ location.zip }}

Telephone: {{ location.phone }}  
Fax: {{ location.fax }}
