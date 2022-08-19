import mongoose from "mongoose";

const RevenuesSchema = new mongoose.Schema(
  {
    dataBase: { type: Date }, 
    datePayment: { type: Date }, 
    baseQuotation: { type: Number }, 
    dividendYield: { type: Number }, 
    yield: { type: Number }, 
  },
  { timestamps: false }
);

const NewsSchema = new mongoose.Schema(
  {
    date: { type: Date }, 
    text: { type: String }, 
    link: { type: String }, 
  },
  { timestamps: false }
);

const FiiSchema = new mongoose.Schema(
  {
    /**
      "Ticker": "SRVD11",
      "Name": "Serra Verde",
      "Administrator": "Vórtx DTVM LTDA",
      "DividendYield": "2,57%",
      "LastYield": "R$0,20",
      "Equity": "R$71,73 M",
      "PatrimonialValuePerQuota": "R$0,75",
      "CurrentQuota": "7,79",
      "Min52weeks": "7,00",
      "Max52weeks": "10,00",
      "Valorization12months": "19,11",
      "TypeOfFII": "Indefinido",
      "TypeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
      "DateOnCVM": "--/--/--",
      "NumberOfQuota": "96.286.021",
      "NumberOfQuotaHolders": "92"
      "lastRevenuesTable": [
        {
          "DataBase": "08.09.2021",
          "DatePayment": "15.09.2021",
          "BaseQuotation": "R$ 120,00",
          "DY": "12,09 %",
          "Dividend": "R$ 14,504"
        },
     */
    
    ticker: { type: String, unique: true, required: true },
    name: { type: String },
    administrator: { type: String },
    dividendYield: { type: Number, required: true },
    lastYield: { type: Number, required: true },
    mounthsPastLastRevenue: { type: Number }, 
    frequencyYield: { type: Number }, 
    sumYield: { type: Number }, 
    avgMonthYield: { type: Number }, 
    prevMonthNextYield: { type: Date },
    equity: { type: Number, required: true },
    patrimonialValuePerQuota: { type: Number, required: true },
    currentQuota: { type: Number },
    min52weeks: { type: Number },
    max52weeks: { type: Number },
    valorization12months: { type: Number },
    typeOfFII: { type: String },
    typeOfANBIMA: { type: String },
    dateOnCVM: { type: Date },
    numberOfQuota: { type: Number },
    numberOfQuotaHolders: { type: Number },
    lastRevenuesTable: [RevenuesSchema],
    news: [NewsSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Fii", FiiSchema);
