document.addEventListener("DOMContentLoaded", function() {
  const nasModelsSelect = document.getElementById("nasModels");
  const paramDisplay = document.getElementById("paramDisplay");

  const nasModelsData = [
{"success":1,"list":[],"nas_model":"ds1019+"}, 
{"success":1,"list":[],"nas_model":"ds116"}, 
{"success":1,"list":[],"nas_model":"ds118"}, 
{"success":1,"list":[],"nas_model":"ds119j"}, 
{"success":1,"list":[],"nas_model":"ds120j"}, 
{"success":1,"list":[],"nas_model":"ds124"}, 
{"success":1,"list":[{"model_number":"RAM1600DDR3L-4GBx2","recommend":true},{"model_number":"RAM1600DDR3L-8GBx2","recommend":true}],"nas_model":"ds1517+"}, 
{"success":1,"list":[],"nas_model":"ds1517"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"ds1520+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES02-8G","recommend":true,"part_number":"AD4B320038G22 BSSC","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"},{"model_number":"D4ES01-16G","recommend":true,"part_number":"M4DE-AGS2PC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"}],"nas_model":"ds1522+"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4SO-16G","recommend":true,"speed":"2133"},{"model_number":"D4NS2133-4G","recommend":true,"speed":"2133"},{"model_number":"D4NESO-2400-4G","recommend":true,"part_number":"D4SS12081SH24A-B","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2400"},{"model_number":"D4ECSO-2400-16G","recommend":true,"part_number":"D4XS1G082SH21A\u2010B","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"2","speed":"2400"},{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"}],"nas_model":"ds1618+"}, 
{"success":1,"list":[{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES01-8G","recommend":true,"part_number":"M4DI-8GSSQC0K-F","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2666"},{"model_number":"D4ES01-4G","recommend":true,"part_number":"D4XS12081SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\",\"017A\",\"Apacer\"]","rank":"1","speed":"2666"}],"nas_model":"ds1621+"}, 
{"success":1,"list":[{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES01-8G","recommend":true,"part_number":"M4DI-8GSSQC0K-F","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2666"}],"nas_model":"ds1621xs+"}, 
{"success":1,"list":[{"model_number":"RAM1600DDR3L-4GBx2","recommend":true},{"model_number":"RAM1600DDR3L-8GBx2","recommend":true}],"nas_model":"ds1817+"}, 
{"success":1,"list":[{"model_number":"RAM1600DDR3-4G","recommend":true}],"nas_model":"ds1817"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4SO-16G","recommend":true,"speed":"2133"},{"model_number":"D4NS2133-4G","recommend":true,"speed":"2133"},{"model_number":"D4NESO-2400-4G","recommend":true,"part_number":"D4SS12081SH24A-B","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2400"},{"model_number":"D4ECSO-2400-16G","recommend":true,"part_number":"D4XS1G082SH21A\u2010B","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"2","speed":"2400"},{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"}],"nas_model":"ds1819+"}, 
{"success":1,"list":[{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES01-8G","recommend":true,"part_number":"M4DI-8GSSQC0K-F","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2666"},{"model_number":"D4ES01-4G","recommend":true,"part_number":"D4XS12081SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\",\"017A\",\"Apacer\"]","rank":"1","speed":"2666"}],"nas_model":"ds1821+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES02-8G","recommend":true,"part_number":"AD4B320038G22 BSSC","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"},{"model_number":"D4ES01-16G","recommend":true,"part_number":"M4DE-AGS2PC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"}],"nas_model":"ds1823xs+"}, 
{"success":1,"list":[],"nas_model":"ds216+ii"}, 
{"success":1,"list":[],"nas_model":"ds216+"}, 
{"success":1,"list":[],"nas_model":"ds216j"}, 
{"success":1,"list":[],"nas_model":"ds216play"}, 
{"success":1,"list":[],"nas_model":"ds216"}, 
{"success":1,"list":[{"model_number":"D3NS1866L-4G","recommend":true}],"nas_model":"ds218+"}, 
{"success":1,"list":[],"nas_model":"ds218j"}, 
{"success":1,"list":[],"nas_model":"ds218play"}, 
{"success":1,"list":[],"nas_model":"ds218"}, 
{"success":1,"list":[{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"ds220+"}, 
{"success":1,"list":[],"nas_model":"ds220j"}, 
{"success":1,"list":[],"nas_model":"ds223j"}, 
{"success":1,"list":[],"nas_model":"ds223"}, 
{"success":1,"list":[{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"ds224+"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4SO-16G","recommend":true,"speed":"2133"},{"model_number":"D4NS2133-4G","recommend":true,"speed":"2133"},{"model_number":"D4NESO-2400-4G","recommend":true,"part_number":"D4SS12081SH24A-B","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2400"},{"model_number":"D4ECSO-2400-16G","recommend":true,"part_number":"D4XS1G082SH21A\u2010B","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"2","speed":"2400"},{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"}],"nas_model":"ds2419+ii"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4SO-16G","recommend":true,"speed":"2133"},{"model_number":"D4NS2133-4G","recommend":true,"speed":"2133"},{"model_number":"D4NESO-2400-4G","recommend":true,"part_number":"D4SS12081SH24A-B","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2400"},{"model_number":"D4ECSO-2400-16G","recommend":true,"part_number":"D4XS1G082SH21A\u2010B","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"2","speed":"2400"},{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"}],"nas_model":"ds2419+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES02-4G","recommend":true,"part_number":"M4DE-4GSSPC0M-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"},{"model_number":"D4ES02-8G","recommend":true,"part_number":"AD4B320038G22 BSSC","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"},{"model_number":"D4ES01-16G","recommend":true,"part_number":"M4DE-AGS2PC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"}],"nas_model":"ds2422+"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4SO-16G","recommend":true,"speed":"2133"},{"model_number":"D4ECSO-2400-16G","recommend":true,"part_number":"D4XS1G082SH21A\u2010B","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"2","speed":"2400"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"}],"nas_model":"ds3018xs"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4SO-16G","recommend":true,"speed":"2133"},{"model_number":"D4ECSO-2400-16G","recommend":true,"part_number":"D4XS1G082SH21A\u2010B","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"2","speed":"2400"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"}],"nas_model":"ds3617xsii"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4SO-16G","recommend":true,"speed":"2133"},{"model_number":"D4ECSO-2400-16G","recommend":true,"part_number":"D4XS1G082SH21A\u2010B","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"2","speed":"2400"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"}],"nas_model":"ds3617xs"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES02-8G","recommend":true,"part_number":"AD4B320038G22 BSSC","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"},{"model_number":"D4ES01-16G","recommend":true,"part_number":"M4DE-AGS2PC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"}],"nas_model":"ds3622xs+"}, 
{"success":1,"list":[],"nas_model":"ds416j"}, 
{"success":1,"list":[],"nas_model":"ds416play"}, 
{"success":1,"list":[],"nas_model":"ds416slim"}, 
{"success":1,"list":[],"nas_model":"ds416"}, 
{"success":1,"list":[],"nas_model":"ds418j"}, 
{"success":1,"list":[{"model_number":"D3NS1866L-4G","recommend":true}],"nas_model":"ds418play"}, 
{"success":1,"list":[],"nas_model":"ds418"}, 
{"success":1,"list":[],"nas_model":"ds419slim"}, 
{"success":1,"list":[{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"ds420+"}, 
{"success":1,"list":[],"nas_model":"ds420j"}, 
{"success":1,"list":[{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"ds423+"}, 
{"success":1,"list":[],"nas_model":"ds423"}, 
{"success":1,"list":[{"model_number":"D3NS1866L-4G","recommend":true}],"nas_model":"ds620slim"}, 
{"success":1,"list":[],"nas_model":"ds716+ii"}, 
{"success":1,"list":[],"nas_model":"ds716+"}, 
{"success":1,"list":[{"model_number":"D3NS1866L-4G","recommend":true}],"nas_model":"ds718+"}, 
{"success":1,"list":[{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"ds720+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES02-4G","recommend":true,"part_number":"M4DE-4GSSPC0M-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"},{"model_number":"D4ES02-8G","recommend":true,"part_number":"AD4B320038G22 BSSC","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"},{"model_number":"D4ES01-16G","recommend":true,"part_number":"M4DE-AGS2PC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"}],"nas_model":"ds723+"}, 
{"success":1,"list":[],"nas_model":"ds916+"}, 
{"success":1,"list":[{"model_number":"D3NS1866L-4G","recommend":true}],"nas_model":"ds918+"}, 
{"success":1,"list":[{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"ds920+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES02-4G","recommend":true,"part_number":"M4DE-4GSSPC0M-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"},{"model_number":"D4ES02-8G","recommend":true,"part_number":"AD4B320038G22 BSSC","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"},{"model_number":"D4ES01-16G","recommend":true,"part_number":"M4DE-AGS2PC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"}],"nas_model":"ds923+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"dva1622"}, 
{"success":1,"list":[{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"}],"nas_model":"dva3219"}, 
{"success":1,"list":[{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"dva3221"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4SO-16G","recommend":true,"speed":"2133"},{"model_number":"D4ECSO-2400-16G","recommend":true,"part_number":"D4XS1G082SH21A\u2010B","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"2","speed":"2400"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"}],"nas_model":"fs1018"}, 
{"success":1,"list":[{"model_number":"RAMRG2133DDR4-16G","recommend":true,"part_number":"M393A2G40EB1-CRC","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2133"},{"model_number":"RAMRG2133DDR4-32G","recommend":true,"part_number":"M393A4K40BB0-CPB","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2133"},{"model_number":"D4RD-2666-32G","recommend":true,"part_number":"M393A4K40CB2-CTD","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2666"}],"nas_model":"fs2017"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EU01-8G","recommend":true,"part_number":"D4ES1G081SH32A-E","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"},{"model_number":"D4EU01-16G","recommend":true,"part_number":"M4CE-AGS2LC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"}],"nas_model":"fs2500"}, 
{"success":1,"list":[{"model_number":"RAMRG2133DDR4-16G","recommend":true,"part_number":"M393A2G40EB1-CRC","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2133"},{"model_number":"RAMRG2133DDR4-32G","recommend":true,"part_number":"M393A4K40BB0-CPB","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2133"},{"model_number":"D4RD-2666-32G","recommend":true,"part_number":"M393A4K40CB2-CTD","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2666"}],"nas_model":"fs3017"}, 
{"success":1,"list":[{"model_number":"D4RD-2666-32G","recommend":true,"part_number":"M393A4K40CB2-CTD","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2666"},{"model_number":"D4RD-2666-16G","recommend":true,"part_number":"D4RS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\"]","rank":"2","speed":"2666"}],"nas_model":"fs3400"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ER01-16G","recommend":true,"part_number":"M4R0-AGS1BCEM-A14","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"2","speed":"3200"},{"model_number":"D4ER01-32G","recommend":true,"part_number":"M4R0-BGS2BCEM-A14","manufacturer":"[\"86F1\",\"Innodisk\",\"017A\",\"Apacer\"]","rank":"2","speed":"3200"}],"nas_model":"fs3410"}, 
{"success":1,"list":[{"model_number":"D4RD-2666-32G","recommend":true,"part_number":"M393A4K40CB2-CTD","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2666"},{"model_number":"D4RD-2666-16G","recommend":true,"part_number":"D4RS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\"]","rank":"2","speed":"2666"}],"nas_model":"fs3600"}, 
{"success":1,"list":[{"model_number":"D4RD-2666-32G","recommend":true,"part_number":"M393A4K40CB2-CTD","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2666"},{"model_number":"D4RD-2666-16G","recommend":true,"part_number":"D4RS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\"]","rank":"2","speed":"2666"}],"nas_model":"fs6400"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ER01-32G","recommend":true,"part_number":"M4R0-BGS2BCEM-A14","manufacturer":"[\"86F1\",\"Innodisk\",\"017A\",\"Apacer\"]","rank":"2","speed":"3200"}],"nas_model":"hd6500"}, 
{"success":1,"list":[{"model_number":"RAM1600DDR3L-4GBx2","recommend":true},{"model_number":"RAM1600DDR3L-8GBx2","recommend":true}],"nas_model":"rs1219+"}, 
{"success":1,"list":[{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES01-8G","recommend":true,"part_number":"M4DI-8GSSQC0K-F","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2666"},{"model_number":"D4ES01-4G","recommend":true,"part_number":"D4XS12081SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\",\"017A\",\"Apacer\"]","rank":"1","speed":"2666"}],"nas_model":"rs1221+"}, 
{"success":1,"list":[{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES01-8G","recommend":true,"part_number":"M4DI-8GSSQC0K-F","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2666"},{"model_number":"D4ES01-4G","recommend":true,"part_number":"D4XS12081SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\",\"017A\",\"Apacer\"]","rank":"1","speed":"2666"}],"nas_model":"rs1221rp+"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4-8G","recommend":true,"part_number":"M391A1G43EB1-CPB","manufacturer":"[\"86F1\",\"Innodisk\",\"80CE\",\"Samsung\"]","speed":"2133"},{"model_number":"RAMEC2133DDR4-16G","recommend":true,"speed":"2133"},{"model_number":"D4EC-2400-16G","recommend":true,"part_number":"M391A2K43BB1-CPB0","manufacturer":"[\"80CE\",\"Samsung\"]","speed":"2400"},{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs1619xs+"}, 
{"success":1,"list":[{"model_number":"RAMEC1600DDR3-4GBX2","recommend":true},{"model_number":"RAMEC1600DDR3-8GBX2","recommend":true}],"nas_model":"rs18016xs+"}, 
{"success":1,"list":[{"model_number":"RAMRG2133DDR4-16G","recommend":true,"part_number":"M393A2G40EB1-CRC","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2133"},{"model_number":"RAMRG2133DDR4-32G","recommend":true,"part_number":"M393A4K40BB0-CPB","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2133"},{"model_number":"D4RD-2666-32G","recommend":true,"part_number":"M393A4K40CB2-CTD","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2666"}],"nas_model":"rs18017xs+"}, 
{"success":1,"list":[],"nas_model":"rs217"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4-16G","recommend":true,"speed":"2133"},{"model_number":"D4N2133-4G","recommend":true,"part_number":"M4US-4GSSJC0J-E","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2133"},{"model_number":"D4EC-2400-16G","recommend":true,"part_number":"M391A2K43BB1-CPB0","manufacturer":"[\"80CE\",\"Samsung\"]","speed":"2400"},{"model_number":"D4NE-2666-4G","recommend":true,"part_number":"M4UI-4GSSJC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2666"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs2418+"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4-16G","recommend":true,"speed":"2133"},{"model_number":"D4N2133-4G","recommend":true,"part_number":"M4US-4GSSJC0J-E","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2133"},{"model_number":"D4EC-2400-16G","recommend":true,"part_number":"M391A2K43BB1-CPB0","manufacturer":"[\"80CE\",\"Samsung\"]","speed":"2400"},{"model_number":"D4NE-2666-4G","recommend":true,"part_number":"M4UI-4GSSJC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2666"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs2418rp+"}, 
{"success":1,"list":[{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"D4EU01-4G","recommend":true,"part_number":"D4ES12081SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\"]","rank":"1","speed":"2666"}],"nas_model":"rs2421+"}, 
{"success":1,"list":[{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"D4EU01-4G","recommend":true,"part_number":"D4ES12081SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\"]","rank":"1","speed":"2666"}],"nas_model":"rs2421rp+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EU01-8G","recommend":true,"part_number":"D4ES1G081SH32A-E","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"},{"model_number":"D4EU01-16G","recommend":true,"part_number":"M4CE-AGS2LC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"}],"nas_model":"rs2423+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EU01-8G","recommend":true,"part_number":"D4ES1G081SH32A-E","manufacturer":"[\"08F7\",\"DSL\",\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"},{"model_number":"D4EU01-16G","recommend":true,"part_number":"M4CE-AGS2LC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"}],"nas_model":"rs2423rp+"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4-16G","recommend":true,"speed":"2133"},{"model_number":"D4N2133-4G","recommend":true,"part_number":"M4US-4GSSJC0J-E","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2133"},{"model_number":"D4EC-2400-16G","recommend":true,"part_number":"M391A2K43BB1-CPB0","manufacturer":"[\"80CE\",\"Samsung\"]","speed":"2400"},{"model_number":"D4NE-2666-4G","recommend":true,"part_number":"M4UI-4GSSJC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"2666"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs2818rp+"}, 
{"success":1,"list":[{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"D4EU01-4G","recommend":true,"part_number":"D4ES12081SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\"]","rank":"1","speed":"2666"}],"nas_model":"rs2821rp+"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4-8G","recommend":true,"part_number":"M391A1G43EB1-CPB","manufacturer":"[\"86F1\",\"Innodisk\",\"80CE\",\"Samsung\"]","speed":"2133"},{"model_number":"RAMEC2133DDR4-16G","recommend":true,"speed":"2133"},{"model_number":"D4EC-2400-16G","recommend":true,"part_number":"M391A2K43BB1-CPB0","manufacturer":"[\"80CE\",\"Samsung\"]","speed":"2400"},{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs3617rpxs"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4-8G","recommend":true,"part_number":"M391A1G43EB1-CPB","manufacturer":"[\"86F1\",\"Innodisk\",\"80CE\",\"Samsung\"]","speed":"2133"},{"model_number":"RAMEC2133DDR4-16G","recommend":true,"speed":"2133"},{"model_number":"D4EC-2400-16G","recommend":true,"part_number":"M391A2K43BB1-CPB0","manufacturer":"[\"80CE\",\"Samsung\"]","speed":"2400"},{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs3617xs+"}, 
{"success":1,"list":[{"model_number":"RAMEC1600DDR3-2GBX2","recommend":true},{"model_number":"RAMEC1600DDR3-4GBX2","recommend":true},{"model_number":"RAMEC1600DDR3-8GBX2","recommend":true}],"nas_model":"rs3617xs"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4-8G","recommend":true,"part_number":"M391A1G43EB1-CPB","manufacturer":"[\"86F1\",\"Innodisk\",\"80CE\",\"Samsung\"]","speed":"2133"},{"model_number":"RAMEC2133DDR4-16G","recommend":true,"speed":"2133"},{"model_number":"D4EC-2400-16G","recommend":true,"part_number":"M391A2K43BB1-CPB0","manufacturer":"[\"80CE\",\"Samsung\"]","speed":"2400"},{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs3618xs"}, 
{"success":1,"list":[{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs3621rpxs"}, 
{"success":1,"list":[{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs3621xs+"}, 
{"success":1,"list":[{"model_number":"RAMEC2133DDR4-8G","recommend":true,"part_number":"M391A1G43EB1-CPB","manufacturer":"[\"86F1\",\"Innodisk\",\"80CE\",\"Samsung\"]","speed":"2133"},{"model_number":"RAMEC2133DDR4-16G","recommend":true,"speed":"2133"},{"model_number":"D4EC-2400-16G","recommend":true,"part_number":"M391A2K43BB1-CPB0","manufacturer":"[\"80CE\",\"Samsung\"]","speed":"2400"},{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs4017xs+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"rs4021xs+"}, 
{"success":1,"list":[],"nas_model":"rs422+"}, 
{"success":1,"list":[{"model_number":"RAM1600DDR3L-4GBx2","recommend":true},{"model_number":"RAM1600DDR3L-8GBx2","recommend":true}],"nas_model":"rs818rp+"}, 
{"success":1,"list":[{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"rs820+"}, 
{"success":1,"list":[{"model_number":"D4NESO-2666-4G","recommend":true,"part_number":"D4SS12161SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"1","speed":"2666"},{"model_number":"D4ECSO-2666-16G","recommend":true,"part_number":"D4XS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"}],"nas_model":"rs820rp+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES02-4G","recommend":true,"part_number":"M4DE-4GSSPC0M-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"},{"model_number":"D4ES02-8G","recommend":true,"part_number":"AD4B320038G22 BSSC","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"},{"model_number":"D4ES01-16G","recommend":true,"part_number":"M4DE-AGS2PC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"}],"nas_model":"rs822+"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ES02-4G","recommend":true,"part_number":"M4DE-4GSSPC0M-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"},{"model_number":"D4ES02-8G","recommend":true,"part_number":"AD4B320038G22 BSSC","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"1","speed":"3200"},{"model_number":"D4ES01-16G","recommend":true,"part_number":"M4DE-AGS2PC0M-AA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"1","speed":"3200"}],"nas_model":"rs822rp+"}, 
{"success":1,"list":[{"model_number":"D4EC-2400-16G","recommend":true,"part_number":"M391A2K43BB1-CPB0","manufacturer":"[\"80CE\",\"Samsung\"]","speed":"2400"},{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"sa3200d"}, 
{"success":1,"list":[{"model_number":"D4EC-2666-8G","recommend":true,"part_number":"M4CI-8GSSMC0K-FA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"},{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4EC-2666-16G","recommend":true,"part_number":"M4CI-AGS1MC0K-CA14","manufacturer":"[\"86F1\",\"Innodisk\"]","rank":"2","speed":"2666"}],"nas_model":"sa3400d"}, 
{"success":1,"list":[{"model_number":"D4RD-2666-32G","recommend":true,"part_number":"M393A4K40CB2-CTD","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2666"},{"model_number":"D4RD-2666-16G","recommend":true,"part_number":"D4RS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\"]","rank":"2","speed":"2666"}],"nas_model":"sa3400"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ER01-16G","recommend":true,"part_number":"M4R0-AGS1BCEM-A14","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"2","speed":"3200"},{"model_number":"D4ER01-32G","recommend":true,"part_number":"M4R0-BGS2BCEM-A14","manufacturer":"[\"86F1\",\"Innodisk\",\"017A\",\"Apacer\"]","rank":"2","speed":"3200"}],"nas_model":"sa3410"}, 
{"success":1,"list":[{"model_number":"D4RD-2666-32G","recommend":true,"part_number":"M393A4K40CB2-CTD","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"2666"},{"model_number":"D4RD-2666-16G","recommend":true,"part_number":"D4RS1G082SH26A-C","manufacturer":"[\"08F7\",\"DSL\",\"04CB\",\"Adata\"]","rank":"2","speed":"2666"}],"nas_model":"sa3600"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ER01-16G","recommend":true,"part_number":"M4R0-AGS1BCEM-A14","manufacturer":"[\"86F1\",\"Innodisk\",\"04CB\",\"Adata\"]","rank":"2","speed":"3200"},{"model_number":"D4ER01-32G","recommend":true,"part_number":"M4R0-BGS2BCEM-A14","manufacturer":"[\"86F1\",\"Innodisk\",\"017A\",\"Apacer\"]","rank":"2","speed":"3200"}],"nas_model":"sa3610"}, 
{"success":1,"list":[{"model_number":"Blacklist","recommend":true,"manufacturer":"[\"0198\",\"Kingston\",\"014F\",\"Transcend\"]"},{"model_number":"D4ER01-32G","recommend":true,"part_number":"M4R0-BGS2BCEM-A14","manufacturer":"[\"86F1\",\"Innodisk\",\"017A\",\"Apacer\"]","rank":"2","speed":"3200"},{"model_number":"D4ER01-64G","recommend":true,"part_number":"M393A8G40BB4-CWE","manufacturer":"[\"80CE\",\"Samsung\"]","rank":"2","speed":"3200"}],"nas_model":"sa6400"}
];

  nasModelsData.forEach(modelData => {
    const option = document.createElement("option");
    option.value = modelData.nas_model;
    option.textContent = modelData.nas_model;
    nasModelsSelect.appendChild(option);
  });

  function displayParameters(parameters) {
    let formattedParams = "<h2>Memory paramaters:</h2>";
    parameters.forEach(param => {
      formattedParams += `<p>
        model_number: ${param.model_number}<br>
        part_number: ${param.part_number}<br>
        manufacturer: ${param.manufacturer}<br>
        rank: ${param.rank}<br>
        speed: ${param.speed}
      </p>`;
    });
    return formattedParams;
  }

  nasModelsSelect.addEventListener("change", function() {
    const selectedModel = this.value;
    const selectedData = nasModelsData.find(data => data.nas_model === selectedModel);

    if (selectedData && selectedData.list && selectedData.list.length > 0) {
      const parameters = selectedData.list.sort((a, b) => {
        if (a.model_number === "Blacklist") return -1;
        if (b.model_number === "Blacklist") return 1;
        return 0;
      });

      const formattedParameters = displayParameters(parameters);
      paramDisplay.innerHTML = formattedParameters;
    } else {
      paramDisplay.innerHTML = "<p>There is no factory memory compatibility data for this model.</p>";
    }
  });
});
