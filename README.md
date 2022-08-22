fsrezende.com.br
======
**fii-table** is a api to store and consolidate FII data recovered from fii-simple
======
* fill FII_URL property with url to fii-simple project
* fill FII_KEY property with security key
* fill MONGO_URL to store server

## call on http://localhost:3000/api/fii/RECR11
```
#return: 
{
	"ticker": "RECR11",
	"name": "REC Recebíveis Imobiliários",
	"administrator": "BRL Trust DTVM",
	"dividendYield": 1.07,
	"lastYield": 1.02,
	"equity": 2.52,
	"patrimonialValuePerQuota": 95.45,
	"currentQuota": 95,
	"min52weeks": 90.2,
	"max52weeks": 106.4,
	"valorization12months": 9.09,
	"typeOfFII": "Papel: CRIs",
	"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
	"dateOnCVM": "2017-07-21",
	"numberOfQuota": 26441650,
	"numberOfQuotaHolders": 172375,
	"lastRevenuesTable": [
		{
			"dataBase": "2022-08-05",
			"datePayment": "2022-08-12",
			"baseQuotation": 96.55,
			"dividendYield": 1.06,
			"yield": 1.021
		},
		{
			"dataBase": "2022-07-07",
			"datePayment": "2022-07-14",
			"baseQuotation": 100.3,
			"dividendYield": 1.15,
			"yield": 1.15
		},
		{
			"dataBase": "2022-06-07",
			"datePayment": "2022-06-14",
			"baseQuotation": 102,
			"dividendYield": 1.69,
			"yield": 1.721
		},
		{
			"dataBase": "2022-05-06",
			"datePayment": "2022-05-13",
			"baseQuotation": 100.02,
			"dividendYield": 1.5,
			"yield": 1.502
		},
		{
			"dataBase": "2022-04-07",
			"datePayment": "2022-04-14",
			"baseQuotation": 101.9,
			"dividendYield": 1.34,
			"yield": 1.368
		},
		{
			"dataBase": "2022-03-08",
			"datePayment": "2022-03-15",
			"baseQuotation": 100.35,
			"dividendYield": 1.19,
			"yield": 1.196
		},
		{
			"dataBase": "2022-02-07",
			"datePayment": "2022-02-14",
			"baseQuotation": 102.8,
			"dividendYield": 1.02,
			"yield": 1.05
		},
		{
			"dataBase": "2022-01-07",
			"datePayment": "2022-01-14",
			"baseQuotation": 100.98,
			"dividendYield": 1.44,
			"yield": 1.456
		},
		{
			"dataBase": "2021-12-07",
			"datePayment": "2021-12-14",
			"baseQuotation": 98.2,
			"dividendYield": 1.2,
			"yield": 1.181
		},
		{
			"dataBase": "2021-11-08",
			"datePayment": "2021-11-16",
			"baseQuotation": 100.65,
			"dividendYield": 1.07,
			"yield": 1.081
		}
	],
	"news": [
		{
			"date": "2022-08-15",
			"text": "Informe Trimestral - 30/06/2022",
			"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=340103&amp;flnk"
		},
		{
			"date": "2022-08-11",
			"text": "Esclarecimentos de consulta B3 / CVM - 11/08/2022",
			"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336837&amp;flnk"
		},
		{
			"date": "2022-08-11",
			"text": "Informe Mensal - 07/2022",
			"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336371&amp;flnk"
		},
		{
			"date": "2022-08-05",
			"text": "Relatorio Gerencial - 29/07/2022",
			"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=333881&amp;flnk"
		},
		{
			"date": "2022-08-05",
			"text": "Informou distribuição de:Rendimento no valor de R$ 1,0205 por cota no dia 12/08/2022Data base: 05/08/2022 Fechamento: R$ 96,55 Rendimento%: 1,057"
		},
		{
			"date": "2022-08-05",
			"text": "Aviso aos Cotistas - 05/08/2022",
			"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=333833&amp;flnk"
		},
		{
			"date": "2022-07-15",
			"text": "Informe Mensal - 06/2022",
			"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=326918&amp;flnk"
		},
		{
			"date": "2022-07-07",
			"text": "Informou distribuição de:Rendimento no valor de R$ 1,15 por cota no dia 14/07/2022Data base: 07/07/2022 Fechamento: R$ 100,30 Rendimento%: 1,147"
		},
		{
			"date": "2022-07-07",
			"text": "Relatorio Gerencial - 30/06/2022",
			"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323236&amp;flnk"
		},
		{
			"date": "2022-07-07",
			"text": "Aviso aos Cotistas - 07/07/2022",
			"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323223&amp;flnk"
		},
		{
			"date": "2022-06-20",
			"text": "Informe Mensal - 05/2022 (R)",
			"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=317447&amp;flnk"
		},
		{
			"date": "2022-06-15",
			"text": "Informe Mensal - 05/2022",
			"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=316332&amp;flnk"
		},
		{
			"date": "2022-06-08",
			"text": "Perfil do Fundo Estruturado - 07/06/2022",
			"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=312636&amp;flnk"
		},
		{
			"date": "2022-06-08",
			"text": "Liberacao de Negociacao das Cotas - 07/06/2022",
			"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=312629&amp;flnk"
		},
		{
			"date": "2022-06-08",
			"text": "Comunicado nao Fato Relevante - 07/06/2022(N)",
			"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=312269&amp;flnk"
		}
	],
	"mounthsPastLastRevenue": "0.57",
	"frequencyYield": "1.09",
	"sumYield": "12.66",
	"avgMonthYield": "1.16",
	"prevMonthNextYield": "2022-09-05"
}
```
## call on http://localhost:3000/api/fii/bests
```
#return: 
{
	"error": false,
	"listFounded": [
		"JPPA11 - lastDY: 1.70% - avgDY: 1.40% - nextDt: 28/08/2022",
		"URPR11 - lastDY: 1.15% - avgDY: 1.35% - nextDt: 28/08/2022",
		"PORD11 - lastDY: 1.56% - avgDY: 1.22% - nextDt: 28/08/2022",
		"HABT11 - lastDY: 1.37% - avgDY: 1.12% - nextDt: 28/08/2022",
		"FLCR11 - lastDY: 1.18% - avgDY: 1.35% - nextDt: 04/09/2022",
		"DEVA11 - lastDY: 1.29% - avgDY: 1.24% - nextDt: 04/09/2022",
		"IRDM11 - lastDY: 1.31% - avgDY: 1.08% - nextDt: 08/09/2022",
		"RBRY11 - lastDY: 1.32% - avgDY: 1.08% - nextDt: 08/09/2022",
		"RZAK11 - lastDY: 1.50% - avgDY: 1.35% - nextDt: 11/09/2022",
		"BVAR11 - lastDY: 7.98% - avgDY: 10.57% - nextDt: 14/09/2022",
		"CCRF11 - lastDY: 1.11% - avgDY: 1.08% - nextDt: 16/09/2022"
	],
	"data": [
		{
			"ticker": "JPPA11",
			"administrator": "Vórtx DTVM LTDA",
			"avgMonthYield": 1.4,
			"createdAt": "2022-08-19T20:26:40.352Z",
			"currentQuota": 104.36,
			"dateOnCVM": "2018-06-25T00:00:00.000Z",
			"dividendYield": 1.7,
			"equity": 60930000,
			"frequencyYield": 1.1,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-07-29T00:00:00.000Z",
					"datePayment": "2022-08-12T00:00:00.000Z",
					"baseQuotation": 103.29,
					"dividendYield": 1.71,
					"yield": 1.77
				},
				{
					"dataBase": "2022-06-30T00:00:00.000Z",
					"datePayment": "2022-07-08T00:00:00.000Z",
					"baseQuotation": 106.1,
					"dividendYield": 1.92,
					"yield": 2.04
				},
				{
					"dataBase": "2022-05-31T00:00:00.000Z",
					"datePayment": "2022-06-08T00:00:00.000Z",
					"baseQuotation": 103.9,
					"dividendYield": 1.92,
					"yield": 2
				},
				{
					"dataBase": "2022-04-29T00:00:00.000Z",
					"datePayment": "2022-05-09T00:00:00.000Z",
					"baseQuotation": 103.67,
					"dividendYield": 1.74,
					"yield": 1.8
				},
				{
					"dataBase": "2022-03-31T00:00:00.000Z",
					"datePayment": "2022-04-08T00:00:00.000Z",
					"baseQuotation": 100.94,
					"dividendYield": 1.54,
					"yield": 1.55
				},
				{
					"dataBase": "2022-02-25T00:00:00.000Z",
					"datePayment": "2022-03-09T00:00:00.000Z",
					"baseQuotation": 98.51,
					"dividendYield": 1.52,
					"yield": 1.5
				},
				{
					"dataBase": "2022-01-31T00:00:00.000Z",
					"datePayment": "2022-02-08T00:00:00.000Z",
					"baseQuotation": 98,
					"dividendYield": 1.22,
					"yield": 1.2
				},
				{
					"dataBase": "2021-12-30T00:00:00.000Z",
					"datePayment": "2022-01-10T00:00:00.000Z",
					"baseQuotation": 98.43,
					"dividendYield": 1.42,
					"yield": 1.4
				},
				{
					"dataBase": "2021-11-30T00:00:00.000Z",
					"datePayment": "2021-12-08T00:00:00.000Z",
					"baseQuotation": 96.2,
					"dividendYield": 1.25,
					"yield": 1.2
				},
				{
					"dataBase": "2021-10-29T00:00:00.000Z",
					"datePayment": "2021-11-09T00:00:00.000Z",
					"baseQuotation": 96.6,
					"dividendYield": 1.14,
					"yield": 1.1
				}
			],
			"lastYield": 1.77,
			"max52weeks": 107,
			"min52weeks": 92.5,
			"mounthsPastLastRevenue": 0.79,
			"name": "JPP Allocation Mogno",
			"news": [
				{
					"date": "2022-08-15T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=339295&amp;flnk"
				},
				{
					"date": "2022-08-11T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336653&amp;flnk"
				},
				{
					"date": "2022-08-08T00:00:00.000Z",
					"text": "Relatorio Gerencial - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=334156&amp;flnk"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,77 por cota no dia 12/08/2022Data base: 29/07/2022 Fechamento: R$ 103,29 Rendimento%: 1,714"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=332058&amp;flnk"
				},
				{
					"date": "2022-07-14T00:00:00.000Z",
					"text": "Informe Mensal - 06/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=325787&amp;flnk"
				},
				{
					"date": "2022-07-12T00:00:00.000Z",
					"text": "Regulamento - 18/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=324696&amp;flnk"
				},
				{
					"date": "2022-07-06T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323008&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 2,04 por cota no dia 08/07/2022Data base: 30/06/2022 Fechamento: R$ 106,10 Rendimento%: 1,923"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321125&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Comunicado nao Fato Relevante - 28/06/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=319905&amp;flnk"
				},
				{
					"date": "2022-06-28T00:00:00.000Z",
					"text": "Comunicado nao Fato Relevante - 28/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=319905&amp;flnk"
				},
				{
					"date": "2022-06-28T00:00:00.000Z",
					"text": "AGE - Resumo das Deliberacoes - 20/06/2022 19:00(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=318248&amp;flnk"
				},
				{
					"date": "2022-06-22T00:00:00.000Z",
					"text": "AGE - Resumo das Deliberacoes - 20/06/2022 19:00",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=318248&amp;flnk"
				},
				{
					"date": "2022-06-20T00:00:00.000Z",
					"text": "AGE - Proposta da Administradora - 17/06/2022 23:59",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=317479&amp;flnk"
				}
			],
			"numberOfQuota": 603964,
			"numberOfQuotaHolders": 4870,
			"patrimonialValuePerQuota": 100.88,
			"prevMonthNextYield": "2022-08-29T00:00:00.000Z",
			"sumYield": 15.38,
			"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T13:09:32.789Z",
			"valorization12months": 6.54
		},
		{
			"ticker": "URPR11",
			"administrator": "Vórtx DTVM LTDA",
			"avgMonthYield": 1.35,
			"createdAt": "2022-08-19T20:26:42.164Z",
			"currentQuota": 104.22,
			"dateOnCVM": "2019-12-03T00:00:00.000Z",
			"dividendYield": 1.15,
			"equity": 989470000,
			"frequencyYield": 1.1,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-07-29T00:00:00.000Z",
					"datePayment": "2022-08-12T00:00:00.000Z",
					"baseQuotation": 108.55,
					"dividendYield": 1.11,
					"yield": 1.2
				},
				{
					"dataBase": "2022-06-30T00:00:00.000Z",
					"datePayment": "2022-07-14T00:00:00.000Z",
					"baseQuotation": 112,
					"dividendYield": 1.65,
					"yield": 1.85
				},
				{
					"dataBase": "2022-05-31T00:00:00.000Z",
					"datePayment": "2022-06-14T00:00:00.000Z",
					"baseQuotation": 111.23,
					"dividendYield": 1.81,
					"yield": 2.01
				},
				{
					"dataBase": "2022-04-29T00:00:00.000Z",
					"datePayment": "2022-05-13T00:00:00.000Z",
					"baseQuotation": 107,
					"dividendYield": 1.72,
					"yield": 1.84
				},
				{
					"dataBase": "2022-03-31T00:00:00.000Z",
					"datePayment": "2022-04-14T00:00:00.000Z",
					"baseQuotation": 117.85,
					"dividendYield": 1.4,
					"yield": 1.65
				},
				{
					"dataBase": "2022-02-25T00:00:00.000Z",
					"datePayment": "2022-03-15T00:00:00.000Z",
					"baseQuotation": 117.1,
					"dividendYield": 1.4,
					"yield": 1.635
				},
				{
					"dataBase": "2022-01-31T00:00:00.000Z",
					"datePayment": "2022-02-14T00:00:00.000Z",
					"baseQuotation": 120.46,
					"dividendYield": 1.35,
					"yield": 1.63
				},
				{
					"dataBase": "2021-12-30T00:00:00.000Z",
					"datePayment": "2022-01-14T00:00:00.000Z",
					"baseQuotation": 115.37,
					"dividendYield": 1.45,
					"yield": 1.67
				},
				{
					"dataBase": "2021-11-30T00:00:00.000Z",
					"datePayment": "2021-12-14T00:00:00.000Z",
					"baseQuotation": 104.81,
					"dividendYield": 1.78,
					"yield": 1.869
				},
				{
					"dataBase": "2021-10-29T00:00:00.000Z",
					"datePayment": "2021-11-16T00:00:00.000Z",
					"baseQuotation": 119.7,
					"dividendYield": 1.14,
					"yield": 1.37
				}
			],
			"lastYield": 1.2,
			"max52weeks": 123.91,
			"min52weeks": 100.39,
			"mounthsPastLastRevenue": 0.79,
			"name": "Urca Prime Renda",
			"news": [
				{
					"date": "2022-08-16T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=340740&amp;flnk"
				},
				{
					"date": "2022-08-11T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336907&amp;flnk"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,20 por cota no dia 12/08/2022Data base: 29/07/2022 Fechamento: R$ 108,55 Rendimento%: 1,105"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=331947&amp;flnk"
				},
				{
					"date": "2022-07-22T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=329399&amp;flnk"
				},
				{
					"date": "2022-07-05T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/04/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=322646&amp;flnk"
				},
				{
					"date": "2022-07-05T00:00:00.000Z",
					"text": "Relatorio Gerencial - 31/03/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=322643&amp;flnk"
				},
				{
					"date": "2022-07-05T00:00:00.000Z",
					"text": "Relatorio Gerencial - 31/01/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=322637&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,85 por cota no dia 14/07/2022Data base: 30/06/2022 Fechamento: R$ 112,00 Rendimento%: 1,652"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321091&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321072&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321065&amp;flnk"
				},
				{
					"date": "2022-06-29T00:00:00.000Z",
					"text": "Liberacao de Negociacao das Cotas - 29/06/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=320051&amp;flnk"
				},
				{
					"date": "2022-06-29T00:00:00.000Z",
					"text": "Liberacao de Negociacao das Cotas - 29/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=320051&amp;flnk"
				},
				{
					"date": "2022-06-21T00:00:00.000Z",
					"text": "Distribuicao de Cotas - ICVM 476 - 09/06/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=313420&amp;flnk"
				}
			],
			"numberOfQuota": 9858247,
			"numberOfQuotaHolders": 72725,
			"patrimonialValuePerQuota": 100.37,
			"prevMonthNextYield": "2022-08-29T00:00:00.000Z",
			"sumYield": 14.81,
			"typeOfANBIMA": "Híbrido Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T13:09:32.792Z",
			"valorization12months": 11.68
		},
		{
			"ticker": "PORD11",
			"administrator": "Oliveira Trust",
			"avgMonthYield": 1.22,
			"createdAt": "2022-08-19T20:26:40.708Z",
			"currentQuota": 96.45,
			"dateOnCVM": "2012-09-19T00:00:00.000Z",
			"dividendYield": 1.56,
			"equity": 366040000,
			"frequencyYield": 1.1,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-07-29T00:00:00.000Z",
					"datePayment": "2022-08-05T00:00:00.000Z",
					"baseQuotation": 98.6,
					"dividendYield": 1.52,
					"yield": 1.5
				},
				{
					"dataBase": "2022-06-30T00:00:00.000Z",
					"datePayment": "2022-07-07T00:00:00.000Z",
					"baseQuotation": 97.47,
					"dividendYield": 1.76,
					"yield": 1.72
				},
				{
					"dataBase": "2022-05-31T00:00:00.000Z",
					"datePayment": "2022-06-07T00:00:00.000Z",
					"baseQuotation": 96.52,
					"dividendYield": 1.57,
					"yield": 1.52
				},
				{
					"dataBase": "2022-04-29T00:00:00.000Z",
					"datePayment": "2022-05-06T00:00:00.000Z",
					"baseQuotation": 94.73,
					"dividendYield": 1.49,
					"yield": 1.41
				},
				{
					"dataBase": "2022-03-31T00:00:00.000Z",
					"datePayment": "2022-04-07T00:00:00.000Z",
					"baseQuotation": 94.86,
					"dividendYield": 1.29,
					"yield": 1.22
				},
				{
					"dataBase": "2022-02-25T00:00:00.000Z",
					"datePayment": "2022-03-08T00:00:00.000Z",
					"baseQuotation": 94.19,
					"dividendYield": 1.17,
					"yield": 1.1
				},
				{
					"dataBase": "2022-01-31T00:00:00.000Z",
					"datePayment": "2022-02-07T00:00:00.000Z",
					"baseQuotation": 94.47,
					"dividendYield": 1.24,
					"yield": 1.17
				},
				{
					"dataBase": "2021-12-30T00:00:00.000Z",
					"datePayment": "2022-01-07T00:00:00.000Z",
					"baseQuotation": 96,
					"dividendYield": 1.12,
					"yield": 1.078
				},
				{
					"dataBase": "2021-11-30T00:00:00.000Z",
					"datePayment": "2021-12-07T00:00:00.000Z",
					"baseQuotation": 91.32,
					"dividendYield": 1.22,
					"yield": 1.11
				},
				{
					"dataBase": "2021-10-29T00:00:00.000Z",
					"datePayment": "2021-11-08T00:00:00.000Z",
					"baseQuotation": 94,
					"dividendYield": 0.99,
					"yield": 0.93
				}
			],
			"lastYield": 1.5,
			"max52weeks": 98.6,
			"min52weeks": 87.27,
			"mounthsPastLastRevenue": 0.79,
			"name": "Polo Crédito Imobiliário",
			"news": [
				{
					"date": "2022-08-15T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=339328&amp;flnk"
				},
				{
					"date": "2022-08-03T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=332925&amp;flnk"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 29/07/2022(N)",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=331837&amp;flnk"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 29/07/2022(N)",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=331837&amp;flnk"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,50 por cota no dia 05/08/2022Data base: 29/07/2022 Fechamento: R$ 98,60 Rendimento%: 1,521"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=331837&amp;flnk"
				},
				{
					"date": "2022-07-18T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=328238&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,72 por cota no dia 07/07/2022Data base: 30/06/2022 Fechamento: R$ 97,47 Rendimento%: 1,765"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=320960&amp;flnk"
				},
				{
					"date": "2022-06-14T00:00:00.000Z",
					"text": "Relatorio Gerencial - 31/05/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=314746&amp;flnk"
				},
				{
					"date": "2022-05-31T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,52 por cota no dia 07/06/2022Data base: 31/05/2022 Fechamento: R$ 96,52 Rendimento%: 1,575"
				},
				{
					"date": "2022-05-31T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 31/05/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=310486&amp;flnk"
				},
				{
					"date": "2022-05-12T00:00:00.000Z",
					"text": "Relatório Gerencial - 29/04/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=302269&amp;flnk"
				},
				{
					"date": "2022-05-12T00:00:00.000Z",
					"text": "Relatório Gerencial - 29/04/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=302269&amp;flnk"
				},
				{
					"date": "2022-05-12T00:00:00.000Z",
					"text": "Informe Trimestral - 31/03/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=301976&amp;flnk"
				}
			],
			"numberOfQuota": 3728375,
			"numberOfQuotaHolders": 18820,
			"patrimonialValuePerQuota": 98.18,
			"prevMonthNextYield": "2022-08-29T00:00:00.000Z",
			"sumYield": 13.37,
			"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T13:09:32.768Z",
			"valorization12months": 2.92
		},
		{
			"ticker": "HABT11",
			"administrator": "Vórtx DTVM LTDA",
			"avgMonthYield": 1.12,
			"createdAt": "2022-08-21T16:37:55.629Z",
			"currentQuota": 94.99,
			"dateOnCVM": "2019-05-09T00:00:00.000Z",
			"dividendYield": 1.37,
			"equity": 809760000,
			"frequencyYield": 1.1,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-07-29T00:00:00.000Z",
					"datePayment": "2022-08-12T00:00:00.000Z",
					"baseQuotation": 98.97,
					"dividendYield": 1.31,
					"yield": 1.3
				},
				{
					"dataBase": "2022-06-30T00:00:00.000Z",
					"datePayment": "2022-07-12T00:00:00.000Z",
					"baseQuotation": 101.9,
					"dividendYield": 1.28,
					"yield": 1.3
				},
				{
					"dataBase": "2022-05-31T00:00:00.000Z",
					"datePayment": "2022-06-10T00:00:00.000Z",
					"baseQuotation": 103.53,
					"dividendYield": 1.35,
					"yield": 1.4
				},
				{
					"dataBase": "2022-04-29T00:00:00.000Z",
					"datePayment": "2022-05-12T00:00:00.000Z",
					"baseQuotation": 104.16,
					"dividendYield": 1.2,
					"yield": 1.25
				},
				{
					"dataBase": "2022-03-31T00:00:00.000Z",
					"datePayment": "2022-04-12T00:00:00.000Z",
					"baseQuotation": 107.2,
					"dividendYield": 1.12,
					"yield": 1.2
				},
				{
					"dataBase": "2022-02-25T00:00:00.000Z",
					"datePayment": "2022-03-11T00:00:00.000Z",
					"baseQuotation": 107.76,
					"dividendYield": 1.21,
					"yield": 1.3
				},
				{
					"dataBase": "2022-01-31T00:00:00.000Z",
					"datePayment": "2022-02-11T00:00:00.000Z",
					"baseQuotation": 110.62,
					"dividendYield": 1.08,
					"yield": 1.2
				},
				{
					"dataBase": "2021-12-30T00:00:00.000Z",
					"datePayment": "2022-01-12T00:00:00.000Z",
					"baseQuotation": 110.34,
					"dividendYield": 1.18,
					"yield": 1.3
				},
				{
					"dataBase": "2021-11-30T00:00:00.000Z",
					"datePayment": "2021-12-10T00:00:00.000Z",
					"baseQuotation": 111.13,
					"dividendYield": 1.35,
					"yield": 1.5
				},
				{
					"dataBase": "2021-10-29T00:00:00.000Z",
					"datePayment": "2021-11-12T00:00:00.000Z",
					"baseQuotation": 117.57,
					"dividendYield": 1.28,
					"yield": 1.5
				}
			],
			"lastYield": 1.3,
			"max52weeks": 126.16,
			"min52weeks": 94,
			"mounthsPastLastRevenue": 0.79,
			"name": "Habitat II FII",
			"news": [
				{
					"date": "2022-08-19T00:00:00.000Z",
					"text": "Relatorio Gerencial - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=342369&amp;flnk"
				},
				{
					"date": "2022-08-15T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=339541&amp;flnk"
				},
				{
					"date": "2022-08-11T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336875&amp;flnk"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,30 por cota no dia 12/08/2022Data base: 29/07/2022 Fechamento: R$ 98,97 Rendimento%: 1,314"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=331932&amp;flnk"
				},
				{
					"date": "2022-07-21T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=329048&amp;flnk"
				},
				{
					"date": "2022-07-06T00:00:00.000Z",
					"text": "Outros Docs da Oferta Distribuicao Cotas - 30/06/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321364&amp;flnk"
				},
				{
					"date": "2022-07-06T00:00:00.000Z",
					"text": "Outros Docs da Oferta Distribuicao Cotas - 30/06/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321364&amp;flnk"
				},
				{
					"date": "2022-07-06T00:00:00.000Z",
					"text": "Outros Docs da Oferta Distribuicao Cotas - 30/06/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321364&amp;flnk"
				},
				{
					"date": "2022-07-01T00:00:00.000Z",
					"text": "Fato Relevante - 01/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321648&amp;flnk"
				},
				{
					"date": "2022-07-01T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 30/06/2022 (R)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321429&amp;flnk"
				},
				{
					"date": "2022-07-01T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 30/06/2022 (R)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321425&amp;flnk"
				},
				{
					"date": "2022-07-01T00:00:00.000Z",
					"text": "Outros Docs da Oferta Distribuicao Cotas - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321364&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,30 por cota no dia 12/07/2022Data base: 30/06/2022 Fechamento: R$ 101,90 Rendimento%: 1,276"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321112&amp;flnk"
				}
			],
			"numberOfQuota": 8126783,
			"numberOfQuotaHolders": 57046,
			"patrimonialValuePerQuota": 99.64,
			"prevMonthNextYield": "2022-08-29T00:00:00.000Z",
			"sumYield": 12.36,
			"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T13:09:32.869Z",
			"valorization12months": 23.33
		},
		{
			"ticker": "FLCR11",
			"administrator": "BRL Trust DTVM",
			"avgMonthYield": 1.35,
			"createdAt": "2022-08-19T20:26:41.490Z",
			"currentQuota": 97.4,
			"dateOnCVM": "2019-09-04T00:00:00.000Z",
			"dividendYield": 1.18,
			"equity": 63270000,
			"frequencyYield": 1.09,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-08-05T00:00:00.000Z",
					"datePayment": "2022-08-12T00:00:00.000Z",
					"baseQuotation": 98.88,
					"dividendYield": 1.16,
					"yield": 1.15
				},
				{
					"dataBase": "2022-07-07T00:00:00.000Z",
					"datePayment": "2022-07-14T00:00:00.000Z",
					"baseQuotation": 100.21,
					"dividendYield": 1.69,
					"yield": 1.69
				},
				{
					"dataBase": "2022-06-07T00:00:00.000Z",
					"datePayment": "2022-06-14T00:00:00.000Z",
					"baseQuotation": 100,
					"dividendYield": 1.75,
					"yield": 1.75
				},
				{
					"dataBase": "2022-05-06T00:00:00.000Z",
					"datePayment": "2022-05-13T00:00:00.000Z",
					"baseQuotation": 98.5,
					"dividendYield": 1.62,
					"yield": 1.6
				},
				{
					"dataBase": "2022-04-07T00:00:00.000Z",
					"datePayment": "2022-04-14T00:00:00.000Z",
					"baseQuotation": 99.64,
					"dividendYield": 1.34,
					"yield": 1.34
				},
				{
					"dataBase": "2022-03-08T00:00:00.000Z",
					"datePayment": "2022-03-15T00:00:00.000Z",
					"baseQuotation": 99.99,
					"dividendYield": 1.1,
					"yield": 1.1
				},
				{
					"dataBase": "2022-02-07T00:00:00.000Z",
					"datePayment": "2022-02-14T00:00:00.000Z",
					"baseQuotation": 99.54,
					"dividendYield": 1.39,
					"yield": 1.38
				},
				{
					"dataBase": "2022-01-07T00:00:00.000Z",
					"datePayment": "2022-01-14T00:00:00.000Z",
					"baseQuotation": 102.5,
					"dividendYield": 1.73,
					"yield": 1.77
				},
				{
					"dataBase": "2021-12-07T00:00:00.000Z",
					"datePayment": "2021-12-14T00:00:00.000Z",
					"baseQuotation": 101.77,
					"dividendYield": 1.57,
					"yield": 1.6
				},
				{
					"dataBase": "2021-11-08T00:00:00.000Z",
					"datePayment": "2021-11-16T00:00:00.000Z",
					"baseQuotation": 101.87,
					"dividendYield": 1.37,
					"yield": 1.4
				}
			],
			"lastYield": 1.15,
			"max52weeks": 103.26,
			"min52weeks": 94,
			"mounthsPastLastRevenue": 0.56,
			"name": "Faria Lima Capital Recebíveis Imobiliários I",
			"news": [
				{
					"date": "2022-08-15T00:00:00.000Z",
					"text": "Relatorio Gerencial - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=339393&amp;flnk"
				},
				{
					"date": "2022-08-12T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=337916&amp;flnk"
				},
				{
					"date": "2022-08-05T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,15 por cota no dia 12/08/2022Data base: 05/08/2022 Fechamento: R$ 98,88 Rendimento%: 1,163"
				},
				{
					"date": "2022-08-05T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 05/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=333892&amp;flnk"
				},
				{
					"date": "2022-08-05T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=333659&amp;flnk"
				},
				{
					"date": "2022-07-20T00:00:00.000Z",
					"text": "Informe Mensal - 05/2022 (R)",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=328705&amp;flnk"
				},
				{
					"date": "2022-07-18T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=328218&amp;flnk"
				},
				{
					"date": "2022-07-15T00:00:00.000Z",
					"text": "Informe Mensal - 06/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=327371&amp;flnk"
				},
				{
					"date": "2022-07-07T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,69 por cota no dia 14/07/2022Data base: 07/07/2022 Fechamento: R$ 100,21 Rendimento%: 1,686"
				},
				{
					"date": "2022-07-07T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 07/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323259&amp;flnk"
				},
				{
					"date": "2022-07-06T00:00:00.000Z",
					"text": "Relatorio Gerencial - 06/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323000&amp;flnk"
				},
				{
					"date": "2022-06-15T00:00:00.000Z",
					"text": "Informe Mensal - 05/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=315981&amp;flnk"
				},
				{
					"date": "2022-06-07T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,75 por cota no dia 14/06/2022Data base: 07/06/2022 Fechamento: R$ 100,00 Rendimento%: 1,750"
				},
				{
					"date": "2022-06-07T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 07/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=312093&amp;flnk"
				},
				{
					"date": "2022-05-30T00:00:00.000Z",
					"text": "Relatorio Gerencial - 29/04/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=310023&amp;flnk"
				}
			],
			"numberOfQuota": 633604,
			"numberOfQuotaHolders": 2783,
			"patrimonialValuePerQuota": 99.86,
			"prevMonthNextYield": "2022-09-05T00:00:00.000Z",
			"sumYield": 14.72,
			"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T13:09:32.699Z",
			"valorization12months": 2.7
		},
		{
			"ticker": "DEVA11",
			"administrator": "Vórtx DTVM LTDA",
			"avgMonthYield": 1.24,
			"createdAt": "2022-08-19T20:26:41.293Z",
			"currentQuota": 96.8,
			"dateOnCVM": "2020-07-02T00:00:00.000Z",
			"dividendYield": 1.29,
			"equity": 1.37,
			"frequencyYield": 1.09,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-08-05T00:00:00.000Z",
					"datePayment": "2022-08-12T00:00:00.000Z",
					"baseQuotation": 98.77,
					"dividendYield": 1.27,
					"yield": 1.25
				},
				{
					"dataBase": "2022-07-07T00:00:00.000Z",
					"datePayment": "2022-07-14T00:00:00.000Z",
					"baseQuotation": 100.17,
					"dividendYield": 1.41,
					"yield": 1.41
				},
				{
					"dataBase": "2022-06-07T00:00:00.000Z",
					"datePayment": "2022-06-14T00:00:00.000Z",
					"baseQuotation": 99.9,
					"dividendYield": 1.6,
					"yield": 1.6
				},
				{
					"dataBase": "2022-05-06T00:00:00.000Z",
					"datePayment": "2022-05-13T00:00:00.000Z",
					"baseQuotation": 97.6,
					"dividendYield": 1.43,
					"yield": 1.4
				},
				{
					"dataBase": "2022-04-07T00:00:00.000Z",
					"datePayment": "2022-04-14T00:00:00.000Z",
					"baseQuotation": 100.18,
					"dividendYield": 1.31,
					"yield": 1.31
				},
				{
					"dataBase": "2022-03-08T00:00:00.000Z",
					"datePayment": "2022-03-15T00:00:00.000Z",
					"baseQuotation": 101.8,
					"dividendYield": 1.16,
					"yield": 1.18
				},
				{
					"dataBase": "2022-02-07T00:00:00.000Z",
					"datePayment": "2022-02-14T00:00:00.000Z",
					"baseQuotation": 103.62,
					"dividendYield": 1.21,
					"yield": 1.25
				},
				{
					"dataBase": "2022-01-07T00:00:00.000Z",
					"datePayment": "2022-01-14T00:00:00.000Z",
					"baseQuotation": 102.98,
					"dividendYield": 1.31,
					"yield": 1.35
				},
				{
					"dataBase": "2021-12-07T00:00:00.000Z",
					"datePayment": "2021-12-14T00:00:00.000Z",
					"baseQuotation": 100.32,
					"dividendYield": 1.42,
					"yield": 1.42
				},
				{
					"dataBase": "2021-11-08T00:00:00.000Z",
					"datePayment": "2021-11-16T00:00:00.000Z",
					"baseQuotation": 103.01,
					"dividendYield": 1.36,
					"yield": 1.4
				}
			],
			"lastYield": 1.25,
			"max52weeks": 105.1,
			"min52weeks": 90,
			"mounthsPastLastRevenue": 0.56,
			"name": "Devant Recebíveis Imobiliários",
			"news": [
				{
					"date": "2022-08-17T00:00:00.000Z",
					"text": "Outros Docs da Oferta Distribuicao Cotas - 16/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=341225&amp;flnk"
				},
				{
					"date": "2022-08-15T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=339881&amp;flnk"
				},
				{
					"date": "2022-08-12T00:00:00.000Z",
					"text": "Relatorio Gerencial - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=338055&amp;flnk"
				},
				{
					"date": "2022-08-11T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336917&amp;flnk"
				},
				{
					"date": "2022-08-10T00:00:00.000Z",
					"text": "Distribuicao de Cotas - ICVM 476 - 09/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=335581&amp;flnk"
				},
				{
					"date": "2022-08-05T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,25 por cota no dia 12/08/2022Data base: 05/08/2022 Fechamento: R$ 98,77 Rendimento%: 1,266"
				},
				{
					"date": "2022-08-05T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 05/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=333972&amp;flnk"
				},
				{
					"date": "2022-08-05T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 05/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=333970&amp;flnk"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Outros Docs da Oferta Distribuicao Cotas - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=332138&amp;flnk"
				},
				{
					"date": "2022-07-19T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=328598&amp;flnk"
				},
				{
					"date": "2022-07-07T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,41 por cota no dia 14/07/2022Data base: 07/07/2022 Fechamento: R$ 100,17 Rendimento%: 1,408"
				},
				{
					"date": "2022-07-07T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 07/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323359&amp;flnk"
				},
				{
					"date": "2022-07-06T00:00:00.000Z",
					"text": "Formulario de Subscricao de Cotas - 06/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=322925&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Fato Relevante - 29/06/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=320501&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Fato Relevante - 29/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=320501&amp;flnk"
				}
			],
			"numberOfQuota": 13905815,
			"numberOfQuotaHolders": 115210,
			"patrimonialValuePerQuota": 98.88,
			"prevMonthNextYield": "2022-09-05T00:00:00.000Z",
			"sumYield": 13.48,
			"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T13:09:32.742Z",
			"valorization12months": 5.78
		},
		{
			"ticker": "IRDM11",
			"administrator": "BTG Pactual",
			"avgMonthYield": 1.08,
			"createdAt": "2022-08-21T16:36:26.693Z",
			"currentQuota": 101,
			"dateOnCVM": "2018-02-27T00:00:00.000Z",
			"dividendYield": 1.31,
			"equity": 3.15,
			"frequencyYield": 1.1,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-08-09T00:00:00.000Z",
					"datePayment": "2022-08-16T00:00:00.000Z",
					"baseQuotation": 101.87,
					"dividendYield": 1.3,
					"yield": 1.327
				},
				{
					"dataBase": "2022-07-11T00:00:00.000Z",
					"datePayment": "2022-07-18T00:00:00.000Z",
					"baseQuotation": 105,
					"dividendYield": 1.23,
					"yield": 1.287
				},
				{
					"dataBase": "2022-06-09T00:00:00.000Z",
					"datePayment": "2022-06-17T00:00:00.000Z",
					"baseQuotation": 105.7,
					"dividendYield": 1.28,
					"yield": 1.352
				},
				{
					"dataBase": "2022-05-10T00:00:00.000Z",
					"datePayment": "2022-05-17T00:00:00.000Z",
					"baseQuotation": 106,
					"dividendYield": 1.19,
					"yield": 1.261
				},
				{
					"dataBase": "2022-04-11T00:00:00.000Z",
					"datePayment": "2022-04-19T00:00:00.000Z",
					"baseQuotation": 111.52,
					"dividendYield": 1.06,
					"yield": 1.182
				},
				{
					"dataBase": "2022-03-10T00:00:00.000Z",
					"datePayment": "2022-03-17T00:00:00.000Z",
					"baseQuotation": 107.51,
					"dividendYield": 1.13,
					"yield": 1.22
				},
				{
					"dataBase": "2022-02-09T00:00:00.000Z",
					"datePayment": "2022-02-16T00:00:00.000Z",
					"baseQuotation": 110,
					"dividendYield": 0.99,
					"yield": 1.085
				},
				{
					"dataBase": "2022-01-11T00:00:00.000Z",
					"datePayment": "2022-01-18T00:00:00.000Z",
					"baseQuotation": 107.99,
					"dividendYield": 1.32,
					"yield": 1.425
				},
				{
					"dataBase": "2021-12-09T00:00:00.000Z",
					"datePayment": "2021-12-16T00:00:00.000Z",
					"baseQuotation": 103,
					"dividendYield": 1.09,
					"yield": 1.128
				},
				{
					"dataBase": "2021-11-10T00:00:00.000Z",
					"datePayment": "2021-11-18T00:00:00.000Z",
					"baseQuotation": 107.85,
					"dividendYield": 1.27,
					"yield": 1.366
				}
			],
			"lastYield": 1.33,
			"max52weeks": 118.3,
			"min52weeks": 100.01,
			"mounthsPastLastRevenue": 0.43,
			"name": "Iridium Recebíveis Imobiliários",
			"news": [
				{
					"date": "2022-08-16T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=340525&amp;flnk"
				},
				{
					"date": "2022-08-15T00:00:00.000Z",
					"text": "Fato Relevante - 15/08/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=339942&amp;flnk"
				},
				{
					"date": "2022-08-15T00:00:00.000Z",
					"text": "Fato Relevante - 15/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=339942&amp;flnk"
				},
				{
					"date": "2022-08-12T00:00:00.000Z",
					"text": "Relatorio Gerencial - 31/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=337999&amp;flnk"
				},
				{
					"date": "2022-08-11T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336605&amp;flnk"
				},
				{
					"date": "2022-08-09T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,327067205 por cota no dia 16/08/2022Data base: 09/08/2022 Fechamento: R$ 101,87 Rendimento%: 1,303"
				},
				{
					"date": "2022-08-09T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 09/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=335431&amp;flnk"
				},
				{
					"date": "2022-07-26T00:00:00.000Z",
					"text": "Formulario de Subscricao de Cotas - 26/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=330490&amp;flnk"
				},
				{
					"date": "2022-07-25T00:00:00.000Z",
					"text": "AGE - Ata da Assembleia - 25/07/2022 11:00",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=330206&amp;flnk"
				},
				{
					"date": "2022-07-25T00:00:00.000Z",
					"text": "Fato Relevante - 25/07/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=330194&amp;flnk"
				},
				{
					"date": "2022-07-25T00:00:00.000Z",
					"text": "Fato Relevante - 25/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=330194&amp;flnk"
				},
				{
					"date": "2022-07-21T00:00:00.000Z",
					"text": "Informe Mensal - 06/2022 (R)",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=329054&amp;flnk"
				},
				{
					"date": "2022-07-19T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=328299&amp;flnk"
				},
				{
					"date": "2022-07-11T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,287041575 por cota no dia 18/07/2022Data base: 11/07/2022 Fechamento: R$ 105,00 Rendimento%: 1,226"
				},
				{
					"date": "2022-07-11T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 11/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=324265&amp;flnk"
				}
			],
			"numberOfQuota": 33044580,
			"numberOfQuotaHolders": 253902,
			"patrimonialValuePerQuota": 95.31,
			"prevMonthNextYield": "2022-09-09T00:00:00.000Z",
			"sumYield": 11.86,
			"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T13:09:32.878Z",
			"valorization12months": 12.93
		},
		{
			"ticker": "RBRY11",
			"administrator": "BTG Pactual",
			"avgMonthYield": 1.08,
			"createdAt": "2022-08-22T12:36:16.275Z",
			"currentQuota": 101.99,
			"dateOnCVM": "2018-04-17T00:00:00.000Z",
			"dividendYield": 1.32,
			"equity": 396370000,
			"frequencyYield": 1.1,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-08-09T00:00:00.000Z",
					"datePayment": "2022-08-16T00:00:00.000Z",
					"baseQuotation": 101.59,
					"dividendYield": 1.33,
					"yield": 1.35
				},
				{
					"dataBase": "2022-07-11T00:00:00.000Z",
					"datePayment": "2022-07-18T00:00:00.000Z",
					"baseQuotation": 101.41,
					"dividendYield": 1.39,
					"yield": 1.41
				},
				{
					"dataBase": "2022-06-09T00:00:00.000Z",
					"datePayment": "2022-06-17T00:00:00.000Z",
					"baseQuotation": 102.49,
					"dividendYield": 1.22,
					"yield": 1.25
				},
				{
					"dataBase": "2022-05-10T00:00:00.000Z",
					"datePayment": "2022-05-17T00:00:00.000Z",
					"baseQuotation": 104.64,
					"dividendYield": 1.19,
					"yield": 1.25
				},
				{
					"dataBase": "2022-04-11T00:00:00.000Z",
					"datePayment": "2022-04-19T00:00:00.000Z",
					"baseQuotation": 105.77,
					"dividendYield": 1.23,
					"yield": 1.3
				},
				{
					"dataBase": "2022-03-10T00:00:00.000Z",
					"datePayment": "2022-03-17T00:00:00.000Z",
					"baseQuotation": 104.9,
					"dividendYield": 1.1,
					"yield": 1.15
				},
				{
					"dataBase": "2022-02-09T00:00:00.000Z",
					"datePayment": "2022-02-16T00:00:00.000Z",
					"baseQuotation": 106.92,
					"dividendYield": 1.08,
					"yield": 1.15
				},
				{
					"dataBase": "2022-01-11T00:00:00.000Z",
					"datePayment": "2022-01-18T00:00:00.000Z",
					"baseQuotation": 104.94,
					"dividendYield": 1.28,
					"yield": 1.34
				},
				{
					"dataBase": "2021-12-09T00:00:00.000Z",
					"datePayment": "2021-12-16T00:00:00.000Z",
					"baseQuotation": 102.95,
					"dividendYield": 1.09,
					"yield": 1.12
				},
				{
					"dataBase": "2021-11-10T00:00:00.000Z",
					"datePayment": "2021-11-18T00:00:00.000Z",
					"baseQuotation": 102.5,
					"dividendYield": 0.98,
					"yield": 1
				}
			],
			"lastYield": 1.35,
			"max52weeks": 107,
			"min52weeks": 96.51,
			"mounthsPastLastRevenue": 0.44,
			"name": "BR Crédito Imobiliário Estruturado",
			"news": [
				{
					"date": "2022-08-18T00:00:00.000Z",
					"text": "Relatorio Gerencial - 31/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=341583&amp;flnk"
				},
				{
					"date": "2022-08-17T00:00:00.000Z",
					"text": "Comunicado nao Fato Relevante - 16/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=341212&amp;flnk"
				},
				{
					"date": "2022-08-16T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=340318&amp;flnk"
				},
				{
					"date": "2022-08-12T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=337025&amp;flnk"
				},
				{
					"date": "2022-08-10T00:00:00.000Z",
					"text": "Outros Relatorios - 10/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=335792&amp;flnk"
				},
				{
					"date": "2022-08-09T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,35 por cota no dia 16/08/2022Data base: 09/08/2022 Fechamento: R$ 101,59 Rendimento%: 1,329"
				},
				{
					"date": "2022-08-09T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 09/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=335440&amp;flnk"
				},
				{
					"date": "2022-08-02T00:00:00.000Z",
					"text": "Fato Relevante - 02/08/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=332848&amp;flnk"
				},
				{
					"date": "2022-08-02T00:00:00.000Z",
					"text": "Formulario de Subscricao de Cotas - 02/08/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=332850&amp;flnk"
				},
				{
					"date": "2022-08-02T00:00:00.000Z",
					"text": "Formulario de Subscricao de Cotas - 02/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=332850&amp;flnk"
				},
				{
					"date": "2022-08-02T00:00:00.000Z",
					"text": "Fato Relevante - 02/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=332848&amp;flnk"
				},
				{
					"date": "2022-08-01T00:00:00.000Z",
					"text": "Formulario de Subscricao de Cotas - 01/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=332296&amp;flnk"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Anuncio de Inicio de Distribuicao de Cotas - 27/07/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=331128&amp;flnk"
				},
				{
					"date": "2022-07-28T00:00:00.000Z",
					"text": "Anuncio de Inicio de Distribuicao de Cotas - 27/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=331128&amp;flnk"
				},
				{
					"date": "2022-07-28T00:00:00.000Z",
					"text": "Prospecto Distribuicao Cotas - Definitivo - 27/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=331129&amp;flnk"
				}
			],
			"numberOfQuota": 3919747,
			"numberOfQuotaHolders": 17767,
			"patrimonialValuePerQuota": 101.12,
			"prevMonthNextYield": "2022-09-09T00:00:00.000Z",
			"sumYield": 11.89,
			"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T12:36:16.275Z",
			"valorization12months": 3.62
		},
		{
			"ticker": "RZAK11",
			"administrator": "BTG Pactual",
			"avgMonthYield": 1.35,
			"createdAt": "2022-08-19T20:26:42.069Z",
			"currentQuota": 99.8,
			"dateOnCVM": "2020-09-02T00:00:00.000Z",
			"dividendYield": 1.5,
			"equity": 321660000,
			"frequencyYield": 1.09,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-08-12T00:00:00.000Z",
					"datePayment": "2022-08-19T00:00:00.000Z",
					"baseQuotation": 99.86,
					"dividendYield": 1.5,
					"yield": 1.5
				},
				{
					"dataBase": "2022-07-14T00:00:00.000Z",
					"datePayment": "2022-07-21T00:00:00.000Z",
					"baseQuotation": 98.65,
					"dividendYield": 1.67,
					"yield": 1.649
				},
				{
					"dataBase": "2022-06-14T00:00:00.000Z",
					"datePayment": "2022-06-22T00:00:00.000Z",
					"baseQuotation": 97.95,
					"dividendYield": 1.84,
					"yield": 1.8
				},
				{
					"dataBase": "2022-05-13T00:00:00.000Z",
					"datePayment": "2022-05-20T00:00:00.000Z",
					"baseQuotation": 99.11,
					"dividendYield": 1.82,
					"yield": 1.8
				},
				{
					"dataBase": "2022-04-14T00:00:00.000Z",
					"datePayment": "2022-04-25T00:00:00.000Z",
					"baseQuotation": 98.47,
					"dividendYield": 1.22,
					"yield": 1.2
				},
				{
					"dataBase": "2022-03-15T00:00:00.000Z",
					"datePayment": "2022-03-22T00:00:00.000Z",
					"baseQuotation": 93.31,
					"dividendYield": 1.39,
					"yield": 1.3
				},
				{
					"dataBase": "2022-02-14T00:00:00.000Z",
					"datePayment": "2022-02-21T00:00:00.000Z",
					"baseQuotation": 95.25,
					"dividendYield": 1.36,
					"yield": 1.3
				},
				{
					"dataBase": "2022-01-14T00:00:00.000Z",
					"datePayment": "2022-01-21T00:00:00.000Z",
					"baseQuotation": 95,
					"dividendYield": 1.39,
					"yield": 1.324
				},
				{
					"dataBase": "2021-12-14T00:00:00.000Z",
					"datePayment": "2021-12-21T00:00:00.000Z",
					"baseQuotation": 85.63,
					"dividendYield": 1.28,
					"yield": 1.1
				},
				{
					"dataBase": "2021-11-16T00:00:00.000Z",
					"datePayment": "2021-11-23T00:00:00.000Z",
					"baseQuotation": 85.9,
					"dividendYield": 1.16,
					"yield": 1
				}
			],
			"lastYield": 1.5,
			"max52weeks": 101.45,
			"min52weeks": 81.71,
			"mounthsPastLastRevenue": 0.33,
			"name": "Riza Akin",
			"news": [
				{
					"date": "2022-08-16T00:00:00.000Z",
					"text": "Fato Relevante - 16/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=340788&amp;flnk"
				},
				{
					"date": "2022-08-16T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=340536&amp;flnk"
				},
				{
					"date": "2022-08-12T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,50 por cota no dia 19/08/2022Data base: 12/08/2022 Fechamento: R$ 99,86 Rendimento%: 1,502"
				},
				{
					"date": "2022-08-12T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 12/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=337826&amp;flnk"
				},
				{
					"date": "2022-08-11T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336952&amp;flnk"
				},
				{
					"date": "2022-07-21T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=329371&amp;flnk"
				},
				{
					"date": "2022-07-14T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,649029105 por cota no dia 21/07/2022Data base: 14/07/2022 Fechamento: R$ 98,65 Rendimento%: 1,672"
				},
				{
					"date": "2022-07-14T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 14/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=326203&amp;flnk"
				},
				{
					"date": "2022-07-12T00:00:00.000Z",
					"text": "Liberacao de Negociacao das Cotas - 08/07/2022 (R)(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=324991&amp;flnk"
				},
				{
					"date": "2022-07-12T00:00:00.000Z",
					"text": "Liberacao de Negociacao das Cotas - 08/07/2022 (R)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=324991&amp;flnk"
				},
				{
					"date": "2022-07-12T00:00:00.000Z",
					"text": "Distribuicao de Cotas - ICVM 476 - 06/07/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323930&amp;flnk"
				},
				{
					"date": "2022-07-11T00:00:00.000Z",
					"text": "Liberacao de Negociacao das Cotas - 08/07/2022(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323951&amp;flnk"
				},
				{
					"date": "2022-07-11T00:00:00.000Z",
					"text": "Comunicado nao Fato Relevante - 08/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323950&amp;flnk"
				},
				{
					"date": "2022-07-11T00:00:00.000Z",
					"text": "Liberacao de Negociacao das Cotas - 08/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323951&amp;flnk"
				},
				{
					"date": "2022-07-08T00:00:00.000Z",
					"text": "Distribuicao de Cotas - ICVM 476 - 06/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323930&amp;flnk"
				}
			],
			"numberOfQuota": 3403150,
			"numberOfQuotaHolders": 11617,
			"patrimonialValuePerQuota": 94.52,
			"prevMonthNextYield": "2022-09-12T00:00:00.000Z",
			"sumYield": 14.63,
			"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T13:09:32.778Z",
			"valorization12months": 11.38
		},
		{
			"ticker": "BVAR11",
			"administrator": "Rio Bravo Investimentos",
			"avgMonthYield": 10.57,
			"createdAt": "2022-08-19T20:26:41.794Z",
			"currentQuota": 100.01,
			"dateOnCVM": "2014-10-27T00:00:00.000Z",
			"dividendYield": 7.98,
			"equity": 642030000,
			"frequencyYield": 1.11,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-08-15T00:00:00.000Z",
					"datePayment": "2022-08-23T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 7.98,
					"yield": 7.98
				},
				{
					"dataBase": "2022-07-15T00:00:00.000Z",
					"datePayment": "2022-07-25T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 17.42,
					"yield": 17.42
				},
				{
					"dataBase": "2022-06-30T00:00:00.000Z",
					"datePayment": "2022-07-15T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 8,
					"yield": 8
				},
				{
					"dataBase": "2022-06-15T00:00:00.000Z",
					"datePayment": "2022-06-24T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 22.13,
					"yield": 22.13
				},
				{
					"dataBase": "2022-05-13T00:00:00.000Z",
					"datePayment": "2022-05-23T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 7.01,
					"yield": 7.01
				},
				{
					"dataBase": "2022-04-14T00:00:00.000Z",
					"datePayment": "2022-04-26T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 6.86,
					"yield": 6.86
				},
				{
					"dataBase": "2022-03-15T00:00:00.000Z",
					"datePayment": "2022-03-23T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 7.37,
					"yield": 7.37
				},
				{
					"dataBase": "2022-01-17T00:00:00.000Z",
					"datePayment": "2022-01-24T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 16.2,
					"yield": 16.2
				},
				{
					"dataBase": "2021-12-15T00:00:00.000Z",
					"datePayment": "2021-12-23T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 12,
					"yield": 12
				},
				{
					"dataBase": "2021-11-12T00:00:00.000Z",
					"datePayment": "2021-11-23T00:00:00.000Z",
					"baseQuotation": 100.01,
					"dividendYield": 12.39,
					"yield": 12.39
				}
			],
			"lastYield": 7.98,
			"max52weeks": 0,
			"min52weeks": 0,
			"mounthsPastLastRevenue": 0.24,
			"name": "Brasil Varejo",
			"news": [
				{
					"date": "2022-08-15T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 7,98 por cota no dia 23/08/2022Data base: 15/08/2022"
				},
				{
					"date": "2022-08-15T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 15/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=339715&amp;flnk"
				},
				{
					"date": "2022-08-11T00:00:00.000Z",
					"text": "Rentabilidade - 07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336451&amp;flnk"
				},
				{
					"date": "2022-08-11T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336437&amp;flnk"
				},
				{
					"date": "2022-08-05T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=333927&amp;flnk"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Informou distribuição de:Amortização no valor de R$ 0,79932 por cota no dia 08/08/2022Data base: 29/07/2022"
				},
				{
					"date": "2022-07-29T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 29/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=331924&amp;flnk"
				},
				{
					"date": "2022-07-15T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 17,42 por cota no dia 25/07/2022Data base: 15/07/2022"
				},
				{
					"date": "2022-07-15T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 15/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=327391&amp;flnk"
				},
				{
					"date": "2022-07-14T00:00:00.000Z",
					"text": "Rentabilidade - 06/2022 (R)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=325841&amp;flnk"
				},
				{
					"date": "2022-07-13T00:00:00.000Z",
					"text": "Rentabilidade - 06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=325683&amp;flnk"
				},
				{
					"date": "2022-07-13T00:00:00.000Z",
					"text": "Informe Mensal - 06/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=325656&amp;flnk"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 8,00 por cota no dia 15/07/2022Data base: 30/06/2022"
				},
				{
					"date": "2022-06-30T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321025&amp;flnk"
				},
				{
					"date": "2022-06-15T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 22,13 por cota no dia 24/06/2022Data base: 15/06/2022"
				}
			],
			"numberOfQuota": 625540,
			"numberOfQuotaHolders": 69,
			"patrimonialValuePerQuota": 1026.36,
			"prevMonthNextYield": "2022-09-15T00:00:00.000Z",
			"sumYield": 117.36,
			"typeOfANBIMA": "Renda Gestão Passiva",
			"typeOfFII": "Tijolo: Varejo",
			"updatedAt": "2022-08-22T13:09:32.959Z",
			"valorization12months": 0
		},
		{
			"ticker": "CCRF11",
			"administrator": "BTG Pactual",
			"avgMonthYield": 1.08,
			"createdAt": "2022-08-19T20:26:41.067Z",
			"currentQuota": 98.8,
			"dateOnCVM": "2021-03-29T00:00:00.000Z",
			"dividendYield": 1.11,
			"equity": 153010000,
			"frequencyYield": 1.09,
			"lastRevenuesTable": [
				{
					"dataBase": "2022-08-17T00:00:00.000Z",
					"datePayment": "2022-08-24T00:00:00.000Z",
					"baseQuotation": 98.98,
					"dividendYield": 1.11,
					"yield": 1.1
				},
				{
					"dataBase": "2022-07-19T00:00:00.000Z",
					"datePayment": "2022-07-26T00:00:00.000Z",
					"baseQuotation": 99,
					"dividendYield": 1.92,
					"yield": 1.9
				},
				{
					"dataBase": "2022-06-20T00:00:00.000Z",
					"datePayment": "2022-06-27T00:00:00.000Z",
					"baseQuotation": 99.9,
					"dividendYield": 0.74,
					"yield": 0.74
				},
				{
					"dataBase": "2022-05-18T00:00:00.000Z",
					"datePayment": "2022-05-25T00:00:00.000Z",
					"baseQuotation": 100,
					"dividendYield": 1.26,
					"yield": 1.256
				},
				{
					"dataBase": "2022-04-20T00:00:00.000Z",
					"datePayment": "2022-04-28T00:00:00.000Z",
					"baseQuotation": 98.95,
					"dividendYield": 1.21,
					"yield": 1.2
				},
				{
					"dataBase": "2022-03-18T00:00:00.000Z",
					"datePayment": "2022-03-25T00:00:00.000Z",
					"baseQuotation": 99.08,
					"dividendYield": 1.06,
					"yield": 1.047
				},
				{
					"dataBase": "2022-02-17T00:00:00.000Z",
					"datePayment": "2022-02-24T00:00:00.000Z",
					"baseQuotation": 99.9,
					"dividendYield": 1.35,
					"yield": 1.348
				},
				{
					"dataBase": "2022-01-19T00:00:00.000Z",
					"datePayment": "2022-01-26T00:00:00.000Z",
					"baseQuotation": 101.02,
					"dividendYield": 1.3,
					"yield": 1.315
				},
				{
					"dataBase": "2021-12-17T00:00:00.000Z",
					"datePayment": "2021-12-27T00:00:00.000Z",
					"baseQuotation": 101.99,
					"dividendYield": 1.08,
					"yield": 1.102
				},
				{
					"dataBase": "2021-11-19T00:00:00.000Z",
					"datePayment": "2021-11-26T00:00:00.000Z",
					"baseQuotation": 100,
					"dividendYield": 0.83,
					"yield": 0.826
				}
			],
			"lastYield": 1.1,
			"max52weeks": 112,
			"min52weeks": 80.01,
			"mounthsPastLastRevenue": 0.17,
			"name": "Canvas CRI",
			"news": [
				{
					"date": "2022-08-17T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,10 por cota no dia 24/08/2022Data base: 17/08/2022 Fechamento: R$ 98,98 Rendimento%: 1,111"
				},
				{
					"date": "2022-08-17T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 17/08/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=341498&amp;flnk"
				},
				{
					"date": "2022-08-16T00:00:00.000Z",
					"text": "Informe Mensal - 07/2022",
					"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=340319&amp;flnk"
				},
				{
					"date": "2022-08-12T00:00:00.000Z",
					"text": "Informe Trimestral - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=337026&amp;flnk"
				},
				{
					"date": "2022-07-22T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=329748&amp;flnk"
				},
				{
					"date": "2022-07-19T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,90 por cota no dia 26/07/2022Data base: 19/07/2022 Fechamento: R$ 99,00 Rendimento%: 1,919"
				},
				{
					"date": "2022-07-19T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 19/07/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=328577&amp;flnk"
				},
				{
					"date": "2022-07-01T00:00:00.000Z",
					"text": "Relatorio Gerencial - 31/05/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=321507&amp;flnk"
				},
				{
					"date": "2022-06-20T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 0,74 por cota no dia 27/06/2022Data base: 20/06/2022 Fechamento: R$ 99,90 Rendimento%: 0,741"
				},
				{
					"date": "2022-06-20T00:00:00.000Z",
					"text": "Aviso aos Cotistas - 20/06/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=317576&amp;flnk"
				},
				{
					"date": "2022-05-24T00:00:00.000Z",
					"text": "AGE - Carta Consulta - 23/05/2022 10:00(N)",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=298337&amp;flnk"
				},
				{
					"date": "2022-05-24T00:00:00.000Z",
					"text": "Regulamento - 23/05/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=307984&amp;flnk"
				},
				{
					"date": "2022-05-24T00:00:00.000Z",
					"text": "AGE - Ata da Assembleia - 23/05/2022 10:00",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=307985&amp;flnk"
				},
				{
					"date": "2022-05-19T00:00:00.000Z",
					"text": "Relatorio Gerencial - 30/04/2022",
					"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=307035&amp;flnk"
				},
				{
					"date": "2022-05-18T00:00:00.000Z",
					"text": "Informou distribuição de:Rendimento no valor de R$ 1,2562 por cota no dia 25/05/2022Data base: 18/05/2022 Fechamento: R$ 100,00 Rendimento%: 1,256"
				}
			],
			"numberOfQuota": 1571900,
			"numberOfQuotaHolders": 155,
			"patrimonialValuePerQuota": 97.34,
			"prevMonthNextYield": "2022-09-17T00:00:00.000Z",
			"sumYield": 11.86,
			"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
			"typeOfFII": "Papel: CRIs",
			"updatedAt": "2022-08-22T13:09:32.685Z",
			"valorization12months": 9.78
		}
	]
}
```
## POST on http://localhost:3000/api/fii/refreshList
```
#return: 
{
	"error": false,
	"message": "Refreshing tickers",
	"listTicker": []
}
```
## Technology
* [Axios](https://axios-http.com/)
* [Cors](https://github.com/expressjs/cors#readme)
* [Dotenv](https://github.com/motdotla/dotenv#readme)
* [Express](https://expressjs.com/)
* [Moment](https://momentjs.com/)
* [Mongoose](https://mongoosejs.com/)

## Contact
* Homepage: [fsrezende.com.br](https://fsrezende.com.br/)
* e-mail: fsr.trabalho@gmail.com
* Linkedin: [fsrezende](https://www.linkedin.com/in/fsrezende)
